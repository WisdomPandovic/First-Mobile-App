import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';

const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
                            <Ionicons name="home-outline" color={focused ? 'white' : color} size={size} />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="trips"
                options={{
                    title: 'Trips',
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
                            <Ionicons name="car-outline" color={focused ? 'white' : color} size={size} />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    title: 'Account',
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
                            <Ionicons name="person-outline" color={focused ? 'white' : color} size={size} />
                        </View>
                    ),
                }}
            />
        </Tabs>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,        
    },
    iconContainerFocused: {
        backgroundColor: '#b99470',
    },
});

export default TabsLayout;
