import React, {useEffect} from 'react';
import {View, StyleSheet, StatusBar, ActivityIndicator} from 'react-native';
import {getUser} from '../../Helpers';

const AuthLoadingScreen = ({navigation}) => {
  useEffect(() => {
    const _bootstrapAsync = async () => {
      const user = await getUser();
      navigation.navigate(user ? 'App' : 'Auth');
    };
    _bootstrapAsync();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <ActivityIndicator />
    </View>
  );
};

export default AuthLoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
