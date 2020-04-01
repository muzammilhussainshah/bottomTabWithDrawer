import React from "react";
import { Image,StyleSheet } from 'react-native';


// Home
export function HomeIcon({ focused }) {
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
export function SearchIcon({ focused }) {
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
export function KMPIcon({ focused }) {
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
export function CartIcon({ focused }) {
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