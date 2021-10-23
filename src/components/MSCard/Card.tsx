import React from 'react';
import {
  StyledCard,
  StyledName,
  StyledButton,
  StyledButtonText,
  StyledPrice,
  StyledImage,
} from './styles';
import { ICardProps } from './interface';
import { currencyFormatter } from '../../utils';

export const MSCard: React.FC<ICardProps> =
  ({ item }) => {
    return (
      <StyledCard>
        <StyledImage source={{ uri: item?.image }} />
        <StyledName>
          {item?.name}
        </StyledName>
        <StyledPrice>
          {currencyFormatter(item?.price)}
        </StyledPrice>
        <StyledButton>
          <StyledButtonText>
            Comprar
          </StyledButtonText>
        </StyledButton>
      </StyledCard>
    );
  };