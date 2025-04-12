import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ShareScreen from '../screens/ShareScreen';
import UploadScreen from '../screens/UploadScreen';

import Register from '../componnents/Register';
import Login from '../componnents/Login';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {height: 60, paddingBottom: 2},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            // focused ? (<FontAwesome6 name="house" iconStyle="solid" size={20} />) : (<FontAwesome6 name="house" iconStyle="solid" size={20} /> )
            <FontAwesome6
              name="house"
              iconStyle="solid"
              size={20}
              color={focused ? 'blue' : 'lightblue'}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Share"
        component={ShareScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            // focused ? (<FontAwesome6 name="paper-plane" iconStyle="solid" size={20} /> ) : (<FontAwesome6 name="paper-plane" iconStyle="solid" size={20} /> )
            <FontAwesome6
              name="paper-plane"
              iconStyle="solid"
              size={20}
              color={focused ? 'blue' : 'lightblue'}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Gallery"
        component={UploadScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            // focused ? (<FontAwesome6 name="cloud" iconStyle="solid" size={20} /> ) : (<FontAwesome6 name="cloud" iconStyle="solid" size={20} /> )
            <FontAwesome6
              name="image"
              iconStyle="solid"
              size={20}
              color={focused ? 'blue' : 'lightblue'}
            />
          ),
        }}
      />

      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            // focused ? (<FontAwesome6 name="circle-info" iconStyle="solid" size={20} />) : (<FontAwesome6 name="circle-info" iconStyle="solid" size={20} /> )
            <FontAwesome6
              name="circle-info"
              iconStyle="solid"
              size={20}
              color={focused ? 'blue' : 'lightblue'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ title: 'Register' }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Login' }}
      />
    </Stack.Navigator>
  );
}

function ProfileButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.profileButton}
      onPress={() => navigation.navigate('Register')}>
      <Text style={styles.profileText}>P</Text>
    </TouchableOpacity>
  );
}

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <MainStack />
        <ProfileButton />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabText: {
    fontSize: 12,
    color: 'gray',
  },
  tabTextFocused: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  profileButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 30, // Shadow effect on Android
    shadowColor: '#000', // Shadow effect on iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  profileText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
