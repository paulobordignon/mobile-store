import React, { useCallback, useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import {
  StyledTextLoad,
  StyledContainerItems
} from './styles';
import api from '../../requests/api';
import { MSBackground, MSCartCard } from '../../components';
import { getConnection } from 'typeorm';
import { useNavigation } from '@react-navigation/native';

export const Cart: React.FC = () => {
  const connection = getConnection();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState();
  const [cart, setCart] = useState();

  const fetchProducts = useCallback(async()=>{
    setLoading(true);
    
    await api.get('/product').
      then(response => {
        setProducts(response.data);
        fetchCart(response.data);
      }).
      catch( err => {
        Alert.alert('Erro', `Ocorreu um erro ao listar os produtos`);
      });

    setLoading(false);
  }, [products])

  const fetchCart = useCallback(async(responseProducts ?: any) => {
    await connection.getRepository('Cart').find()
      .then(response => {
        // WHEN INCLUDING A PRODUCT IN THE CART I JUST RECORDED THE ID AND THE AMOUNT. 
        // TO PREVENT THE PRICE FROM CHANGING IN THE BACKEND AND NOT PERSISTED IN THE CART, 
        // THEN I FIND THE PRODUCTS IN THE API AND I FIND THE PRODUCTS IN THE CART AND MAKE A LEFT JOIN.
        // A DOWNSIDE IS TO CREATE A REQUEST EVERY TIME.
        let updateCartItens = [] as any;
        response?.map(itemCart => {
          (responseProducts === undefined  ? products : responseProducts)?.find(itemProduct => {
            if (itemCart.product_id === itemProduct.id){
              updateCartItens.push({
                'id': itemCart.id,
                'product_id': itemCart.product_id,
                'product_quantity': itemCart.product_quantity,
                'name': itemProduct.name,
                'price': itemProduct.price,
                'image': itemProduct.image,
                'stock': itemProduct.stock,
              })
            }
          })
        })
        setCart(updateCartItens)
      });
  }, [products, cart])

  useEffect(() => {
    navigation.addListener('focus', () => {
      fetchProducts();
    });
  },[navigation]);

  return(
    <MSBackground>
      {loading && <StyledTextLoad>Carregando...</StyledTextLoad>}
      <StyledContainerItems>
        <FlatList
          data={cart}
          keyExtractor={(item) => item.product_id}
          renderItem={({ item }) => (
            <MSCartCard
              item={item}
              reload={fetchCart}
            />
          )}
          showsVerticalScrollIndicator={false}
          refreshing={loading}
          onRefresh={fetchCart}
        />
      </StyledContainerItems>
    </MSBackground>
  );
};
