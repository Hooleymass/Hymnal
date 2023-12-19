import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ArchSVG from '../../constants/svgs/ArchSVG'; // Adjust the import path as needed

const SettingsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.content}>
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>アカウント</Text>
        </View>

        <View style={styles.setting}>
          <FontAwesome name="user" size={24} color="black" style={styles.icon} />
          <View style={styles.settingText}>
            <Text style={styles.settingTitle}>アカウント</Text>
            <Text style={styles.settingDescription}>
              これらの設定は、アプリ内でのみ有効です。
            </Text>
          </View>
        </View>

        <View style={styles.setting}>
          <FontAwesome name="lock" size={24} color="black" style={styles.icon} />
          <View style={styles.settingText}>
            <Text style={styles.settingTitle}>パスワード設定</Text>
            <Text style={styles.settingDescription}>
              これらの設定は、アプリ内でのみ有効です。
            </Text>
          </View>
        </View>

        <View style={styles.setting}>
          <FontAwesome name="user-circle" size={24} color="black" style={styles.icon} />
          <View style={styles.settingText}>
            <Text style={styles.settingTitle}>プロフィールの詳細</Text>
            <Text style={styles.settingDescription}>
              これらの設定は、アプリ内でのみ有効です。
            </Text>
          </View>
        </View>

        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>支払い方法</Text>
        </View>

        <View style={styles.setting}>
          <FontAwesome name="credit-card" size={24} color="black" style={styles.icon} />
          <View style={styles.settingText}>
            <Text style={styles.settingTitle}>支払い方法</Text>
            <Text style={styles.settingDescription}>
              クレジットカードとデビットカード
            </Text>
            <Text style={styles.settingDescription}>
              お金の使い方はどのようにお考えですか？
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.archContainer}>
        <ArchSVG size="100" color="blue" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  editLink: {
    fontSize: 16,
    color: 'blue',
  },
  content: {
    padding: 20,
  },
  subHeader: {
    marginBottom: 20,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#333',
    padding: 10,
    margin: 0,
  },
  setting: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 5,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.1,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  settingText: {
    flexDirection: 'column',
  },
  settingTitle: {
    fontSize: 16,
    margin: 0,
  },
  settingDescription: {
    fontSize: 14,
    lineHeight: 20,
    marginTop: 5,
  },
  archContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 1,
  },
});

export default SettingsScreen;
