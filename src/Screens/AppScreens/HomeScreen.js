import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import Colors from '../../Constants/Colors';
import Footer from '../../Component/Footer';
import SearchScreen from '../../Screens/AppScreens/SearchScreen';
import KMPScreen from '../../Screens/AppScreens/KMPScreen';
import CartScreen from '../../Screens/AppScreens/CartScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const HomeScreen = ({ navigation }) => {
  const [title, setTitle] = useState('Home');
  useEffect(() => { }, []);
  return (
    <View style={{ flex: 1,  }}>
      <View style={styles.topBarContainer}>
        <Text style={styles.topBarText}>Thu, 22:06 - Akpatel360</Text>
      </View>
      <View style={{ flex: 1 }}>
      {title==="Home"&&
        <View style={styles.mapContainer}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015, 
              longitudeDelta: 0.0121,
            }}></MapView>
        </View>}
        {title==="Search"&&<SearchScreen/>}
        {title==="KMP"&&<KMPScreen/>}
        {title==="Cart"&&<CartScreen/>}
      </View>
      <Footer func={(nav)=>setTitle(nav)} activeRout={title}/>
    </View>
  );
};

HomeScreen['navigationOptions'] = ({ navigation }) => {
  return {
    title:
      navigation.state.params !== undefined
        ? navigation.state.params.title
        : 'Home',
    headerStyle: {
      backgroundColor: Colors.primaryColor,
      elevation: 0,
      shadowColor: 'transparent',
    },
    headerTintColor: Colors.secondaryColor,
    headerLeft: () => (
      <TouchableOpacity onPress={()=>alert("work")}>
        <Icon
          name="menu"
          color={Colors.secondaryColor}
          size={24}
          style={{ paddingLeft: 15 }}
        />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <View
        style={{
          flexDirection: 'row',
          width: 100,
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity>
          <Icon
            name="notifications-none"
            color={Colors.secondaryColor}
            size={24}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="mail-outline" color={Colors.secondaryColor} size={24} />
        </TouchableOpacity>
      </View>
    ),
    elevation: 0,
  };
};
export default HomeScreen;

const styles = StyleSheet.create({
  topBarContainer: {
    height: 40,
    backgroundColor: Colors.primaryColor,
    alignItems: 'center',
  },
  topBarText: { color: Colors.secondaryColor, fontSize: 16, textAlign: 'center' },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    flex: 0.9,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
