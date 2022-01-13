import React, {useState} from 'react';
import {
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const IndividualFriendsList = props => {
  const name = props.route.params.name;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>{name}'s List</Text>
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
    color: '#d8dbe2',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#d8dbe2',
  },
});

export default IndividualFriendsList;
