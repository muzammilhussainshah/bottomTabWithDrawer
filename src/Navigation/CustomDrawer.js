import SafeAreaView from 'react-native-safe-area-view';
import { DrawerItems } from 'react-navigation-drawer';
import { Image, StyleSheet, Button, ScrollView, Text, TouchableOpacity,ImageBackground } from 'react-native';
import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../Constants/Colors';

export default CustomDrawerContentComponent = props => (
    <ImageBackground source={require("../Assets/drawerBackground.png")} style={{ width: "100%", height:"100%", backgroundColor: Colors.primaryColor }} > 
    <ScrollView scrollEnabled={false} style={{ width: "100%", }}>
        <SafeAreaView
            style={[styles.container,{flexDirection:"row",alignItems:"center"}]}
            forceInset={{ top: 'always', horizontal: 'never' }}
        >
            <DrawerItems {...props} />
            {/* <Text style={{color:Colors.secondaryColor}}>aaaaaaaaaaaa</Text> */}
        </SafeAreaView>
    </ScrollView>
    </ImageBackground>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});