import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Content 1</Text>
        <Text style={styles.contentText}>Content 2</Text>
        <Text style={styles.contentText}>Content 3</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  header: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 18,
  },
  footer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
