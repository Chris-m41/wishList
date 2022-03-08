import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  Platform,
  FlatList,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {Auth, Database} from '../../../App';

const MyList = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const userId = Auth.currentUser.uid;

    Database.ref('/' + userId + '/myList').on('value', snapshot => {
      var li = [];
      snapshot.forEach(child => {
        li.push({
          key: child.key,
          name: child.val().name,
          url: child.val().url,
        });
      });
      setData({list: li});
    });
  }, []);

  const isValidUrl = () => {
    const regex = new RegExp(
      '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?',
    );
    return regex.test(url);
  };

  const onSubmit = () => {
    const userId = Auth.currentUser.uid;

    if (!name && !url) {
      Alert.alert('No data present');
    } else if (!name && url) {
      Alert.alert('Item name missing');
    } else if (name && !url) {
      Alert.alert('URL is missing');
    } else {
      if (isValidUrl()) {
        Database.ref('/' + userId + '/myList').push({
          name: name,
          url: url,
        });
        setName('');
        setUrl('');
        Alert.alert('Data is Set');
      } else {
        Alert.alert('Invalid URL');
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Text style={styles.titleText}> Add Item </Text>
      <View style={styles.footer}>
        <Text style={styles.titleText}> Add Item </Text>
        <View style={styles.listView}>
          {data?.list?.length > 0 ? (
            <FlatList
              data={data.list}
              keyExtractor={item => item.key}
              renderItem={({item, index}) => (
                <View
                  style={{
                    backgroundColor: index % 2 === 0 ? '#dbdbe2' : '#a9bcd0',
                    borderWidth: 1,
                    padding: 3,
                    marginRight: 15,
                    marginLeft: 15,
                  }}>
                  <Text style={styles.item}>
                    {item.name} {item.url}
                  </Text>
                </View>
              )}
            />
          ) : (
            <View>
              <Text style={styles.titleText}>
                {' '}
                Looks like there aren't any items in your list.
              </Text>
              <Text style={styles.titleText}>
                How about you try adding items to you list?
              </Text>
            </View>
          )}
        </View>
        <TextInput
          placeholder="Item Name"
          style={styles.textInputStyles}
          onChangeText={text => setName(text)}
        />
        <TextInput
          placeholder="URL"
          style={styles.textInputStyles}
          autoCorrect={false}
          autoCapitalize="none"
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
