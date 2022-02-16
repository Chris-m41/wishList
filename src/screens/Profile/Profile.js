import React, {Component} from 'react';
import {Text, StyleSheet, Button, SafeAreaView} from 'react-native';
import {Auth} from '../../../App';

export const Profile = () => {
  const logOut = () =>
    Auth.signOut().then(() => console.log('User signed out!'));

  return (
    <SafeAreaView>
      <Text> Profile </Text>
      <Button title="Log out" onPress={logOut} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Profile;
