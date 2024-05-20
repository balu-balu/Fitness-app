import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ProfilePage = () => {
    const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
        onPress={() => router.back()}
        style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
      <View style={styles.profileInfo}>
        <Image source={require('../assets/images/profile.png')} style={styles.profileImage} />
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileEmail}>john.doe@example.com</Text>
      </View>
      <TouchableOpacity style={styles.button}
      onPress={() => router.push("EditProfile")}
      >
        <View style={styles.buttonContent}>
          <View style={styles.buttonIcon}>
            <Ionicons name="create-outline" size={35} color="black" />
          </View>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
      onPress={() => router.push("PhysicalStatus")}>
        <View style={styles.buttonContent}>
          <View style={styles.buttonIcon}>
            <Ionicons name="fitness-outline" size={35} color="black" />
          </View>
          <Text style={styles.buttonText}>Physical Status</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
      onPress={() => router.push("LoginPage")}>
        <View style={styles.buttonContent}>
          <View style={styles.buttonIcon}>
            <Ionicons name="log-out-outline" size={35} color="black" />
          </View>
          <Text style={styles.buttonText}>Log Out</Text>
        </View>
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
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 16,
    color: 'gray',
  },
  button: {
    marginBottom: 20,
    borderRadius: 20,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },
  buttonIcon: {
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 18,
  },
});

export default ProfilePage;