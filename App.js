import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstPage from './Component/FirstPage';
import One from './Component/One';
import Two from './Component/Two';
import Started from './Component/Started';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Tabs from './BottomTabs/Tabs';
import TicketDetails from './Component/TicketDetails';

import SearchScreen from './Component/SearchScreen';
import RoutesScreen from './Component/RoutesScreen';
import RouteDetailsScreen from './Component/RouteDetailsScreen';
import Booking from './Component/Booking';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="One" component={One} />
        <Stack.Screen name="Two" component={Two} />
        <Stack.Screen name="Started" component={Started} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Tabs" component={Tabs} />

        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Routes" component={RoutesScreen} />
        <Stack.Screen name="RouteDetails" component={RouteDetailsScreen} />
        <Stack.Screen name="Booking" component={Booking} />

        <Stack.Screen name="TicketDetails" component={TicketDetails} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
