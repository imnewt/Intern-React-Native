import Login from './components/Login'
import Profile from "./screens/Profile"
import AuthLoadingScreen from "./screens/AuthLoadingScreen"

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppStack = createStackNavigator({ Home: Profile });
const AuthStack = createStackNavigator({ Login: Login });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: Profile,
      Auth: Login,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);