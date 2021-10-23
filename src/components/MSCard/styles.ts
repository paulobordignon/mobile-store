import styled from 'styled-components';
import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const StyledCard = styled(View)`
  width: 45%;
  margin: 10px;
  padding: 20px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.background};
`;

export const StyledImage = styled(Image)`
  align-self: center;
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

export const StyledName = styled(Text)`
  align-self: center;
  padding-top: 10px; 
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const StyledPrice = styled(Text)`
  align-self: center;
  font-size: 16px;
  padding-top: 5px; 
  color: ${({ theme }) => theme.colors.primary};
`;


export const StyledButton = styled(RectButton)`
  align-self: center;
  margin-top: 15px; 
  background: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  border-radius: 10px;
`;

export const StyledButtonText = styled(Text)`
  color: ${({ theme }) => theme.colors.background};
`;
