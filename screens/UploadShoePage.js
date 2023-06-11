
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UploadShoePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B69663',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default UploadShoePage;
