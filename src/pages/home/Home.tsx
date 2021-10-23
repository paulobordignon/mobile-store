import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, View, Platform, FlatList, Alert } from 'react-native';
import api from '../../requests/api';
import {
  StyledTextLoad,
  StyledContainerItems
} from './styles';
import { MSBackground, MSCard } from '../../components';

export const Home: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState();

  async function fetchProducts(){
    setLoading(true);
    
    await api.get('/product').
      then(response => {
        setProducts(response.data);
      }).
      catch(() => {
        console.log('error get products');
      });

    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  },[]);

  return(
    <MSBackground>
      {loading && <StyledTextLoad>Carregando...</StyledTextLoad>}
      <StyledContainerItems>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MSCard
              item={item}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          refreshing={loading}
          onRefresh={fetchProducts}
        />
      </StyledContainerItems>
    </MSBackground>
  );
};
