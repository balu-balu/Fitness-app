// PhysicalStatus.jsx

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const PhysicalStatus = () => {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const router = useRouter();

  // Placeholder image URL
  const profileImage = require('../assets/images/profile.png');
  const profileEmail = 'john.doe@example.com';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Physical Status</Text>
      </View>
      <View style={styles.profileInfo}>
        <Image source={profileImage} style={styles.profileImage} />
        <Text style={styles.profileEmail}>{profileEmail}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="male-female-outline" size={24} color="black" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Gender"
          onChangeText={setGender}
          value={gender}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="calendar-outline" size={24} color="black" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Age"
          onChangeText={setAge}
          value={age}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="body-outline" size={24} color="black" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Height (cm)"
          onChangeText={setHeight}
          value={height}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="barbell-outline" size={24} color="black" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Weight (kg)"
          onChangeText={setWeight}
          value={weight}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
    marginTop: 40,
  },
  headerTitle: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  profileEmail: {
    fontSize: 16,
    color: 'gray',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#C72222',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default PhysicalStatus;
