// SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Slider } from 'react-native-elements';

const SettingsScreen = () => {
  const [fontSize, setFontSize] = useState(24);

  const handleFontSizeChange = (value) => {
    setFontSize(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.iconContainer}>
          <Icon name="language" type="material" size={50} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.sectionTitle}>Language</Text>
          <Text style={styles.sectionContent}>Select your preferred language.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.iconContainer}>
          <Icon name="format-size" type="material" size={50} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.sectionTitle}>Font Size</Text>
          <Slider
            value={fontSize}
            onValueChange={handleFontSizeChange}
            minimumValue={12}
            maximumValue={55}
            step={1}
            thumbStyle={{ width: 20, height: 20, borderRadius: 10, backgroundColor: 'royalblue' }}
            thumbTintColor="royalblue"
          />
        </View>
      </View>
      <View style={styles.test}>
        <Text style={[styles.fontSizeLabel, { fontSize }]}>Praise God</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.iconContainer}>
          <Icon name="palette" type="material" size={50} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.sectionTitle}>Background</Text>
          <Text style={styles.sectionContent}>Choose your favorite background theme.</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    width: 0, // Set a fixed width to prevent pushing the background
  },
  test: {
      height: 55,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionContent: {
    fontSize: 16,
  },
  fontSizeLabel: {
    alignSelf: 'flex-start', // Align text to the left
    marginTop: -15,
  },
});

export default SettingsScreen;

