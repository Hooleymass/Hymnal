// Header.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({ onSearchPress, onHistoryPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSearchPress}>
        <Icon name="search" size={24} color="white" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onHistoryPress}>
        <Icon name="history" size={24} color="white" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default Header;

