import React from 'react';
import { Platform } from 'react-native';
import { StyledKeyboardView, StyledView } from './styles';

export const MSBackground: React.FC = ({ children }) => {
  return (
    <StyledKeyboardView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StyledView>
        {children}
      </StyledView>
    </StyledKeyboardView>
  );
};
