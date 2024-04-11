import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
});

const ListTranslations = ({ translations }) => {
  const [translatedTexts, setTranslatedTexts] = useState([]);

  useEffect(() => {
    // Fonctionnalité à implémenter pour récupérer les traductions de la base de données
    // et les afficher dans la liste
    const getTranslations = async () => {
      // ...
      setTranslatedTexts([...translations]);
    };

    getTranslations();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={translatedTexts}
        renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
      />
    </View>
  );
};

export default ListTranslations;
