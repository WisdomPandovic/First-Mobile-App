// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import SignupScreen from '../app/auth/signup';
// import SigninScreen from '../app/auth/signin';
// import StepOneScreen from '../components/onboardingSteps/Step1';
// import HomeScreen from '../app/home';

// const Stack = createStackNavigator();

// const AppNavigator = () => (
//   <NavigationContainer>
//     <Stack.Navigator initialRouteName="signup">
//       <Stack.Screen name="signup" component={SignupScreen} />
//       <Stack.Screen name="signin" component={SigninScreen} />
//       <Stack.Screen name="onboarding/step1" component={StepOneScreen} />
//       <Stack.Screen name="home" component={HomeScreen} />
//     </Stack.Navigator>
//   </NavigationContainer>
// );

// export default AppNavigator;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../app/(auth)/signup';
import SigninScreen from '../app/(auth)/signin';
import StepOneScreen from '../components/onboardingSteps/Step1';
import HomeScreen from '../app/(tabs)/home';
import TabsLayout from '../app/(tabs)/_layout';
import Home from '../app/(tabs)/home';
import Trips from '../app/(tabs)/trips';
import Account from '../app/(tabs)/account';

const Stack = createStackNavigator();

const AppNavigator = () => {
  console.log('Initializing AppNavigator...'); // Add console log to check initialization

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signup">
        <Stack.Screen name="signup" component={SignupScreen} />
        <Stack.Screen name="signin" component={SigninScreen} />
        <Stack.Screen name="onboarding/step1" component={StepOneScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="Trips" component={Trips} />
        <Stack.Screen name="Account" component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
