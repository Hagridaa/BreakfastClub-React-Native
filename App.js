
import React from 'react';
import { NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import {createStackNavigator} from "@react-navigation/stack"
import ShopNow from "./ShopNow";
import {StyleSheet} from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {

  return (
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={{
            activeTintColor: 'white',
            activeBackgroundColor: 'black',
            inactiveTintColor: '#CA7D09'
        }}>
          <Tab.Screen name="HOME" component={HomePage} />
            <Tab.Screen name="ABOUT US" component={AboutUs} />
            <Tab.Screen name="SHOP NOW" component={ShopNow} />
            <Tab.Screen name="CONTACT" component={ShopNow} />

        </Tab.Navigator>
      </NavigationContainer>
  );
};

/*const styles = StyleSheet.create({

    font: {
        activeBackgroundColor: 'pink'
    }
});*/
