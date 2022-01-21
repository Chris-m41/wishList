import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  Platform,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';

const MyList = () => {
  const [item, setItem] = useState('');
  const [url, setUrl] = useState('');

  const onSubmit = () => {
    setItem('');
    setUrl('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Text style={styles.titleText}> Add Item </Text>
      <View style={styles.footer}>
        <Text style={styles.titleText}> Add Item </Text>
        <View style={styles.listView}>
          <FlatList
            data={[
              {key: 'shoes', url: 'walmart.com'},
              {key: 'shoes1', url: 'walmart.com1'},
              {key: 'shoes2', url: 'walmart.com2'},
              {key: 'shoes3', url: 'walmart.com3'},
              {key: 'shoes4', url: 'walmart.com4'},
              {key: 'shoes5', url: 'walmart.com5'},
              {key: 'shoes11', url: 'walmart.com'},
              {key: 'shoes12', url: 'walmart.com1'},
              {key: 'shoes21', url: 'walmart.com2'},
              {key: 'shoes31', url: 'walmart.com3'},
              {key: 'shoes41', url: 'walmart.com4'},
              {key: 'shoes51', url: 'walmart.com5'},
              {key: 'shoes111', url: 'walmart.com'},
              {key: 'shoes112', url: 'walmart.com1'},
              {key: 'shoes212', url: 'walmart.com2'},
              {key: 'shoes312', url: 'walmart.com3'},
              {key: 'shoes412', url: 'walmart.com4'},
              {key: 'shoes512', url: 'walmart.com5'},
            ]}
            renderItem={({item, index}) => (
              <View
                style={{
                  backgroundColor: index % 2 === 0 ? '#dbdbe2' : '#a9bcd0',
                  borderWidth: 1,
                  padding: 3,
                  marginRight: 15,
                  marginLeft: 15,
                }}>
                <Text style={styles.item}>{item.key}</Text>
              </View>
            )}
          />
        </View>
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
    </KeyboardAvoidingView>
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
    color: '#373f51',
  },
  listView: {
    flex: 1,
    marginTop: 10,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#58a4b0',
  },
  textInputStyles: {
    alignSelf: 'center',
    color: '#373f51',
    height: 40,
    fontSize: 25,
    borderWidth: 1,
    width: 350,
    marginTop: 20,
    borderColor: '#d8dbe2',
    borderRadius: 10,
    backgroundColor: '#d8dbe2',
  },
});

export default MyList;
