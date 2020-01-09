import React, { Component } from "react";

export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      total: 0,
      money: 0
    }
    this.addToCart = this.addToCart.bind(this);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  addToCart(product) {
    let check = this.state.cartItems.find(item => item.id === product.id);
    if(!check) {
        const productWithQuantity = { ...product, quantity: 1 };
        this.setState({
            cartItems: [...this.state.cartItems, productWithQuantity],
            total: this.state.total + 1,
            money: this.state.money += parseFloat(product.price.split('.').join(''))
        });
    } else {
        this.increase(product);
    }
  }

  increase(product) {
    this.setState({
        cartItems: this.state.cartItems.map(item => {
            if (item.id === product.id) {
              item.quantity = item.quantity + 1;
            }
            return item;
        }),
        total: this.state.total + 1,
        money: this.state.money += parseFloat(product.price.split('.').join(''))
    });
  }

  decrease(product) {
    if (product.quantity > 1) {
      this.setState({
        cartItems: this.state.cartItems.map(item => {
          if (item.id === product.id) {
            item.quantity = item.quantity - 1;
          }
          return item;
        }),
        total: this.state.total - 1,
        money: this.state.money -= parseFloat(product.price.split('.').join(''))
      });
    }
    else {
      this.setState({
        cartItems: this.state.cartItems.filter(item => item.id !== product.id),
        total: this.state.total - 1,
        money: this.state.money -= parseFloat(product.price.split('.').join(''))
      })
    }
  }

  render() {
    return (
      <CartContext.Provider
        value={{
            total: this.state.total,
            money: this.state.money,
            cartItems: this.state.cartItems,
            addToCart: this.addToCart,
            increase: this.increase,
            decrease: this.decrease
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
