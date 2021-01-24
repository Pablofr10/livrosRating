import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import FlatComponent from './components/FlatComponent';

const Tela1 = () => {
  const navigation = useNavigation();

  const navegar = () => {
    navigation.navigate('Tela2', {name: ``});
  };

  const DATA = [
    {
      key: '0',
      filme: 'SCOOBY! O filme',
      ano: 2020,
      estilo: 'Comédia',
      direcao: 'Tony Cervone',
      assistirDepois: false,
      image:
        'https://br.web.img3.acsta.net/pictures/20/03/05/20/58/4942195.jpg',
      descricao:
        'Scooby e sua turma encaram o seu maior e mais difÃ­cil mistÃ©rio de todos os tempos: um plano maligno para liberar o cÃ£o fantasma, CÃ©rbero, no mundo. Enquanto corre para impedir esse "apocÃ£olipse" global, a turma descobre que Scooby tem um legado secreto e um destino Ã©pico maior do que qualquer um podia imaginar.',
    },
    {
      key: '1',
      filme: 'Harry Potter',
      ano: 2020,
      estilo: 'Aventura',
      direcao: 'Alfonso Cuarón',
      assistirDepois: false,
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbr.web.img3.acsta.net%2Fmedias%2Fnmedia%2F18%2F95%2F59%2F60%2F20417256.jpg&f=1&nofb=1',
      descricao:
        'O 3º ano de ensino na Escola de Magia e Bruxaria de Hogwarts se aproxima. Porém um grande perigo ronda a escola: o assassino Sirius Black (Gary Oldman) fugiu da prisão de Azkaban, considerada até então como à prova de fugas. Para proteger a escola são enviados os Dementadores, estranhos seres que sugam a energia vital de quem se aproxima deles, que tanto podem defender a escola como piorar ainda mais a situação.',
    },
    {
      key: '2',
      filme: 'Harry Potter',
      ano: 2020,
      estilo: 'Aventura',
      direcao: 'Alfonso Cuarón',
      assistirDepois: false,
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbr.web.img3.acsta.net%2Fmedias%2Fnmedia%2F18%2F95%2F59%2F60%2F20417256.jpg&f=1&nofb=1',
      descricao:
        'O 3º ano de ensino na Escola de Magia e Bruxaria de Hogwarts se aproxima. Porém um grande perigo ronda a escola: o assassino Sirius Black (Gary Oldman) fugiu da prisão de Azkaban, considerada até então como à prova de fugas. Para proteger a escola são enviados os Dementadores, estranhos seres que sugam a energia vital de quem se aproxima deles, que tanto podem defender a escola como piorar ainda mais a situação.',
    },
    {
      key: '3',
      filme: 'Harry Potter',
      ano: 2020,
      estilo: 'Aventura',
      direcao: 'Alfonso Cuarón',
      assistirDepois: false,
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbr.web.img3.acsta.net%2Fmedias%2Fnmedia%2F18%2F95%2F59%2F60%2F20417256.jpg&f=1&nofb=1',
      descricao:
        'O 3º ano de ensino na Escola de Magia e Bruxaria de Hogwarts se aproxima. Porém um grande perigo ronda a escola: o assassino Sirius Black (Gary Oldman) fugiu da prisão de Azkaban, considerada até então como à prova de fugas. Para proteger a escola são enviados os Dementadores, estranhos seres que sugam a energia vital de quem se aproxima deles, que tanto podem defender a escola como piorar ainda mais a situação.',
    },
  ];

  return (
    <View>
      <View>
        <Text style={styles.title}>Lista de Filmes</Text>
        <Text style={styles.title}>Lista de Filmes</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({item}) => <FlatComponent data={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000',
  },
});

export default Tela1;
