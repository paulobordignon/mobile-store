import React, { useCallback } from 'react';
import { Alert } from 'react-native';
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
import { getConnection } from 'typeorm';

export const MSCard: React.FC<ICardProps> =
  ({ item }) => {

    const addItem = useCallback(async () => {
      const connection = getConnection();
      if (await connection.getRepository('Cart').findOne({ product_id: item.id }) !== undefined){
        Alert.alert('Item já está no carrinho', 'O produto já foi adicionado no carrinho anteriormente.');
      }else{
        await connection.getRepository('Cart').save({
          product_id: item.id,
          product_quantity: 1,
        }).then(() => {
          Alert.alert('Sucesso', `O produto ${item.name} foi adicionado ao carrinho com sucesso.`);
        }).catch(() => {
          Alert.alert('Erro', `Ocorreu um erro ao adicionar o produto ${item.name}.`);
        });
      }
    }, [item]);

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
          <StyledButtonText onPress={addItem}>
            Comprar
          </StyledButtonText>
        </StyledButton>
      </StyledCard>
    );
  };
  