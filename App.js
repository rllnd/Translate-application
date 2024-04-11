import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, StatusBar, ImageBackground } from 'react-native';
import { s } from './style'; // Importez vos styles CSS
import { t } from './text'; // Importez vos styles de texte
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Traduction from './components/Contact'; // En supposant que c'est votre composant de traduction
import Icon from 'react-native-vector-icons/FontAwesome';
import { I18nextProvider } from 'react-i18next';
import i18n from './components/i18n';

const App = ({ navigation }) => {
  const [statusBarVisible, setStatusBarVisible] = useState(true);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    StatusBar.setHidden(true); // Masquer la barre d'état (Cache la barre d'état)
  }, []);

  const handleScreenPress = () => {
    setStatusBarVisible(true);
  };

  const handleMenuPress = () => {
    // Basculer la visibilité du menu (Inverser la visibilité du menu)
    setMenuVisible(!menuVisible);
  };

  const handleButtonPress = () => {
    navigation.navigate('Traduction'); // Naviguer vers le composant de traduction (Naviguer vers le composant de traduction)
  };

  const handleSettingsPress = () => {
    navigation.navigate('Settings');
  };

  const handleHomePress = () => {
    navigation.navigate('Home'); // Naviguer vers la page d'accueil
  };

  const handleThemePress = () => {
    // Mettez en œuvre la logique pour changer de thème ici
  };

  return (
    <View style={s.container}>
      <TouchableOpacity onPress={handleScreenPress} style={{ flex: 1 }}>
        <View style={s.fullScreen}>
          <Text style={t.texto}>Traduction instantanée</Text>
          <TouchableOpacity style={s.iconContainer} onPress={handleMenuPress}>
          <View style={s.menuIcon}>
              <Icon name="bars" size={36} style={s.icon} />
            </View>
          </TouchableOpacity>

          <Image source={require('./assets/inter.jpeg')} style={t.b} />
          <TouchableOpacity style={s.button0} onPress={handleButtonPress}>
            <Text style={t.buttonText}>Commencer</Text>
          </TouchableOpacity>

          {menuVisible && (
            <View style={s.menu}>
              <TouchableOpacity onPress={handleSettingsPress} style={s.menuItem}>
                <Text style={{color:'black' ,size:30}}><Icon name="cog" size={30} style={{ marginRight: 10 }} />Paramètres</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleHomePress} style={s.menuItem}>
                <Text><Icon name="home" size={30} style={{ marginRight: 10 }} />Accueil</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleThemePress} style={s.menuItem}>
                <Text>Mode Sombre/Clair</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <StatusBar hidden={!statusBarVisible} />
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
            // Toujours rendre HeaderRight (Toujours afficher HeaderRight)
          }}
        />
        <Stack.Screen
          name="Traduction"
          component={Traduction}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
      <I18nextProvider i18n={i18n}>
        <View>
          {/* Votre application */}
        </View>
      </I18nextProvider>
    </NavigationContainer>
  );
};

export default MainApp;
