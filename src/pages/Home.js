import React, { PureComponent } from 'react';
import uuidv1 from 'uuid/v1'
import Product from '../components/Product'
import Cart from '../components/Cart'
import withDnDContext from '../components/DnD/withDnDContext'
import { onceGetDocuments } from '../api/db'
import { makeCancelable } from '../utils/tools'

const getCartProduct = (cartList, productList) => {
  return cartList.map(cart => ({ ...cart, product: productList.find(product => cart.productId === product.id) }))
}

class Home extends PureComponent {
  state = {
    cartList: [],
    productList: []
  }

  componentDidMount() {
    this.productListener = makeCancelable(onceGetDocuments('/products'))
    this.productListener
      .promise
      .then((products) => {
        const productList = Object.entries(products).reduce((acc, [key, value]) => ([...acc, value]), [])
        this.setState({ productList })
      })
      .catch(error => console.log(error))
  }

  componentWillUnmount() {
    this.productListener.cancel()
  }

  handleQuantityChange = (quantity, id) => {
    this.setState(({ cartList }) => {
      return {
        cartList: cartList.map(cartItem => {
          if (cartItem.id === id) {
            cartItem.quantity = quantity
          }
          return cartItem
        })
      }
    })
  }

  handleAddCartItem = (productId) => {
    this.setState(({ cartList }) => {
      const productExists = cartList.some(e => e.productId === productId)
      if (productExists) {
        return {
          cartList: cartList.map(cartItem => {
            if (cartItem.productId === productId) {
              return { ...cartItem, quantity: Number(cartItem.quantity) + 1 }
            }
            return cartItem
          })
        }
      }

      const cartItem = { id: uuidv1(), productId, quantity: 1 }
      return {
        cartList: [...cartList, cartItem]
      }
    })
  }

  handleRemoveCartItem = (id) => {
    this.setState(({ cartList }) => ({ cartList: cartList.filter(e => e.id !== id) }))
  }

  render() {
    const { productList, cartList } = this.state

    return (
      <div className="page shop row">
        <Product
          className='col col-md-9 col-sm-8'
          productList={productList}
          onAddCartItem={this.handleAddCartItem}
        />

        <Cart
          className='col col-md-3 col-sm-4'
          cartList={getCartProduct(cartList, productList)}
          onQuantityChange={this.handleQuantityChange}
          onAddCartItem={this.handleAddCartItem}
          onRemoveCartItem={this.handleRemoveCartItem}
        />
      </div>
    );
  }
}

export default withDnDContext(Home)
