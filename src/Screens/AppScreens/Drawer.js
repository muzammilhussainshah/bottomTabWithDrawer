import React from 'react'
import Colors from '../../Constants/Colors';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { Text, StyleSheet, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default class Drawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        // const { func, activeRout } = this.props
        return (
            <View 
                style={{ width: '100%', height: '100%',backgroundColor:Colors.primaryColor }}>
                    <Image
                     resizeMode="cover"
                      style={{width:"100%",height:"100%"}} source={require("../../Assets/D.png")} />
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={{ position:"absolute",marginLeft:"5%",  alignItems: "center", flexDirection: "row" }}>
                    <Image resizeMode="contain" source={require('../../Assets/D1.png')} style={{ width: 55, height: 55 }} />
                    <View>
                        <Text style={{ color: Colors.secondaryColor }}>Private Profile</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={{ position:"absolute",marginTop:"11%",marginLeft:"23%", alignItems: "center", flexDirection: "row", }}>
                    <Image resizeMode="contain" source={require('../../Assets/D2.png')} style={{ width: 55, height: 55 }} />
                    <View>
                        <Text style={{ color: Colors.white }}>History Report</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={{ position:"absolute",marginTop:"25%",marginLeft:"37%", alignItems: "center", flexDirection: "row", }}>
                    <Image resizeMode="contain" source={require('../../Assets/D3.png')} style={{ width: 55, height: 55 }} />
                    <View>
                        <Text style={{ color: Colors.white }}>Settings</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={{ position:"absolute",marginTop:"44%",marginLeft:"44%", alignItems: "center", flexDirection: "row", }}>
                    <Image resizeMode="contain" source={require('../../Assets/D4.png')} style={{ width: 55, height: 55 }} />
                    <View>
                        <Text style={{ color: Colors.white }}>SetaExpense </Text>
                        <Text style={{ color: Colors.white }}>Calculatortings </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={{ position:"absolute",marginTop:"63%",marginLeft:"47%", alignItems: "center", flexDirection: "row", }}>
                    <Image resizeMode="contain" source={require('../../Assets/D5.png')} style={{ width: 55, height: 55 }} />
                    <View>
                        <Text style={{ color: Colors.white }}>Messages</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.7}
                    style={{ position:"absolute",marginTop:"81%",marginLeft:"44%", alignItems: "center", flexDirection: "row", }}>
                    <Image resizeMode="contain" source={require('../../Assets/D6.png')} style={{ width: 55, height: 55 }} />
                    <View>
                        <Text style={{ color: Colors.white }}>Beyond</Text>
                        <Text style={{ color: Colors.white }}>Satelite View</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={{ position:"absolute",marginTop:"103%",marginLeft:"37%", alignItems: "center", flexDirection: "row", }}>
                    <Image resizeMode="contain" source={require('../../Assets/D7.png')} style={{ width: 55, height: 55 }} />
                    <View>
                        <Text style={{ color: Colors.white }}>Displays Nearby Units</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.7}
                    style={{ position:"absolute",marginTop:"100%",marginLeft:"23%", alignItems: "center", flexDirection: "row", }}>
                    <Image resizeMode="contain" source={require('../../Assets/D8.png')} style={{ width: 55, height: 55 }} />
                    <View>
                        <Text style={{ color: Colors.white }}>Refresh</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.7}
                    style={{ position:"absolute",marginTop:"111%",marginLeft:"5%",  alignItems: "center", flexDirection: "row" }}>
                    <Image resizeMode="contain" source={require('../../Assets/D9.png')} style={{ width: 55, height: 55 }} />
                    <View>
                        <Text style={{ color: Colors.white }}>Send A Command</Text>
                    </View>
                </TouchableOpacity>

            </View >
        )
    }
}

Drawer['navigationOptions'] = ({ navigation }) => {
    return {
        title:
            navigation.state.params !== undefined
                ? navigation.state.params.title
                : 'Back',
        headerStyle: {
            backgroundColor: Colors.primaryColor,
            elevation: 0,
            shadowColor: 'transparent',
        },
        headerTintColor: Colors.secondaryColor,
        headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons
                    name="md-arrow-back"
                    color={Colors.secondaryColor}
                    size={24}
                    style={{ paddingLeft: 15 }}
                />
            </TouchableOpacity>
        ),

    };
};