import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

export const isLoggedIn = (loggedIn = false) => {
  return loggedIn;
};

export const onSubmit = (email, password) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
      isLoggedIn(true);
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};

const CreateAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Create Account Screen</Text>
      <TextInput
        placeholder="First Name"
        style={styles.textInputStyles}
        // onChangeText={text => setUrl(text)}
      />
      <TextInput
        placeholder="Last Name"
        style={styles.textInputStyles}
        // onChangeText={text => setUrl(text)}
      />
      <TextInput
        placeholder="Email"
        style={styles.textInputStyles}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        style={styles.textInputStyles}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Submit" onPress={() => onSubmit(email, password)} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
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

export default CreateAccount;
