import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import MainPage from './screens/MainPage';
import UploadShoePage from './screens/UploadShoePage';

const DrawerContent = () => {
  const navigation = useNavigation();

  const handleUploadShoes = () => {
    navigation.navigate('UploadShoe');
  };

  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 10 }}>Username</Text>
      <TouchableOpacity onPress={handleUploadShoes}>
        <Text style={{ fontSize: 16, margin: 10, color: 'blue' }}>Upload Shoes</Text>
      </TouchableOpacity>
    </View>
  );
};

const Drawer = createDrawerNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isNavigationReady, setIsNavigationReady] = React.useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('ready', () => {
      setIsNavigationReady(true);
    });

    return unsubscribe;
  }, [navigation]);

  if (!isNavigationReady) {
    return null; // Return null or a loading screen while the navigation is not ready
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Drawer.Navigator drawerContent={() => <DrawerContent/>}>
          <Drawer.Screen name="MainPage" component={MainPage} />
          <Drawer.Screen name="UploadShoe" component={UploadShoePage} />
        </Drawer.Navigator>
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )}
    </NavigationContainer>
  );
}
