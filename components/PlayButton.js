import React from 'react';
import { StyleSheet, View, TouchableOpacity, Icon } from 'react-native';

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
  icon: {
    color: '#fff',
    fontSize: 30,
  },
});

const PlayButton = ({ onPlay }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPlay} style={styles.button}>
        <Icon name="volume-up" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default PlayButton;
