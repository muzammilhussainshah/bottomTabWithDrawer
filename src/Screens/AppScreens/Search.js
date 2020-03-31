import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import Colors from '../../Constants/Colors';
import Footers from '../../Component/Footer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Search = ({ navigation }) => {
  const [title, setTitle] = useState('Home');

  useEffect(() => { }, []);

  return (
    <View style={{ flex: 1, }}>
      <Text>search</Text>
    </View>
  );
};

export default Search;
