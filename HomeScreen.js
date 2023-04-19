import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  const handlePress = () => {
    // Navigate to another screen
    navigation.navigate('Another');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Now playing screen Screen</Text>
      <Button title="Go to Another Screen" onPress={handlePress} />
    </View>
  );
}

// import React, { useState, useEffect } from 'react';
// import { View, Text, Button } from 'react-native';
// import { auth } from './config/Firebase-config';

// export default function HomeScreen({ navigation }) {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       if (user) {
//         setIsLoggedIn(true);
//       } else {
//         setIsLoggedIn(false);
//       }
//     });

//     return unsubscribe;
//   }, []);

//   const handleLogout = () => {
//     auth.signOut()
//       .then(() => {
//         console.log('User signed out successfully!');
//       })
//       .catch(error => {
//         console.error('Error signing out user:', error);
//       });
//   };

//   return (
//     <View>
//       {isLoggedIn ? (
//         <View>
//           <Text>You are logged in!</Text>
//           <Button title="Logout" onPress={handleLogout} />
//         </View>
//       ) : (
//         <View>
//           <Text>You are not logged in.</Text>
//           <Button title="Login" onPress={() => navigation.navigate('Login')} />
//           <Button title="Sign up" onPress={() => navigation.navigate('Signup')} />
//         </View>
//       )}
//     </View>
//   );
// }
