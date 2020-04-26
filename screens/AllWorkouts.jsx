import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function AllWorkouts() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>
          All Workouts Screen
      </Text>
    </View>
  );
}