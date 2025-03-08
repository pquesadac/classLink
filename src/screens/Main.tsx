import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calendar from './Calendario_screen';
import Inicio from './Inicio';
import Icon from 'react-native-vector-icons/Ionicons'; 

const Tab = createBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home-outline'; 

          if (route.name === 'Inicio') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Calendario') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }
          
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'rgba(97,139,74,1)',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen 
        name="Inicio" 
        component={Inicio}
        options={{
          title: 'Inicio',
        }}
      />
      <Tab.Screen 
        name="Calendario" 
        component={Calendar}
        options={{
          title: 'Calendario',
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;