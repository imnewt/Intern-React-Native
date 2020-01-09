import React, { Component } from "react"

import Login from './components/Login'
import AuthLoadingScreen from "./screens/AuthLoadingScreen"
import ListProduct from './screens/ListProduct'
import PhoneDetail from './screens/PhoneDetail'
import CartScreen from "./screens/CartScreen"

import { CartProvider } from "./contexts/Cart"

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const RootStack = createStackNavigator (
  {
    AuthLoading: AuthLoadingScreen,
    App: ListProduct,
    Auth: Login,
    PhoneDetail: PhoneDetail,
    CartScreen: CartScreen
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

const AppContainer = createAppContainer(RootStack);
export default class App extends Component {
  render() {
    return(
      <CartProvider>
        <AppContainer />
      </CartProvider>
    ) 
  }
}