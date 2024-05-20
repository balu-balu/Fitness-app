import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image,Alert } from 'react-native';
import { useRouter } from "expo-router";
import {auth} from "../firebase-config"
import {createUserWithEmailAndPassword} from "firebase/auth"
const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  
  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      Alert.alert("Бүртгэл амжилттай боллоо", "Та амжилттай бүртгүүллээ!");

      router.push("RegisterPage");
    } catch (error) {
      Alert.alert("Бүртгэл амжилтгүй боллоо", error.message);
    }
  };
  return (
    <ImageBackground
      source={require('../assets/images/background2.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image
          style={styles.logo}
        />
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(email) => {
              setEmail(email);
            }}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(password) => {
              setPassword(password);
            }}
            value={password}
            secureTextEntry
          />
          <TouchableOpacity style={styles.registerButton} onPress={handleSignUp}>
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.backButton} onPress={() => router.push("LoginPage")}>
            <Text style={styles.backButtonText}>Back to Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
    borderRadius: 90,
  },
  form: {
    width: '100%',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  registerButton: {
    width: '100%',
    height: 40,
    backgroundColor: "#C72222",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    width: '100%',
    height: 40,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: "#C72222",
    borderWidth: 1,
  },
  backButtonText: {
    color: "#C72222",
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegisterPage;
