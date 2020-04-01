import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../Screens/AppScreens/HomeScreen';
import SearchScreen from '../Screens/AppScreens/SearchScreen';
import KMPScreen from '../Screens/AppScreens/KMPScreen';
import CartScreen from '../Screens/AppScreens/CartScreen';
import { createStackNavigator } from 'react-navigation-stack';
import React from "react";
import { Image } from 'react-native';
import Colors from '../Constants/Colors';
const HomeStack = createStackNavigator({ Home: HomeScreen });
// Home
function HomeIcon({ focused }) {
    if (focused) {
        return (
            <Image source={require("../Assets/icons/active/icon1.png")} style={{ width: "100%", height: 58.9 }} />
        );
    }
    else {
        return (
            <Image source={require("../Assets/icons/deactive/icon1.png")} style={{ width: "100%", height: 58.9 }} />
        );
    }
}
// Search
function SearchIcon({ focused }) {
    if (focused) {
        return (
            <Image source={require("../Assets/icons/active/icon2.png")} style={{ width: "100%", height: 58.9 }} />
        );
    }
    else {
        return (
            <Image source={require("../Assets/icons/deactive/icon2.png")} style={{ width: "100%", height: 58.9 }} />
        );
    }
}
// KMP
function KMPIcon({ focused }) {
    if (focused) {
        return (
            <Image source={require("../Assets/icons/active/icon3.png")} style={{ width: "100%", height: 58.9 }} />
        );
    }
    else {
        return (
            <Image source={require("../Assets/icons/deactive/icon3.png")} style={{ width: "100%", height: 58.9 }} />
        );
    }
}
// Cart
function CartIcon({ focused }) {
    if (focused) {
        return (
            <Image source={require("../Assets/icons/active/icon4.png")} style={{ width: "100%", height: 58.9 }} />
        );
    }
    else {
        return (
            <Image source={require("../Assets/icons/deactive/icon4.png")} style={{ width: "100%", height: 58.9 }} />
        );
    }
}
export default createBottomTabNavigator(
    {
        Home: HomeStack,
        Search: SearchScreen,
        KMP: KMPScreen,
        Home3: CartScreen,
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
                if (routeName === 'Home3') {
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