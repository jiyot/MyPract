import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import firebase from 'firebase/app';
import 'firebase/auth';
import { auth } from "./config/Firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen() {
  const [email, setEmail] = useState('gggggg@gmail.com');
  const [password, setPassword] = useState('123456');
  const navigation = useNavigation();


  const onSignUpClicked = () => {
    //go to sign up screen
    navigation.navigate('Signup');
  }

  const handleLogin = () => {
    signInWithEmailAndPassword( auth, email, password)
      .then(() => {
        console.log('User logged in successfully!');
        navigation.navigate('Settings'); // Navigate to HomeScreen
      })
      .catch(error => {
        console.error('Error logging in:', error);
      });
  };

  return (
    <View>
      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Enter your email"
      />
      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder="Enter your password"
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Sigup" onPress={onSignUpClicked} />
    </View>
  );
}
