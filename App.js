/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import MyList from './src/screens/MyList/MyList';
import FriendsList from './src/screens/FriendsList/FriendsList';
import IndividualFriendsList from './src/screens/FriendsList/IndividualFriendsList';

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

const App = () => {
  return (
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
      </Tab.Navigator>
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
