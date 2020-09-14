import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image, Button, Alert} from "react-native";
import HomePage from "./HomePage";
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer} from "@react-navigation/native";


const Stack = createStackNavigator();
const Tab = createStackNavigator();


export default function App () {

  return (

    <View style={styles.container}>
      <ImageBackground source={require('./sean-geraghty-JjxaZVoAAuA-unsplash.jpg')} style={styles.image}>
        <Text style={styles.text}>BREAKFAST CLUB</Text>
        <Text style={styles.text2}>Buy yourself a good morning</Text>

       <View style={styles.container2}>
        <Image source = {require('./Group.png')}/>
      </View>
        <View style={styles.container3}>
          <Image source = {require('./Group5.png')}/>
        </View>

         <Button onPress={() => Alert.alert('Button pressed')} title={"ENTER CLUB"} color={"pink"} />

      </ImageBackground>

    </View>


)};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: "column"
  },

  container2: {
    flex: 1,
    flexDirection: "column",
    paddingLeft: 220,
    paddingTop: 50

  },

  container3: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 300,
    marginLeft: 100


  },
  image: {
    flex: 1,
    resizeMode: "cover",
    paddingTop: 80

  },
  text: {
    color: '#352E58',
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 100,

  },

  text2: {
    color: '#CA7D09',
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 100,

  },
  /*style={styles.button}
  button: {
    color: '#352E58',
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: "white"

  }*/
});

