import React from 'react'
import Colors from '../../Constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, StyleSheet, View, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native'
export default class Drawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <ImageBackground
                source={require("../../Assets/1drawerBackground.png")}
                style={{ width: "100%", height: "100%", }}>
                <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate("Private")}
                style={{marginLeft:"3%",marginTop:"5%", alignItems:"center", height: "9%", flexDirection: "row" }}>
                    <View style={{ width: "15%", height: "100%", }}>
                        <Image source={require("../../Assets/D1.png")}
                            resizeMode="contain" style={{ width: "100%", height: "100%",  }}
                        />
                    </View>
                    <View>
                        <Text style={{color:"white",fontSize:17}}>Private Profile</Text>
                    </View>
                </TouchableOpacity>

              <TouchableOpacity
                onPress={()=>this.props.navigation.navigate("History")}
                style={{marginTop:"-3%",alignItems:"center", height: "9%", flexDirection: "row" }}>
                    <View style={{ marginLeft:"20%", width: "15%", height: "100%",  }}>
                        <Image source={require("../../Assets/D2.png")}
                            resizeMode="contain" style={{ width: "100%", height: "100%",  }}
                        />
                    </View>
                    <View>
                        <Text style={{color:"white",fontSize:17}}>History Report</Text>
                    </View>
                </TouchableOpacity> 

              <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate("Setting")}
              
              style={{ alignItems:"center", height: "9%", flexDirection: "row" }}>
                    <View style={{ marginLeft:"33%", width: "15%", height: "100%",  }}>
                        <Image source={require("../../Assets/D3.png")}
                            resizeMode="contain" style={{ width: "100%", height: "100%",  }}
                        />
                    </View>
                    <View>
                        <Text style={{color:"white",fontSize:17}}>Settings</Text>
                    </View>
                </TouchableOpacity> 
              <TouchableOpacity
                onPress={()=>this.props.navigation.navigate("SetaExpense")}
                style={{ marginTop:"3%",alignItems:"center", height: "9%", flexDirection: "row" }}>
                    <View style={{ marginLeft:"43%", width: "15%", height: "100%",  }}>
                        <Image source={require("../../Assets/D4.png")}
                            resizeMode="contain" style={{ width: "100%", height: "100%",  }}
                        />
                    </View>
                    <View>
                        <Text style={{color:"white",fontSize:17,width:"90%"}}>SetaExpense Calculatortings</Text>
                    </View>
                </TouchableOpacity> 
              <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate("Messages")}
              style={{marginTop:"5%",alignItems:"center", height: "9%", flexDirection: "row" }}>
                    <View style={{ marginLeft:"46%", width: "15%", height: "100%",  }}>
                        <Image source={require("../../Assets/D5.png")}
                            resizeMode="contain" style={{ width: "100%", height: "100%",  }}
                        />
                    </View>
                    <View>
                        <Text style={{color:"white",fontSize:17}}>Messages</Text>
                    </View>
                </TouchableOpacity> 
              <TouchableOpacity
                onPress={()=>this.props.navigation.navigate("Beyound")}
                style={{marginTop:"5%",alignItems:"center", height: "9%", flexDirection: "row" }}>
                    <View style={{ marginLeft:"43%", width: "15%", height: "100%",  }}>
                        <Image source={require("../../Assets/D5.png")}
                            resizeMode="contain" style={{ width: "100%", height: "100%",  }}
                        />
                    </View>
                    <View>
                        <Text style={{color:"white",fontSize:17,width:"70%"}}>Beyond Satelite View</Text>
                    </View>
                </TouchableOpacity> 
              <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate("DisplaysNearby")}
                style={{marginTop:"2%",alignItems:"center", height: "9%", flexDirection: "row" }}>
                    <View style={{ marginLeft:"35%", width: "15%", height: "100%",  }}>
                        <Image source={require("../../Assets/D5.png")}
                            resizeMode="contain" style={{ width: "100%", height: "100%",  }}
                        />
                    </View>
                    <View>
                        <Text style={{color:"white",fontSize:17,width:"90%"}}>Displays Nearby Units</Text>
                    </View>
                </TouchableOpacity> 
              <TouchableOpacity
                onPress={()=>this.props.navigation.navigate("Refresh")}
                style={{marginTop:"1%",alignItems:"center", height: "9%", flexDirection: "row" }}>
                    <View style={{ marginLeft:"20%", width: "15%", height: "100%",  }}>
                        <Image source={require("../../Assets/D5.png")}
                            resizeMode="contain" style={{ width: "100%", height: "100%",  }}
                        />
                    </View>
                    <View>
                        <Text style={{color:"white",fontSize:17,}}>Refresh</Text>
                    </View>
                </TouchableOpacity> 
            <TouchableOpacity
                onPress={()=>this.props.navigation.navigate("SendACommand")}
                style={{marginLeft:"3%",marginTop:"-3%", alignItems:"center", height: "9%", flexDirection: "row" }}>
                    <View style={{ width: "15%", height: "100%", }}>
                        <Image source={require("../../Assets/D9.png")}
                            resizeMode="contain" style={{ width: "100%", height: "100%",  }}
                        />
                    </View>
                    <View>
                        <Text style={{color:"white",fontSize:17}}>Send A Command</Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground >
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