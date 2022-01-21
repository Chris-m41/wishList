import React from 'react';
import {
  Text,
  FlatList,
  StyleSheet,
  View,
  SafeAreaView,
  Button,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const IndividualFriendsList = props => {
  const name = props.route.params.name;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>{name}'s List</Text>
      <FlatList
        data={[
          {key: 'shoes', url: 'https://walmart.com'},
          {key: 'shoes1', url: 'https://walmart.com'},
          {key: 'shoes2', url: 'https://walmart.com'},
          {key: 'shoes3', url: 'https://walmart.com'},
          {key: 'shoes4', url: 'https://walmart.com'},
          {
            key: 'Peloton Treadmill',
            url: 'https://www.onepeloton.com/shop/tread/tread-basics-package-us',
          },
        ]}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={{
              backgroundColor: index % 2 === 0 ? '#dbdbe2' : '#a9bcd0',
              borderWidth: 1,
              padding: 3,
              marginRight: 15,
              marginLeft: 15,
            }}
            onPress={() => {
              Linking.openURL(item.url);
            }}>
            {console.log('url', item.url)}
            <Text style={styles.item}>{item.key}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#373f51',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: '#373f51',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#d8dbe2',
  },
});

export default IndividualFriendsList;
