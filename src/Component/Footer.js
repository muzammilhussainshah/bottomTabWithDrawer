import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView } from 'react-native'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { func, activeRout } = this.props
        return (
            <View style={{ backgroundColor: "green", justifyContent: "center" }}>
                <Image resizeMode="cover" source={require("../Assets/bottom.png")} style={{ height: 55, width: "100%" }} />
                <TouchableOpacity
                    onPress={() => func("Home")}
                    style={{ left: "4.5%", position: "absolute", }}>
                    <Image resizeMode="contain" source={require("../Assets/1.png")} style={{ tintColor: activeRout === "Home" ? "#40E0D0" : "#fff", width: 40, height: 40 }} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => func("Search")}
                    style={{ left: "31%", position: "absolute", }}>
                    <Image resizeMode="contain" source={require("../Assets/2.png")} style={{ tintColor: activeRout === "Search" ? "#40E0D0" : "#fff", width: 40, height: 40 }} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => func("KMP")}
                    style={{ left: "57.5%", position: "absolute", }}>
                    <Image resizeMode="contain" source={require("../Assets/3.png")} style={{ tintColor: activeRout === "KMP" ? "#40E0D0" : "#fff", width: 40, height: 40 }} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => func("Cart")}
                    style={{ left: "84%", position: "absolute", }}>
                    <Image resizeMode="contain" source={require("../Assets/4.png")} style={{ tintColor: activeRout === "Cart" ? "#40E0D0" : "#fff", width: 40, height: 40 }} />
                </TouchableOpacity>
            </View>
        )
    }
}
