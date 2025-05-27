import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PetServicesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pet Services Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, fontWeight: 'bold' },
});
