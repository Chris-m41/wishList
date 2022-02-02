import React from 'react';
import {
  Text,
  FlatList,
  StyleSheet,
  View,
  SafeAreaView,
  Button,
  Linking,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const AuthStack = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Login Screen</Text>
      <TextInput
        placeholder="Email"
        style={styles.textInputStyles}
        // onChangeText={text => setItem(text)}
      />
      <TextInput
        placeholder="Password"
        style={styles.textInputStyles}
        // onChangeText={text => setUrl(text)}
      />
      <Button title="Login" />
      <Button
        title="Create Account"
        onPress={() => navigation.navigate('CreateAccount')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#373f51',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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

export default AuthStack;
