import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    backgroundColor: '#33549b',
    padding: 10,
    borderRadius: 5,
    width: 100,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
});

const ModifyButton = ({ onModify }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onModify} style={styles.button}>
        <Text style={styles.text}>Modifier</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModifyButton;
