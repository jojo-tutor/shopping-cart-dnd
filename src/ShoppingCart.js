import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/Product'
import Cart from './components/Cart'


const getCartProduct = (cartList, productList) => {
  return cartList.map(cart => ({ ...cart, product: productList.find(product => cart.productId === product.id) }))
}

const productList = [
  {
    id: 1,
    title: 'PEEKABOO MINI',
    description: 'White leather bag with exotic details',
    originalPrice: 450,
    sellPrice: 449,
    imageSource: 'https://images.www.fendi.com/images/h0c/hb0/8913063378974/8BN244A6L8F170C_01_large#product-medium',
  },
  {
    id: 2,
    title: 'Fendi',
    description: 'Bag Bugs T-shirt in black cotton',
    originalPrice: 900,
    sellPrice: 890,
    imageSource: 'https://images.www.fendi.com/images/h33/h68/8918025142302/FY072294TF0QA1_01_large#product-medium',
  },
  {
    id: 3,
    title: 'CREW-NECK',
    description: 'Cotton and cashmere sweater with intarsia',
    originalPrice: 100,
    sellPrice: 99,
    imageSource: 'https://images.www.fendi.com/images/h0e/h87/8886205939742/JFG042A3TEF0QA1_01_large#product-medium',
  }
]

const cartList = [
  {
    id: 1,
    productId: 1,
    quantity: 2
  },
  {
    id: 2,
    productId: 2,
    quantity: 1
  }
]

class App extends Component {
  state = {
    cartList,
    productList
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

  render() {
    const { cartList } = this.state

    return (
      <div className="App">
        <Product
          productList={productList}
        />
        <Cart
          list={getCartProduct(cartList, productList)}
          onQuantityChange={this.handleQuantityChange}
        />
      </div>
    );
  }
}

export default App;
