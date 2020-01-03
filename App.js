import Login from './components/Login'
import Profile from "./screens/Profile"
import AuthLoadingScreen from "./screens/AuthLoadingScreen"
import ListProduct from './screens/ListProduct'
import PhoneDetail from './screens/PhoneDetail'

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: Profile,
      Auth: Login,
      Products: ListProduct,
      PhoneDetail: PhoneDetail
    },
    {
      initialRouteName: 'Products',
    }
  )
);