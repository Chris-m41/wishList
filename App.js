/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import MyList from './src/screens/MyList/MyList';
import FriendsList from './src/screens/FriendsList/FriendsList';
import IndividualFriendsList from './src/screens/FriendsList/IndividualFriendsList';
import AuthStack from './src/screens/Auth/AuthStack';
import CreateAccount from './src/screens/Auth/CreateAccount';
import Profile from './src/screens/Profile/Profile';

export const Database = database();
export const Auth = auth();
export const userId = auth().currentUser.uid;
// export const userId = '12345567';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ListStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FriendsList"
        component={FriendsList}
        options={{headerTitle: 'FriendsList', headerShown: false}}
      />
      <Stack.Screen
        name="IndividualFriendsList"
        component={IndividualFriendsList}
        options={{headerTitle: 'IndividualFriendsList', headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AuthStack1 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={AuthStack}
        options={{headerTitle: 'Login', headerShown: false}}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{headerTitle: 'IndividualFriendsList', headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerTitle: 'Profile', headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }
  useEffect(() => {
    const subscriber = Auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  });

  if (initializing) {
    return null;
  }

  return user ? (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="MyList"
          component={MyList}
          options={{headerTitle: 'MyList', headerShown: false}}
        />
        <Tab.Screen
          name="ListStack"
          component={ListStack}
          options={{headerTitle: 'ListStack', headerShown: false}}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{headerTitle: 'Profile', headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <AuthStack1 />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    color: '#373f51',
  },
});

export default App;
