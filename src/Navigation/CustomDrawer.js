import SafeAreaView from 'react-native-safe-area-view';
import { DrawerItems } from 'react-navigation-drawer';
import { StyleSheet, ScrollView, ImageBackground, View } from 'react-native';
import React from "react";
import Colors from '../Constants/Colors';

export default CustomDrawerContentComponent = props => (
    <View style={{ backgroundColor: Colors.primaryColor, flex: 1 }}>
        <ImageBackground source={require("../Assets/drawerBackground.png")} style={{ width: 390, height: 620, backgroundColor: Colors.primaryColor }} >
            <ScrollView scrollEnabled={false} style={{ width: "100%", }}>
                <SafeAreaView
                    style={[styles.container, { flexDirection: "row", alignItems: "center" }]}
                    forceInset={{ top: 'always', horizontal: 'never' }}
                >
                    <View style={{ marginLeft: "3%" }}>
                        <DrawerItems {...props} />
                    </View>
                </SafeAreaView>
            </ScrollView>
        </ImageBackground>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});