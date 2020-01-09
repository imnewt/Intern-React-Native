import Login from './components/Login'
import AuthLoadingScreen from "./screens/AuthLoadingScreen"
import ListProduct from './screens/ListProduct'
import PhoneDetail from './screens/PhoneDetail'
import Cart from "./screens/Cart"

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default createAppContainer(
  createStackNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: ListProduct,
      Auth: Login,
      PhoneDetail: PhoneDetail,
      Cart: Cart
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);