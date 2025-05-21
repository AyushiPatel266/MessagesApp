import React from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import { Directory } from '../data/data';

interface MessageScreenProps {
  directory: Directory;
  onBack: () => void;
}

const MessageScreen: React.FC<MessageScreenProps> = ({ directory, onBack }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onBack}>
      <Text style={styles.back}>← Back</Text>
    </TouchableOpacity>
    <Text style={styles.header}>{directory.name} Messages</Text>
    <FlatList
      data={directory.messages}
      keyExtractor={(item, index) => `${directory.name}-${index}`}
      renderItem={({ item }) => <Text style={styles.message}>{item}</Text>}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  back: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  message: {
    fontSize: 16,
    padding: 12,
    backgroundColor: '#fff3e0',
    marginVertical: 5,
    borderRadius: 6,
  },
});

export default MessageScreen;