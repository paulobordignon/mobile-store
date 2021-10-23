import styled from 'styled-components';
import {
  KeyboardAvoidingView,
  View
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const StyledKeyboardView = styled(KeyboardAvoidingView)`
  flex: 1;
`;

export const StyledView = styled(View)`
  margin-top: ${getStatusBarHeight() + 20}px;
`;
