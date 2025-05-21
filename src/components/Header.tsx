import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { colors } = useTheme();
  return (
    <View style={[styles.header, { backgroundColor: colors.card }]}>
      <Text style={[styles.title, { color: colors.text }]}>📚 Shop Messages</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Header;