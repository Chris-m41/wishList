import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  SafeAreaView,
  FlatList,
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
        <FlatList
          data={[
            {key: 'shoes', url: 'walmart.com'},
            {key: 'shoes1', url: 'walmart.com1'},
            {key: 'shoes2', url: 'walmart.com2'},
            {key: 'shoes3', url: 'walmart.com3'},
            {key: 'shoes4', url: 'walmart.com4'},
            {key: 'shoes5', url: 'walmart.com5'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
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
    backgroundColor: '#373f51',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
    color: '#d8dbe2',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: '#d8dbe2',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#d8dbe2',
  },
  textInputStyles: {
    alignSelf: 'center',
    color: '#373f51',
    height: 40,
    fontSize: 25,
    borderWidth: 1,
    width: 300,
    margin: 3,
    borderColor: '#d8dbe2',
    borderRadius: 10,
    backgroundColor: '#d8dbe2',
  },
});

export default MyList;
