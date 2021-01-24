import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Tela1 from './src/Tela1';
import Tela2 from './src/Tela2';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

function MyApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lista de Filmes" component={Tela1} />
        <Stack.Screen name="Detalhes" component={Tela2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyApp;
