import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const Component1 = () => {
  return (
    <ImageBackground
      source={require('@/assets/images/img.jpg')}
      className='flex-1 justify-center items-center m-0 p-0'
      resizeMode="cover"
    >
      <View className='p-8 bg-opacity-75 rounded-lg items-center justify-center'>
        <Text className='text-white text-2xl font-bold text-center mb-4'>
          Welcome to Our Airport Ride Service
        </Text>
        <Link Link href="/onboarding/step1" asChild>
          <TouchableOpacity className='bg-orange-500 px-6 py-3 rounded-lg'>
            <Text className='text-white font-bold text-lg'>Get Started</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ImageBackground>
  );
};

export default Component1;
