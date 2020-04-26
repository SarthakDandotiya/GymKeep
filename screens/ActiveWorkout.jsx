import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ActiveWorkout() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>
          ActiveWorkout Screen
      </Text>
    </View>
  );
}
