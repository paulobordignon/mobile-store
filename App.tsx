import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Routes from './src/routes';
import { ThemeProvider } from 'styled-components';
import { basicTheme } from './src/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={basicTheme}>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
