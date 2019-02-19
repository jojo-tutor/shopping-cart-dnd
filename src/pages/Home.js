import React, { Component } from 'react';
import uuidv1 from 'uuid/v1'
import Product from '../components/Product'
import Cart from '../components/Cart'
import { onceGetDocuments } from '../api/db'

const getCartProduct = (cartList, productList) => {
  return cartList.map(cart => ({ ...cart, product: productList.find(product => cart.productId === product.id) }))
}

class Home extends Component {
  state = {
    cartList: [],
    productList: []
  }

  componentDidMount() {
    onceGetDocuments('/products').then((products) => {
      const productList = Object.entries(products).reduce((acc, [key, value]) => ([...acc, value]), [])
      this.setState({ productList })
    })
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
              cartItem.quantity += 1
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
      <div className="shop row">
        <Product
          className='col-sm-8'
          productHero='/images/hero.jpg'
          productList={productList}
          onAddCartItem={this.handleAddCartItem}
        />

        <Cart
          className='col-sm-4'
          list={getCartProduct(cartList, productList)}
          onQuantityChange={this.handleQuantityChange}
          onRemoveCartItem={this.handleRemoveCartItem}
        />
      </div>
    );
  }
}

export default Home;
