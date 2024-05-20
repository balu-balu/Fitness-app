import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image,Alert } from 'react-native';
import { useRouter } from "expo-router";
import {auth} from "../firebase-config"
import {signInWithEmailAndPassword} from "firebase/auth"
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      Alert.alert("Амжилттай нэвтэрлээ", "Та амжилттай нэвтэрлээ!");
      // Navigate to home or another page if needed
      router.push("AuthHome");
    } catch (error) {
      Alert.alert("Нэвтрэх амжилтгүй боллоо", error.message);
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
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupButton} onPress={() => router.push("RegisterPage")}>
            <Text style={styles.signupButtonText}>Sign Up</Text>
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity here (0.5 = 50% opacity)
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
    opacity: 5
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
  loginButton: {
    width: '100%',
    height: 40,
    backgroundColor: "#C72222",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupButton: {
    width: '100%',
    height: 40,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: "#C72222",
    borderWidth: 1,
  },
  signupButtonText: {
    color: "#C72222",
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;
