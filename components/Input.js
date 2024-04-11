import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Icon } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  icon: {
    fontSize: 30,
    color: '#33549b',
  },
});

const Input = ({ onRecord, onChangeText }) => {
  const [text, setText] = useState('');

  const handleTextChange = (text) => {
    setText(text);
    onChangeText(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleTextChange}
        value={text}
      />
      <TouchableOpacity onPress={onRecord}>
        <Icon name="microphone" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Input;
