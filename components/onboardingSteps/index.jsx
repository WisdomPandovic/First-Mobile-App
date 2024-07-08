// components/onboardingSteps/index.jsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const Onboarding = () => {

    return (
        <View className="flex-1 justify-center items-center bg-white">
            <Text className="text-3xl">Onboarding Home</Text>
            <Link href="/onboarding/step1" asChild>
                <TouchableOpacity className='bg-orange-500 px-6 py-3 rounded-lg'>
                    <Text className='text-white font-bold text-lg'>Start Onboarding</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
};

export default Onboarding;


// import React, { useEffect } from 'react';
// import { View, ActivityIndicator, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const Onboarding = () => {
//   const navigation = useNavigation();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigation.navigate('/onboarding/step1');
//     }, 10000); // 10 seconds delay

//     return () => clearTimeout(timer);
//   }, [navigation]);

//   return (
//     <View style={styles.container}>
//       <ActivityIndicator size="large" color="#FFA500" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
// });

// export default Onboarding;
