import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  SafeAreaView,
} from 'react-native';

const MyList = () => {
  const [item, setItem] = useState('');
  const [url, setUrl] = useState('');

  const onSubmit = () => {
    setItem('');
    setUrl('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}> Add Item </Text>
      <View style={styles.footer}>
        <Text>
          {item} {url}
        </Text>
        <TextInput
          placeholder="Item Name"
          style={styles.textInputStyles}
          onChangeText={text => setItem(text)}
        />
        <TextInput
          placeholder="URL"
          style={styles.textInputStyles}
          onChangeText={text => setUrl(text)}
        />
        <Button title="Add Item" onPress={onSubmit} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInputStyles: {
    alignSelf: 'center',
    height: 35,
    fontSize: 25,
    borderWidth: 1,
    width: 300,
    margin: 3,
  },
});

export default MyList;
