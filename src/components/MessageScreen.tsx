import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { Directory } from '../data/data';
import { useTheme } from '../context/ThemeContext';

interface Props {
  directory: Directory;
  onBack: () => void;
}

const MessageScreen: React.FC<Props> = ({ directory, onBack }) => {
  const { colors } = useTheme();
  const [messages, setMessages] = useState(directory.messages);
  const [newMessage, setNewMessage] = useState('');

  const addMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  const removeMessage = (index: number) => {
    Alert.alert('Delete Message', 'Are you sure you want to delete this message?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          const updated = [...messages];
          updated.splice(index, 1);
          setMessages(updated);
        }
      }
    ]);
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableOpacity style={[styles.backButton, { backgroundColor: colors.primary }]} onPress={onBack}>
        <Text style={styles.backIcon}>←</Text>
      </TouchableOpacity>

      <Text style={[styles.header, { color: colors.text }]}>{directory.icon} {directory.name}</Text>

      <FlatList
        data={messages}
        keyExtractor={(_, index) => `${directory.name}-${index}`}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onLongPress={() => removeMessage(index)}
            style={[styles.messageCard, { backgroundColor: colors.messageBg }]}
          >
            <Text style={[styles.messageText, { color: colors.text }]}>{item}</Text>
            <Text style={[styles.hintText, { color: colors.text + '88' }]}>Long press to delete</Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { backgroundColor: colors.card, color: colors.text }]}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Add a message..."
          placeholderTextColor={colors.text + '99'}
        />
        <TouchableOpacity onPress={addMessage}>
          <Text style={[styles.send, { color: colors.primary }]}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  backIcon: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  messageCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  messageText: {
    fontSize: 16,
    fontWeight: '500',
  },
  hintText: {
    fontSize: 12,
    marginTop: 4,
    fontStyle: 'italic',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    marginRight: 10,
  },
  send: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MessageScreen;