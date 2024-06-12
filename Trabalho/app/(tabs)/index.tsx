import { Image, StyleSheet } from 'react-native';
import React from 'react'


import Home from '../../components/home'
import { View } from 'react-native-reanimated/lib/typescript/Animated';

export default function HomeScreen() {
  return (
    <View style={styles.Container}>
    <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,


  },
});
