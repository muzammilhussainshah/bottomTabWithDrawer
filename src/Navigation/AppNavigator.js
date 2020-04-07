import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../Screens/AppScreens/HomeScreen';
import SearchScreen from '../Screens/AppScreens/SearchScreen';
import KMPScreen from '../Screens/AppScreens/KMPScreen';
import CartScreen from '../Screens/AppScreens/CartScreen';
import { createStackNavigator } from 'react-navigation-stack';
import React from "react";
import Colors from '../Constants/Colors';
import Drawer from '../Screens/AppScreens/Drawer';
import { HomeIcon, SearchIcon, KMPIcon, CartIcon } from '../Component/Icons';
import { Private, History, Setting, SetaExpense, Messages, Beyound, DisplaysNearby, Refresh, SendACommand, } from '../Screens/DrawerScreens/index';
const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Drawer: Drawer,
  Private: Private,
  History: History,
  Setting: Setting,
  SetaExpense: SetaExpense,
  Messages: Messages,
  Beyound: Beyound,
  DisplaysNearby: DisplaysNearby,
  Refresh: Refresh,
  SendACommand: SendACommand,
});
HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

export default  Bottom = createBottomTabNavigator(
  {
    Home: HomeStack,
    Search: SearchScreen,
    KMP: KMPScreen,
    CartIcon: CartScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return <HomeIcon focused={focused} />;
        }
        if (routeName === 'Search') {
          return <SearchIcon focused={focused} />;
        }
        if (routeName === 'KMP') {
          return <KMPIcon focused={focused} />;
        }
        if (routeName === 'CartIcon') {
          return <CartIcon focused={focused} />;
        }
      },
    }),

    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      tintColor: '#333',
      activeTintColor: '#aaa',
      style: {
        backgroundColor: Colors.primaryColor,
        height: 65
      },
    },
  }
);


// export default MyDrawerNavigator = createDrawerNavigator({
//   Back: Bottom,
//   Private: {
//     screen: Private,
//   },
//   History: {
//     screen: History,
//   },
//   Setting: {
//     screen: Setting,
//   },
//   SetaExpense: {
//     screen: SetaExpense,
//   },
//   Messages: {
//     screen: Messages,
//   },
//   Beyound: {
//     screen: Beyound,
//   },
//   DisplaysNearby: {
//     screen: DisplaysNearby,
//   },
//   Refresh: {
//     screen: Refresh,
//   },
//   SendACommand: {
//     screen: SendACommand,
//   },
// },
//   {
//     // initialRouteName: "none",
//     drawerWidth: "110%",
//     contentComponent: CustomDrawer,
//     contentOptions: {
//       activeTintColor: Colors.secondaryColor,
//       activeLabelStyle: Colors.secondaryColor,

//       inactiveTintColor: Colors.white,

//       iconContainerStyle: {
//         opacity: 1
//       },

//     }
//   });
