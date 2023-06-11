import React from 'react';
import { View, StyleSheet,ScrollView  } from 'react-native';
import Card from './Card';

const MainPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card
        name="Product 1"
        price="$20"
        imageSource={require('../assets/product1.jpg')}
      />
      <Card
        name="Product 2"
        price="$30"
        imageSource={require('../assets/product2.jpg')}
      />
      <Card
        name="Product 1"
        price="$20"
        imageSource={require('../assets/product1.jpg')}
      />
      <Card
        name="Product 2"
        price="$30"
        imageSource={require('../assets/product2.jpg')}
      />
      <Card
        name="Product 1"
        price="$20"
        imageSource={require('../assets/product1.jpg')}
      />
      <Card
        name="Product 2"
        price="$30"
        imageSource={require('../assets/product2.jpg')}
      />
      <Card
        name="Product 1"
        price="$20"
        imageSource={require('../assets/product1.jpg')}
      />
      <Card
        name="Product 2"
        price="$30"
        imageSource={require('../assets/product2.jpg')}
      />
      <Card
        name="Product 1"
        price="$20"
        imageSource={require('../assets/product1.jpg')}
      />
      <Card
        name="Product 2"
        price="$30"
        imageSource={require('../assets/product2.jpg')}
      />
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#B69663',
//     padding: 20,
//   },
container: {
    flexGrow: 1,
    backgroundColor: '#B69663',
    padding: 20,
  },
});

export default MainPage;
