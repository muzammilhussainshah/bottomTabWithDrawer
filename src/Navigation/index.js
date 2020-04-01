import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignInScreen from '../Screens/AuthScreens/SignInScreen';
import AuthLoadingScreen from '../Screens/AuthScreens/AuthLoadingScreen';
import AppNavigator from './AppNavigator';

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator(
  {
    // AuthLoading: AuthLoadingScreen,
    App: AppNavigator,
    // Auth: AuthStack,
  },
  {
    initialRouteName: 'App',
  }
));
