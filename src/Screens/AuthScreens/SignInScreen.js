import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../Constants/Colors';

const SignInScreen = ({navigation}) => {
  navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const _loginUser = () => {
    navigation.navigate('App');
  };

  return (
    <ImageBackground
      source={{uri: 'https://lorempixel.com/900/1400/nightlife/2/'}}
      style={styles.container}>
      <View style={{width: 300, height: 65, alignItems: 'center'}}>
        <Text style={{fontSize: 32, color: 'white'}}>Olympia Tracking</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          onChangeText={email => setEmail(email)}
        />
        <Icon name="email-plus" color={Colors.secondaryColor} size={24} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={password => setPassword(password)}
        />
        <Icon name="textbox-password" color={Colors.secondaryColor} size={24} />
      </View>

      <TouchableOpacity
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={_loginUser}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const resizeMode = 'center';

SignInScreen['navigationOptions'] = screenProps => ({
  headerShown: false,
  title: 'Sign In',
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: Colors.secondaryColor,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
});

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    paddingRight: '5%',
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: 'transparent',
  },
  btnForgotPassword: {
    height: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 10,
    width: 300,
    backgroundColor: 'transparent',
  },
  loginButton: {
    backgroundColor: Colors.primaryColor,

    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: Colors.secondaryColor,
  },
  bgImage: {
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
