import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import AddPetScreen from '../screens/AddPetScreen';
import PetServicesScreen from '../screens/PetServicesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName = 'home';

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Discover') {
            iconName = 'paw-outline';
          } else if (route.name === 'AddPet') {
            iconName = 'add-circle-outline';
          } else if (route.name === 'Services') {
            iconName = 'medkit-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#f97316', // orange
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#fce5d8' }, // light peach
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen name="AddPet" component={AddPetScreen} />
      <Tab.Screen name="Services" component={PetServicesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
