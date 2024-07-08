import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const Step2 = () => {
    return (
        <ImageBackground source={require('@/assets/images/onboarding-img (4).jpg')} className="flex-1 justify-end items-center" resizeMode="cover">
            <View className="p-8 bg-opacity-75 rounded-lg items-center justify-center mb-4">
                <Text className="text-white text-3xl font-bold text-center mb-0" style={{ color: '#d7d7d7', fontWeight: 'bold' }}>Pickup at door step</Text>
                <Text className="text-base text-center mb-4" style={{ color: '#d7d7d7' }}>We will pick you in less time from your exact location</Text>
                <Link href="/onboarding/step3" asChild>
                    <TouchableOpacity style={{ width: 300 }} className='bg-orange-500 px-6 py-3 rounded-lg'>
                        <Text className='text-white text-center font-bold text-lg'>Next</Text>
                    </TouchableOpacity>
                </Link>
                <Link href="/(auth)/signin" asChild>
                    <TouchableOpacity className='mt-4'>
                        <Text className='text-white text-lg font-bold'>Skip</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </ImageBackground>
    );
};

export default Step2;
