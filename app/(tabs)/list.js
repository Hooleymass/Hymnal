import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import languageData from './Language.json';  // Import Language.json

const IndexScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // Set default language
  const [languages] = useState(Object.keys(languageData)); // Remove 'All' option

  const selectedHymns = languageData[selectedLanguage] || [];

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={languages}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.languageCard,
                  item === selectedLanguage && styles.selectedLanguageCard,
                ]}
                onPress={() => setSelectedLanguage(item)}
              >
                <Text
                  style={[
                    styles.languageText,
                    item === selectedLanguage && { color: '#fff' },
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>

      <View style={styles.contentContainer}>
        <FlatList
          data={selectedHymns}
          keyExtractor={(item) => item.number.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View style={styles.itemContainer}>
                <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>
                  {item.title}
                </Text>
                <Text style={styles.number}>{item.number}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff', // Set background color to white
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: '#fff', // Set background color to white
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff', // Set background color to white
  },
  languageCard: {
    borderWidth: 1,
    borderColor: '#eee',
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginHorizontal: 3,
    borderRadius: 6,
    marginVertical: 2,
    backgroundColor: '#eee', // Set background color to light gray
    elevation: 5,
  },
  selectedLanguageCard: {
    backgroundColor: '#000', // Set background color to black when pressed
    color: '#fff',
  },
  languageText: {
    fontSize: 16,
    color: '#000', // Set text color to black
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee', // Lighter shade of white
  },
  number: {
    fontSize: 24,
    color: '#000', // Set text color to black
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    color: '#000', // Set text color to black
  },
});

export default IndexScreen;

