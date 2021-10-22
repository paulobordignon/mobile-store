import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../theme/colors';
import TabRoutes from './tab.routes';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: colors.background
      }
    }}
  >
    <Stack.Screen name="TabRoutes" component={TabRoutes} />
  </Stack.Navigator>
);

export default Routes;
