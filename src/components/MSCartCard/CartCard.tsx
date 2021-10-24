import React, {useCallback} from 'react';
import { Alert } from 'react-native';
import {
  StyledCard,
  StyledName,
  StyledButton,
  StyledButtonText,
  StyledPrice,
  StyledTotalPrice,
  StyledImage,
  StyledGroupItems,
  StyledGroupButtons,
} from './styles';
import { ICardProps } from './interface';
import { currencyFormatter } from '../../utils';
import { getConnection } from 'typeorm';

export const MSCartCard: React.FC<ICardProps> =
  ({ item, reload }) => {

    const connection = getConnection();

    const rmItem = useCallback(async () => {
      await connection.getRepository('Cart').delete(item.id)
        .then(() => {
          Alert.alert('Sucesso', `O produto ${item.name} foi removido com sucesso.`);
        }).catch(() => {
          Alert.alert('Erro', `Ocorreu um erro ao remover o produto ${item.name}.`);
        });
      
      reload();
      
    }, [item]);

    const incItem = useCallback(async () => {
      if (item.product_quantity < item.stock) {
        await connection.getRepository('Cart').update(item.id, {product_quantity: item.product_quantity + 1})
        .catch(() => {
          Alert.alert('Erro', `Ocorreu um erro ao adicionar uma nova unidade.`);
        });
        reload();
      } else {
        Alert.alert('Falta de estoque', `A quantidade máxima em estoque é ${item.stock}`);
      }
    }, [item]);

    const decItem = useCallback(async () => {
      if (item.product_quantity > 1) {
        await connection.getRepository('Cart').update(item.id, {product_quantity: item.product_quantity - 1})
        .catch(() => {
          Alert.alert('Erro', `Ocorreu um erro ao remover uma unidade.`);
        });
        reload();
      } else {
        Alert.alert('Quantidade mínima', `A quantidade mínima para compra é 1 unidade`);
      }
    }, [item]);

    return (
      <StyledCard>
        <StyledImage source={{ uri: item?.image }} />
        <StyledGroupItems>
          <StyledName>
            {item?.name}
          </StyledName>
          <StyledPrice>
            {currencyFormatter(item.price) + ' x ' + item.product_quantity}
          </StyledPrice>
          <StyledTotalPrice>
            {currencyFormatter(item.price * item.product_quantity)}
          </StyledTotalPrice>
        </StyledGroupItems>
        <StyledGroupItems>
          <StyledGroupButtons>
            <StyledButton>
              <StyledButtonText onPress={decItem}>
            -
              </StyledButtonText>
            </StyledButton>
           <StyledButton>
              <StyledButtonText onPress={incItem}>
            +
              </StyledButtonText>
            </StyledButton> 
          </StyledGroupButtons>
          <StyledButton>
            <StyledButtonText onPress={rmItem}>
            Remover
            </StyledButtonText>
          </StyledButton>
        </StyledGroupItems>
      </StyledCard>
    );
  };
  