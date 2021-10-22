import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import Home from '../pages/home';

const AppTab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <AppTab.Navigator>
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
        component={Home}
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
