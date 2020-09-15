
import React from 'react';
import { NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import {createStackNavigator} from "@react-navigation/stack"
import ShopNow from "./ShopNow";

const Tab = createBottomTabNavigator();

export default function App() {

  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="HOME" component={HomePage} />
            <Tab.Screen name="ABOUT US" component={AboutUs} />
            <Tab.Screen name="SHOP NOW" component={ShopNow} />
        </Tab.Navigator>
      </NavigationContainer>
  );
};