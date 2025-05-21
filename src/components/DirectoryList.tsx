import React from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import { directories, Directory } from '../data/data';

interface DirectoryListProps {
  onSelect: (directory: Directory) => void;
}

const DirectoryList: React.FC<DirectoryListProps> = ({ onSelect }) => (
  <View style={styles.container}>
    <FlatList
      data={directories}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onSelect(item)}>
          <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: {
    fontSize: 18,
    padding: 12,
    backgroundColor: '#e0f7fa',
    marginVertical: 6,
    borderRadius: 8,
  },
});

export default DirectoryList;