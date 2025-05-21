import React, { useState } from 'react';
import { View } from 'react-native';
import DirectoryList from './components/DirectoryList';
import MessageScreen from './components/MessageScreen';
import { Directory } from './data/data';

const App: React.FC = () => {
  const [selectedDirectory, setSelectedDirectory] = useState<Directory | null>(null);

  return (
    <View style={{ flex: 1 }}>
      {selectedDirectory ? (
        <MessageScreen
          directory={selectedDirectory}
          onBack={() => setSelectedDirectory(null)}
        />
      ) : (
        <DirectoryList onSelect={setSelectedDirectory} />
      )}
    </View>
  );
};

export default App;