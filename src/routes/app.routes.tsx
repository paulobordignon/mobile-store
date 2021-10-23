import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabRoutes from './tab.routes';

const Stack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="TabRoutes" component={TabRoutes} />
  </Stack.Navigator>
);

export default AppRoutes;
