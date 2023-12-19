import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function HistoryScreen() {
  const { colors } = useTheme();

  return (
    <View style={{ backgroundColor: colors.background }}>
      <Text style={{ color: colors.text }}>History Screen</Text>
    </View>
  );
}

