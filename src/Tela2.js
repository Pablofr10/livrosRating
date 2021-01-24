import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useRoute} from '@react-navigation/native';

const Detalhes = () => {
  const route = useRoute();

  const nav = useNavigation();

  const data = route.params.data;

  return (
    <View>
      <Image source={{uri: data.image}} style={{width: 150, height: 300}} />
      <Text style={styles.title}>{data.filme}</Text>
      <Text>ANO: {data.ano}</Text>
      <Text>DIREÇÃO: {data.direcao}</Text>
      <Text>ESTILO: {data.estilo}</Text>
      <Text>DESCRIÇÃO: {data.descricao}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Detalhes;
