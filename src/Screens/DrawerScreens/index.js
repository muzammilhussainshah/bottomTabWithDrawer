import React from "react";
import { Image, StyleSheet, Button, Text } from 'react-native';
import Colors from '../../Constants/Colors';



export class Private extends React.Component {
    static navigationOptions = {
  
      drawerLabel: <Text style={{ marginLeft: 40,marginTop:10, color: Colors.secondaryColor }}>Private Profile</Text>,
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../../Assets/D1.png')}
          style={[styles.icon, {
             marginLeft: 80,marginTop:10
          }]}
        />
      ),
    };
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
  }


  export class History extends React.Component {
    static navigationOptions = {
      drawerLabel: <Text style={{marginLeft: 90, color: Colors.white }}>History Report</Text>,
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../../Assets/D2.png')}
          style={[styles.icon, {
            marginLeft: 180,
  
          }]}
        />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
  }
  export class Setting extends React.Component {
    static navigationOptions = {
      drawerLabel: <Text style={{marginLeft: 130, color: Colors.white  }}>Settings</Text>,
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../../Assets/D3.png')}
          style={[styles.icon, {
            marginLeft: 260,
  
          }]}
        />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
  }
  export class SetaExpense extends React.Component {
    static navigationOptions = {
      drawerLabel: <Text style={{ marginLeft: 150, color: Colors.white ,width:150}}>SetaExpense Calculatortings</Text>,
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../../Assets/D4.png')}
          style={[styles.icon, {
             marginLeft: 300
  
          }]}
        />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
  }
  export class Messages extends React.Component {
    static navigationOptions = {
      drawerLabel: <Text style={{ marginLeft: 170, color: Colors.white ,}}>Messages</Text>,
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../../Assets/D5.png')}
          style={[styles.icon, {
             marginLeft: 340
  
          }]}
        />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
  }
  export class Beyound extends React.Component {
    static navigationOptions = {
      drawerLabel: <Text style={{ marginLeft: 155, color: Colors.white ,width:100}}>Beyound Satelite View</Text>,
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../../Assets/D6.png')}
          style={[styles.icon, {
             marginLeft: 310
  
          }]}
        />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
  }
  export class DisplaysNearby extends React.Component {
    static navigationOptions = {
      drawerLabel: <Text style={{ marginLeft: 142.5, color: Colors.white ,width:100}}>Displays Nearby Units</Text>,
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../../Assets/D7.png')}
          style={[styles.icon, {
             marginLeft: 285
  
          }]}
        />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
  }
  export class Refresh extends React.Component {
    static navigationOptions = {
      drawerLabel: <Text style={{ marginLeft: 115, color: Colors.white ,width:100}}>Refresh</Text>,
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../../Assets/D8.png')}
          style={[styles.icon, {
             marginLeft: 230
  
          }]}
        />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
  }
  export class SendACommand extends React.Component {
    static navigationOptions = {
      drawerLabel: <Text style={{ marginLeft: 50, color: Colors.white ,}}>Send A Command</Text>,
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../../Assets/D9.png')}
          style={[styles.icon, {
             marginLeft: 100
  
          }]}
        />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
  }

  const styles = StyleSheet.create({
    icon: {
      width: 53,
      height: 53,
    },
  });