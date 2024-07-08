import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator'; // Adjust the import path as necessary

const App = () => {
  return (
    <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
  );
};

export default App;
