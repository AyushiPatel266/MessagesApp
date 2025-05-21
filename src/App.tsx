import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import DirectoryList from './components/DirectoryList';
import MessageScreen from './components/MessageScreen';
import { Directory } from './data/data';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  const [selectedDirectory, setSelectedDirectory] = useState<Directory | null>(null);

  return (
    <ThemeProvider>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1 }}>
        {selectedDirectory ? (
          <MessageScreen directory={selectedDirectory} onBack={() => setSelectedDirectory(null)} />
        ) : (
          <DirectoryList onSelect={setSelectedDirectory} />
        )}
      </View>
    </ThemeProvider>
  );
};

export default App;