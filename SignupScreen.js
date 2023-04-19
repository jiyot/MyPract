import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

import firebase from 'firebase/app';
import 'firebase/auth';
import { auth } from "./config/Firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async() => {
    createUserWithEmailAndPassword( auth, email, password)
      .then(() => {
        console.log('User account created successfully!');
        Alert.alert('Success', 'Account created successfully');
      })
      .catch(error => {
        console.error('Error creating user account:', error);
        Alert.alert('Error', 'Error creating user account: ${error.message}');
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
      <Button title="Sign up" onPress={handleSignup} />
    </View>
  );
}
