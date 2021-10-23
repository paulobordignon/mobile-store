import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import Cart from '../pages/cart';
import Home from '../pages/home';
import { colors } from '../theme';

const AppTab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <AppTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
        tabBarShowLabel: false,
      }}>
      <AppTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="home" size={size} color={color} />
          )
        }}
      />
      <AppTab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="shopping-cart" size={size} color={color} />
          )
        }}
      />
    </AppTab.Navigator>
  );
};

export default TabRoutes;
