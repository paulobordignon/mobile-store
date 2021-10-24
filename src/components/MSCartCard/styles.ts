import styled from 'styled-components';
import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const StyledCard = styled(View)`
  width: 95%;
  margin: 10px;
  padding: 20px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.background};
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledImage = styled(Image)`
  align-self: center;
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

export const StyledGroupButtons = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledGroupItems = styled(View)`
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

export const StyledTotalPrice = styled(Text)`
  align-self: center;
  font-size: 16px;
  font-weight: bold;
  padding-top: 5px; 
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledButton = styled(RectButton)`
  align-self: center;
  margin-top: 15px; 
  background: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
`;

export const StyledButtonText = styled(Text)`
  color: ${({ theme }) => theme.colors.background};
`;
