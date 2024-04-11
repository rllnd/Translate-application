import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderRight = ({ navigation }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => console.log('Paramètres')}>
        <Icon name="cog" size={20} style={{ marginRight: 15 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Accueil')}>
        <Icon name="home" size={20} style={{ marginRight: 15 }} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderRight;
