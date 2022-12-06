import React from 'react';
import HomePage from './src/screens/HomePage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CryptoList from './src/screens/CryptoList';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Portfolio from './src/screens/Portfolio';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

const LoggedInScreen = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: {backgroundColor: 'darkslategrey'},
      unmountOnBlur: true,
    }}>
    <Tab.Screen
      name="Market"
      component={CryptoList}
      options={{headerShown: false, backgroundColor: 'transparent'}}
    />
    <Tab.Screen
      name="Portfolio"
      component={Portfolio}
      options={{headerShown: false}}
    />
  </Tab.Navigator>
);

const MyDrawer = ({route}) => (
  <Drawer.Navigator
    screenOptions={{
      drawerContentStyle: {backgroundColor: 'darkslategrey', color: 'white'},
      drawerLabelStyle: {color: 'white', fontWeight: '500'},
    }}>
    <Drawer.Screen
      name="Account"
      component={LoggedInScreen}
      options={{
        headerTitle: `Welcome ${route?.params?.userName}`,
        headerTitleStyle: {color: 'white'},
        headerStyle: {backgroundColor: 'darkslategrey'},
      }}
    />
    <Drawer.Screen
      name="Home"
      component={MyStack}
      options={{headerShown: false}}
    />
  </Drawer.Navigator>
);

const MyStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomePage"
      component={HomePage}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="MyDrawer"
      component={MyDrawer}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
