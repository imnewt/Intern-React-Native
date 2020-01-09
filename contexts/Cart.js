import React, { Component } from "react";
import { AsyncStorage } from "react-native"

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

  addToCart = async (product) => {
    let check = this.state.cartItems.find(item => item.id === product.id);
    if(!check) {
      const productWithQuantity = { ...product, quantity: 1 };
      this.setState({
          cartItems: [...this.state.cartItems, productWithQuantity],
          total: this.state.total + 1,
          money: this.state.money += parseFloat(product.price.split('.').join(''))
      });
      //this._saveDataToAsyncStorage(this.state.cartItems, this.state.total, this.state.money);
    } else {
        this.increase(product);
    }
  }

  increase = async (product) => {
    await this.setState({
        cartItems: this.state.cartItems.map(item => {
            if (item.id === product.id) {
              item.quantity = item.quantity + 1;
            }
            return item;
        }),
        total: this.state.total + 1,
        money: this.state.money += parseFloat(product.price.split('.').join(''))
    });
    //console.log(typeof JSON.stringify(this.state.cartItems))
    await this._saveDataToAsyncStorage(this.state.cartItems, this.state.total, this.state.money);
  }

  decrease = async (product) => {
    if (product.quantity > 1) {
      await this.setState({
        cartItems: this.state.cartItems.map(item => {
          if (item.id === product.id) {
            item.quantity = item.quantity - 1;
          }
          return item;
        }),
        total: this.state.total - 1,
        money: this.state.money -= parseFloat(product.price.split('.').join(''))
      });
      await this._saveDataToAsyncStorage(this.state.cartItems, this.state.total, this.state.money);
    }
    else {
      await this.setState({
        cartItems: this.state.cartItems.filter(item => item.id !== product.id),
        total: this.state.total - 1,
        money: this.state.money -= parseFloat(product.price.split('.').join(''))
      })
      await this._saveDataToAsyncStorage(this.state.cartItems, this.state.total, this.state.money);
    }
  }

  _saveDataToAsyncStorage = async (cartItems, total, money) => {
    await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));
    await AsyncStorage.setItem('total', JSON.stringify(total));
    await AsyncStorage.setItem('money', JSON.stringify(money));
  }

  _getDataFromAsyncStorage = async () => {
      const cartItems = await AsyncStorage.getItem('cartItems');
      const total = await AsyncStorage.getItem('total');
      const money = await AsyncStorage.getItem('money');
      await this.setState({
        cartItems: JSON.parse(cartItems) || [],
        total: Number(total) || 0,
        money: Number(money)
      })
  }

  componentDidMount() {
    this._getDataFromAsyncStorage();
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
