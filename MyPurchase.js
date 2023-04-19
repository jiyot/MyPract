
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { auth } from './config/Firebase-config';

export default function MyPurchase({ navigation }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return unsubscribe;
  }, []);

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        console.log('User signed out successfully!');
      })
      .catch(error => {
        console.error('Error signing out user:', error);
      });
  };

  return (
    <View>
      {isLoggedIn ? (
        <View>
          <Text>You are logged in!</Text>
          <Text>List retrive from Firestore</Text>
        </View>
      ) : (
        <View>
          <Text>You are not logged in.</Text>
          <Button title="Login" onPress={() => navigation.navigate('Login')} />
          <Button title="Sign up" onPress={() => navigation.navigate('Signup')} />
        </View>
      )}
    </View>
  );
}