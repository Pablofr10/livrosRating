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
      filme: 'Harry Potter 4',
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
      filme: 'Mulher-Maravilha 1984',
      ano: 2020,
      estilo: 'Aventura',
      direcao: 'Patty Jenkins',
      assistirDepois: false,
      image:
        'https://upload.wikimedia.org/wikipedia/pt/9/9f/Mulher_Maravilha_2009.jpg',
      descricao:
        'Mulher-Maravilha 1984 acompanha Diana Prince/Mulher-Maravilha (Gal Gadot) em 1984, durante a Guerra Fria, entrando em conflito com dois grande inimigos - o empresário de mídia Maxwell Lord (Pedro Pascal) e a amiga que virou inimiga Barbara Minerva/Cheetah (Kristen Wiig) - enquanto se reúne com seu interesse amoroso Steve Trevor (Chris Pine).',
    },
    {
      key: '3',
      filme: 'O Rei Leão',
      ano: 2011,
      estilo: 'Aventura',
      direcao: 'Alfonso Cuarón',
      assistirDepois: false,
      image:
        'https://static.wikia.nocookie.net/disney/images/c/c7/Poster-rei-leao-full.jpeg/revision/latest/scale-to-width-down/340?cb=20160925204728&path-prefix=pt-br',
      descricao:
        'Simba, um leão herdeiro do trono, precisará enfrentar seu tio Scar e escapar de suas artimanhas para evitar perder seu posto como futuro rei.',
    },
  ];

  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={({item}) => <FlatComponent data={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000',
  },
});

export default Tela1;
