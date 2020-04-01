import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../Screens/AppScreens/HomeScreen';
import SearchScreen from '../Screens/AppScreens/SearchScreen';
import KMPScreen from '../Screens/AppScreens/KMPScreen';
import Drawer from '../Screens/AppScreens/Drawer';
import CartScreen from '../Screens/AppScreens/CartScreen';
import { createStackNavigator } from 'react-navigation-stack';
import React from "react";
import { Image,StyleSheet } from 'react-native';
import Colors from '../Constants/Colors';
import {HomeIcon,SearchIcon,KMPIcon,CartIcon} from '../Component/Icons';
const HomeStack = createStackNavigator({
     Home: HomeScreen,
     Drawer: Drawer,
     });

export default createBottomTabNavigator(
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




// class MyHomeScreen extends React.Component {
//     static navigationOptions = {
//       drawerLabel: 'Home',
//       drawerIcon: ({ tintColor }) => (
//         <Image
//           source={require('../Assets/D1.png')}
//           style={[styles.icon, { tintColor: tintColor }]}
//         />
//       ),
//     };
  
//     render() {
//       return (
//         <Button
//           onPress={() => this.props.navigation.navigate('Notifications')}
//           title="Go to notifications"
//         />
//       );
//     }
//   }
  
//   class MyNotificationsScreen extends React.Component {
//     static navigationOptions = {
//       drawerLabel: 'Notifications',
//       drawerIcon: ({ tintColor }) => (
//         <Image
//           source={require('../Assets/D1.png')}
//           style={[styles.icon, { tintColor: tintColor }]}
//         />
//       ),
//     };
  
//     render() {
//       return (
//         <Button
//           onPress={() => this.props.navigation.goBack()}
//           title="Go back home"
//         />
//       );
//     }
//   }
  
//   const styles = StyleSheet.create({
//     icon: {
//       width: 24,
//       height: 24,
//     },
//   });
  
//   const MyDrawerNavigator = createDrawerNavigator({
//     Home: {
//       screen: MyHomeScreen,
//     },
//     Notifications: {
//       screen: MyNotificationsScreen,
//     },
//   });
  
//   const MyApp = createAppContainer(MyDrawerNavigator);