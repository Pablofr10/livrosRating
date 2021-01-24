import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

const FlatComponent = ({data}) => {
  const navigation = useNavigation();

  const [assistirDepois, setAssistirDepois] = useState(false);

  const navegar = () => {
    navigation.navigate('Tela2', {data});
  };

  const assistirMaisTarde = () => {
    alert('Adicionado para assistir mais tarde!');
    setAssistirDepois(true);
  };

  return (
    <View style={styles.container} onPress={navegar}>
      <Image source={{uri: data.image}} style={{width: 100, height: 100}} />
      <View style={styles.subcontainer}>
        <Text style={styles.title}>{data.filme}</Text>
        <Text>{data.ano}</Text>
        <Text>{data.estilo}</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.btn} onPress={navegar}>
            <Text style={styles.btnText}>Ver Mais</Text>
            <Icon name="chevron-right" size={20} color={'#DAD1BF'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.add} onPress={assistirMaisTarde}>
            <Icon
              name={assistirDepois ? 'clock-o' : 'plus'}
              size={30}
              color={'#000000'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DAD1BF',
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    borderRadius: 5,
  },
  subcontainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  actions: {
    width: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    width: 100,
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {
    color: '#DAD1BF',
    fontSize: 16,
  },
});

export default FlatComponent;
