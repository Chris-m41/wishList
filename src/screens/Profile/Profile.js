import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, Button, SafeAreaView} from 'react-native';
import {Auth, Database, userId} from '../../../App';

export const logOut = () =>
  Auth.signOut().then(() => console.log('User signed out!'));

export const Profile = () => {
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
    <SafeAreaView>
      <Text> Profile </Text>
      <Text>
        {firstName} {lastName}
      </Text>
      <Button title="Log out" onPress={logOut} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Profile;
