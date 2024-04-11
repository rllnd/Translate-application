import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';


export default function traduction() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  
  const handleTranslate = async () => {
    try {
      const translation = await translateText(inputText); // Fonction de service pour traduire le texte
      setTranslatedText(translation);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  const handleSpeak = async () => {
    try {
      await speakText(translatedText); // Fonction de service pour synthétiser la voix
    } catch (error) {
      console.error('Error speaking text:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setInputText}
        value={inputText}
        placeholder="Enter text to translate..."
      />
      <Button title="Translate" onPress={handleTranslate} />
      <Text style={styles.translatedText}>{translatedText}</Text>
      <Button title="Speak" onPress={handleSpeak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  translatedText: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
});
