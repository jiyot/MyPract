import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';

// import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import firebase from 'firebase/app';
import 'firebase/auth';
import { auth } from "./config/Firebase-config";


import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import MyPurchase from './MyPurchase';
import AnotherScreen from './AnotherScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Login"
//           component={LoginScreen}
//           options={{ title: 'Login' }}
//         />

//         <Stack.Screen
//           name="Signup"
//           component={SignupScreen}
//           options={{ title: 'Sign Up' }}
//         />

//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ title: 'Sign Up' }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Another" component={AnotherScreen} />
      {/* Add Nowplaying screens to the Home stack */}
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      {/* Add any additional screens to the Settings stack */}
    </Stack.Navigator>
  );
}

function MyPurchaseStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="MyPurchase" component={MyPurchase} />
    
      {/* Add any additional screens to the Settings stack */}
    </Stack.Navigator>
  );
}


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  // return (
  //   <NavigationContainer>
  //     {isLoggedIn ? (
  //       <Tab.Navigator>
  //         <Tab.Screen name="Home" component={HomeStack}/>
  //         <Tab.Screen name="Settings" component={SettingsStack} />
  //       </Tab.Navigator>
  //     ) : (
  //       <AuthStack />
  //     )}
  //   </NavigationContainer>
  // );

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="Home1" component={HomeStack}/>
          <Tab.Screen name="MyPurchase1" component={MyPurchaseStack} />
          <Tab.Screen name="Settings1" component={SettingsStack} />
        </Tab.Navigator>
      ) : (
        <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home1" component={HomeStack}/>
        <Tab.Screen name="Settings1" component={SettingsStack} />
        </Tab.Navigator>
      )}
        
      
    </NavigationContainer>
  );


}