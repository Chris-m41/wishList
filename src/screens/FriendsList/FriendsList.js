import React, {useState} from 'react';
import {
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Auth} from '../../../App';

const FriendsList = () => {
  const navigation = useNavigation();
  const onTapName = key => {
    console.log('key: ', key);
    navigation.navigate('IndividualFriendsList', {name: key});
  };
  console.log('Auth', Auth);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>FriendsList</Text>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
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
            onPress={() => onTapName(item.key)}>
            <Text style={styles.item}>{item.key}</Text>
          </TouchableOpacity>
        )}
      />
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

export default FriendsList;
