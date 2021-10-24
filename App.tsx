import React, { useCallback, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Routes from './src/routes';
import { ThemeProvider } from 'styled-components';
import { basicTheme } from './src/theme';
import { createConnection } from 'typeorm';
import config from './src/database/config';

const App: React.FC = () => {

  const connect = useCallback(async () => {
    try {
      const connection = await createConnection(config);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    connect();
  }, []);

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
