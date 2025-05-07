import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
// import AntDesign from 'react-native-vector-icons/AntDesign'

const HomeScreen = () => {
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.linearGradient}>
        <Text style={styles.buttonText}>
            Sign in with Facebook
        </Text>
    </LinearGradient>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    linearGradient : {
        flex: 1,
    },
})