import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, StatusBar } from 'react-native';
import { s } from './style'; // Importez vos styles CSS
import { t } from './text'; // Importez vos styles de texte
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Traduction from './components/Contact'; // En supposant que c'est votre composant de traduction
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderRight from './components/headerRight';

const App = ({ navigation }) => {
  const [statusBarVisible, setStatusBarVisible] = useState(true);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    StatusBar.setHidden(true); // Masquer la barre d'état
  }, []);

  const handleScreenPress = () => {
    setStatusBarVisible(true);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const hideBottomNavigationBar = statusBarVisible || menuVisible; // Contrôler la visibilité de la barre inférieure

  return (
    <View style={s.container}>
      <TouchableOpacity onPress={handleScreenPress} style={{ flex: 1 }}>
        <View style={s.fullScreen}>
          <TouchableOpacity onPress={toggleMenu}>
            <Icon name="bars" size={20} style={{ marginRight: 7, color: 'white' }} />
          </TouchableOpacity>
          <Text style={t.texto}>Traduction instantanée</Text>
          {menuVisible && (
            <View style={s.menu}>
              <TouchableOpacity style={s.menuItem} onPress={() => console.log('Accueil')}>
                <Text style={s.menuText}>Accueil</Text>
              </TouchableOpacity>
              <TouchableOpacity style={s.menuItem} onPress={() => console.log('Paramètres')}>
                <Text style={s.menuText}>Paramètres</Text>
              </TouchableOpacity>
              <TouchableOpacity style={s.menuItem} onPress={() => console.log('Mode sombre/claire')}>
                <Text style={s.menuText}>Mode sombre/claire</Text>
              </TouchableOpacity>
            </View>
          )}
          <Image source={require('./assets/inter.jpeg')} style={t.b} />
          <TouchableOpacity style={s.button0} onPress={handleButtonPress}>
          <Text style={t.buttonText}>Commencer</Text>
        </TouchableOpacity>
        </View>
        <StatusBar hidden={hideBottomNavigationBar} />
      </TouchableOpacity>
    </View>
  );
};

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={App}
          options={{
            headerShown: false,
            headerRight: () => (
              <HeaderRight />
            ),
          }}
        />
        <Stack.Screen name="Traduction" component={Traduction} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainApp;
