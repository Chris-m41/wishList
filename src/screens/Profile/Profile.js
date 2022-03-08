import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, Button, SafeAreaView} from 'react-native';
import {Auth, Database, userId} from '../../../App';

export const logOut = () =>
  Auth.signOut().then(() => console.log('User signed out!'));

export const Profile = () => {
  const email = Auth.currentUser.email;

  useEffect(() => {
    Database.ref('/' + userId + '/myInfo')
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());
        const data = snapshot.val();
        setFirstName(data.firstName);
        setLastName(data.lastName);
      });
  });
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}> Profile </Text>
      <Text style={styles.titleText}>
        {firstName} {lastName} {email}
      </Text>
      <Button title="Log out" onPress={logOut} />
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
export default Profile;
