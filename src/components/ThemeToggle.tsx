import React from 'react';
import { Switch, View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme, colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: colors.text }]}>Dark Mode</Text>
      <Switch value={isDark} onValueChange={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  label: {
    fontSize: 16,
  },
});

export default ThemeToggle;