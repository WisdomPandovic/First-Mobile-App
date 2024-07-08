import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const Step3 = () => {
    return (
        <ImageBackground source={require('@/assets/images/onboarding-img (6).jpg')} className="flex-1 justify-end items-center" resizeMode="cover">
            <View className="p-8 bg-opacity-75 rounded-lg items-center justify-center mb-4">
                <Text className="text-white text-3xl font-bold text-center mb-0" style={{ color: '#d7d7d7', fontWeight: 'bold' }}>Expert drivers at work</Text>
                <Text className="text-base text-center mb-4" style={{ color: '#d7d7d7' }}>Be relaxed as our drivers are highly trained and drive in safely</Text>
                <Link href="/(auth)" asChild>
                    <TouchableOpacity style={{ width: 300 }} className='bg-orange-500 px-6 py-3 rounded-lg w-full'>
                        <Text className='text-white text-center font-bold text-lg'>Get Started</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </ImageBackground>
    );
};

export default Step3;
