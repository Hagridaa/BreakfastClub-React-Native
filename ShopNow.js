import React from "react";
import {ImageBackground, StyleSheet, Text, View, Image, Button, Alert, ScrollView} from "react-native";



export default function App () {

    return (

        <View style={styles.container}>
            <Text style={styles.H1}>
                BREAKFAST CLUB
            </Text>

            <Text style={styles.H2}>
                Shop now
            </Text>


            <View style={styles.container4}>
                <Image source = {require('./CART1.png')}/>
            </View>

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

    H1: {
        color: '#352E58',
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 40
    },

    H2: {
        fontSize: 18,
        color: '#CA7D09',
        marginLeft: 10,
        marginBottom: 10,
        fontWeight: "bold",
    },

    container4: {
        flex: 1,
        flexDirection: "column",
        paddingLeft: 320,


    },
});

