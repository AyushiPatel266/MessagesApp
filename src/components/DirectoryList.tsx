import React, { useState } from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
  Platform,
} from 'react-native';
import { directories as allDirectories, Directory } from '../data/data';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

interface Props {
  onSelect: (directory: Directory) => void;
}

const DirectoryList: React.FC<Props> = ({ onSelect }) => {
  const { colors } = useTheme();
  const [search, setSearch] = useState('');
  const directories = allDirectories.filter((dir) =>
    dir.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Welcome Header */}
      <View style={[styles.headerCard, { backgroundColor: colors.primary }]}>
        <Text style={styles.welcome}>👋 Welcome Jill</Text>
        <Text style={styles.subtitle}>What's new today?</Text>
      </View>

      {/* Search Bar */}
      <TextInput
        style={[
          styles.searchBar,
          {
            backgroundColor: colors.card,
            color: colors.text,
            borderColor: colors.accent,
          },
        ]}
        placeholder="🔍  Search directories..."
        placeholderTextColor={colors.text + '99'}
        value={search}
        onChangeText={setSearch}
      />

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Directory List */}
      <FlatList
        data={directories}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: colors.card }]}
            onPress={() => onSelect(item)}
          >
            <Text style={[styles.cardText, { color: colors.text }]}>
              {item.icon}  {item.name}
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  headerCard: {
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
    elevation: 4,
  },
  welcome: {
    fontSize: 26,
    fontWeight: '800',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 16,
    color: '#e0e0e0',
    marginTop: 8,
  },
  searchBar: {
    paddingVertical: Platform.OS === 'ios' ? 14 : 10,
    paddingHorizontal: 16,
    borderRadius: 14,
    borderWidth: 1.6,
    marginBottom: 20,
    fontSize: 16,
  },
  card: {
    padding: 16,
    borderRadius: 14,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 2,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default DirectoryList;