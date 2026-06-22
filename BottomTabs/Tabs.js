import { StyleSheet, Image, View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "../Component/HomeScreen";
import Wallet from "../Component/Wallet";
import Ticket from "../Component/Ticket";
import Profile from "../Component/Profile";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        // ✅ Hide default labels (we'll style manually)
        tabBarShowLabel: false,

        // ✅ Floating tab bar
        tabBarStyle: styles.tabBar,
      }}
    >

      {/* Home */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              label="Home"
              focused={focused}
              source={require("../assets/home.png")}
            />
          ),
        }}
      />

      {/* Wallet */}
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              label="Wallet"
              focused={focused}
              source={require("../assets/wallet.png")}
            />
          ),
        }}
      />

      {/* Ticket */}
      <Tab.Screen
        name="Ticket"
        component={Ticket}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              label="Ticket"
              focused={focused}
              source={require("../assets/ticket.png")}
            />
          ),
        }}
      />

      {/* Profile */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              label="Profile"
              focused={focused}
              source={require("../assets/user.png")}
            />
          ),
        }}
      />

    </Tab.Navigator>
  );
};

export default Tabs;


// ✅ Custom Tab Icon Component (Fix alignment)
const TabIcon = ({ source, focused, label }) => {
  return (
    <View style={styles.iconContainer}>
      <Image
        source={source}
        style={[
          styles.icon,
          { tintColor: focused ? '#2979ff' : '#777' }
        ]}
      />
      <Text
        style={[
          styles.label,
          { color: focused ? '#2979ff' : '#777' }
        ]}
      >
        {label}
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({

  tabBar: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,

    height: 70,
    borderRadius: 40,
    backgroundColor: '#fff',

    // spacing inside
    paddingBottom: 8,
    paddingTop: 8,

    // shadow
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },

  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: 22,
    height: 22,
    marginBottom: 2,
    resizeMode: 'contain',
  },

  label: {
    fontSize: 11,
  },

});
