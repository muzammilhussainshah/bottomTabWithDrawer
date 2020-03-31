// import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../Screens/AppScreens/HomeScreen';
// import SearchScreen from '../Screens/AppScreens/SearchScreen';
import { createStackNavigator } from 'react-navigation-stack';

import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
export default  HomeStack = createStackNavigator({ Home: HomeScreen });

// export default createMaterialBottomTabNavigator({
//   Home: HomeStack,
//   Search: SearchScreen,
// },
// {
//   // initialRouteName: 'Album',
//   activeTintColor: 'red',
// },


// );
// const Tab = createBottomTabNavigator();
// export default function App() {
//   return (
//     <NavigationContainer >
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeStack} />
//         <Tab.Screen name="Settings" component={SearchScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }