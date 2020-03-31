import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../Screens/AppScreens/HomeScreen';
import SearchScreen from '../Screens/AppScreens/SearchScreen';
import { createStackNavigator } from 'react-navigation-stack';

const HomeStack = createStackNavigator({ Home: HomeScreen });

export default createBottomTabNavigator({
  Home: HomeStack,
  Search: SearchScreen,
});
