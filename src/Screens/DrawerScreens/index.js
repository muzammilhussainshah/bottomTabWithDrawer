import React from "react";
import { Image, StyleSheet, Button, Text } from 'react-native';
import Colors from '../../Constants/Colors';
// drawer element Private 
export class Private extends React.Component {
    static navigationOptions = {
        drawerLabel: <Text style={{ marginLeft: 0, marginTop: 0, color: Colors.secondaryColor }}>Private Profile</Text>,
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../Assets/D1.png')}
                style={[styles.icon, {
                    marginLeft: 0, marginTop: 0
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
// drawer element History 
export class History extends React.Component {
    static navigationOptions = {
        drawerLabel: <Text style={{ marginLeft: 80, color: Colors.white }}>History Report</Text>,
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../Assets/D2.png')}
                style={[styles.icon, {
                    marginLeft: 160,
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
// drawer element Setting 
export class Setting extends React.Component {
    static navigationOptions = {
        drawerLabel: <Text style={{ marginLeft: 130, marginTop: 10, color: Colors.white }}>Settings</Text>,
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../Assets/D3.png')}
                style={[styles.icon, {
                    marginLeft: 260, marginTop: 10,
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
// drawer element SetaExpense 
export class SetaExpense extends React.Component {
    static navigationOptions = {
        drawerLabel: <Text style={{ marginLeft: 160, marginTop: 15, color: Colors.white, width: 150 }}>SetaExpense Calculatortings</Text>,
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../Assets/D4.png')}
                style={[styles.icon, {
                    marginLeft: 320, marginTop: 15,
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
// drawer element Messages 
export class Messages extends React.Component {
    static navigationOptions = {
        drawerLabel: <Text style={{ marginLeft: 170, marginTop: 5, color: Colors.white, }}>Messages</Text>,
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../Assets/D5.png')}
                style={[styles.icon, {
                    marginLeft: 340, marginTop: 5,
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
// drawer element Beyound 
export class Beyound extends React.Component {
    static navigationOptions = {
        drawerLabel: <Text style={{ marginLeft: 160, marginTop: 5, color: Colors.white, width: 100 }}>Beyound Satelite View</Text>,
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../Assets/D6.png')}
                style={[styles.icon, {
                    marginLeft: 320, marginTop: 5,
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
// drawer element DisplaysNearby 
export class DisplaysNearby extends React.Component {
    static navigationOptions = {
        drawerLabel: <Text style={{ marginLeft: 130, marginTop: 15, color: Colors.white, width: 100 }}>Displays Nearby Units</Text>,
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../Assets/D7.png')}
                style={[styles.icon, {
                    marginLeft: 260, marginTop: 15,
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
// drawer element Refresh 
export class Refresh extends React.Component {
    static navigationOptions = {
        drawerLabel: <Text style={{ marginLeft: 80, marginTop: 15, color: Colors.white, width: 100 }}>Refresh</Text>,
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../Assets/D8.png')}
                style={[styles.icon, {
                    marginLeft: 160, marginTop: 15,
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
// drawer element SendACommand 
export class SendACommand extends React.Component {
    static navigationOptions = {
        drawerLabel: <Text style={{ marginLeft: 0, marginTop: 0, color: Colors.white, }}>Send A Command</Text>,
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../Assets/D9.png')}
                style={[styles.icon, {
                    marginLeft: 0, marginTop: 0
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