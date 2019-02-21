import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import uuidv1 from 'uuid/v1'
import flow from 'lodash/flow'
import pick from 'lodash/pick'
import Product from '../components/Product'
import Cart from '../components/Cart'
import Toast from '../components/Toast'
import ToastContent from '../components/Toast/ToastContent'
import OrderMessage from '../components/Toast/OrderMessage'
import withDnDContext from '../components/DnD/withDnDContext'
import { onceGetDocuments, getDocumentChildUpdates, createDocument } from '../api/db'
import { makeCancelable, updateListItem, getOrderTotalPrice, getOrderTotalCount, formatCurrency } from '../utils/tools'
import 'react-toastify/dist/ReactToastify.min.css'

class Home extends PureComponent {
  state = {
    cartList: [],
    productList: []
  }

  componentDidMount() {
    this.subscribeListeners()
  }

  componentWillUnmount() {
    this.unsubscribeListeners()
  }

  subscribeListeners() {
    this.subscribeProduct()
    this.subscribeOrder()
  }

  subscribeProduct() {
    this.productListener = makeCancelable(onceGetDocuments('/products'))
    this.productListener
      .getPromise()
      .then((products) => {
        const productList = this.formatProducts(products)
        this.setState({ productList })
      })
      .catch(error => console.log(error))
  }

  subscribeOrder() {
    getDocumentChildUpdates('/orders', (snapshot) => {
      const { session } = this.props
      const order = snapshot.val()
      if (order.email !== session.email) {
        this.showOrderFeedsToast(order)
      }
    })
  }

  unsubscribeListeners() {
    this.productListener.cancel()
  }

  createOrder = (order) => createDocument('/orders', order)

  upsertCart(cartList, productId) {
    const productExists = cartList.some(e => e.productId === productId)
    if (productExists) {
      return {
        cartList: updateListItem(
          cartList,
          cartItem => cartItem.productId === productId,
          cartItem => ({ quantity: Number(cartItem.quantity) + 1 })
        )
      }
    }

    const cartItem = { id: uuidv1(), productId, quantity: 1 }
    return {
      cartList: [...cartList, cartItem]
    }
  }

  getCartProduct = () => {
    const { cartList, productList } = this.state
    return cartList.map(cart => ({
      ...cart,
      product: productList.find(product => cart.productId === product.id)
    }))
  }

  formatProducts = (products) => Object
    .entries(products)
    .reduce((acc, [key, value]) => ([...acc, value]), [])

  formatOrderItems(cartListWithProduct) {
    return cartListWithProduct.reduce((acc, curr) => {
      const { productId, quantity, product = {} } = curr
      const price = Number(quantity) * Number(product.price)
      return [...acc, { id: uuidv1(), productId, quantity, price }]
    }, [])
  }

  handleQuantityChange = (quantity, cartItemId) => {
    this.setState(({ cartList }) => ({
      cartList: updateListItem(
        cartList,
        cartItem => cartItem.id === cartItemId,
        () => ({ quantity })
      )
    }))
  }

  handleAddCartItem = (productId) => {
    this.setState(({ cartList }) => this.upsertCart(cartList, productId))
  }

  handleRemoveCartItem = (id) => {
    this.setState(({ cartList }) => ({ cartList: cartList.filter(e => e.id !== id) }))
  }

  handleBuyProduct = () => {
    const { session } = this.props
    const { productList, cartList } = this.state

    const getOrderItems = flow([
      this.getCartProduct,
      this.formatOrderItems
    ])

    this.createOrder({
      id: uuidv1(),
      email: session.email,
      date: new Date().toISOString(),
      items: getOrderItems()
    }).then(() => {
      this.setState({ cartList: [] })
      this.showOrderCreatedToast()
    })
  }

  getOrderCreateContent = () => <div>Product(s) successfully bought!</div>

  showOrderCreatedToast() {
    toast.success(
      <ToastContent>
        {() => <div>Product(s) successfully bought!</div>}
      </ToastContent>,
      {
        hideProgressBar: true,
        position: 'top-center'
      }
    )
  }

  showOrderFeedsToast(order) {
    const { email, date, items } = order
    const price = getOrderTotalPrice(items)
    const total = getOrderTotalCount(items)
    toast(
      <ToastContent
        email={email}
        date={date}
        price={price}
        total={total}
      >
        {childProps => <OrderMessage {...childProps} />}
      </ToastContent>
    )
  }

  render() {
    const { productList } = this.state

    return (
      <div className='page shop row'>
        <Product
          productList={productList}
          onAddCartItem={this.handleAddCartItem}
        />
        <Cart
          cartList={this.getCartProduct()}
          onQuantityChange={this.handleQuantityChange}
          onBuyProduct={this.handleBuyProduct}
          onAddCartItem={this.handleAddCartItem}
          onRemoveCartItem={this.handleRemoveCartItem}
        />
        <Toast />
      </div>
    )
  }
}

Home.propTypes = {
  session: PropTypes.object.isRequired
}


export default withDnDContext(Home)
