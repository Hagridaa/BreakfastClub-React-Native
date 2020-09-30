import React from "react";
import {ImageBackground, StyleSheet, Text, View, Image, Button, Alert, ScrollView} from "react-native";
import ViewPager from "@react-native-community/viewpager";


export default function App () {

    return (
        <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

            <Text style={styles.H1}>
                BREAKFAST CLUB
            </Text>
            <Text style={styles.H2}>
                Shop now
            </Text>

            <Image style={styles.cart} source = {require('./CART1.png')}/>

                <View style={styles.search}>
                <Image source = {require('./search.png')}/>
                <Text>Mood for something special?</Text>
                </View>

            {/*<Image style={styles.imageShop} source = {require('./shopimage.png')}/>*/}
            <ViewPager style={styles.viewPager} initialPage={0}>
                <View style={styles.page} key="1">
                    <Text>First page</Text>
                    <Text>Swipe ➡️</Text>
                </View>
                <View style={styles.page} key="2">
                    <Text>Second page</Text>
                </View>
                <View style={styles.page} key="3">
                    <Text>Third page</Text>
                </View>
            </ViewPager>


        </View>

        </ScrollView>


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
        marginLeft: 20,
        marginBottom: 10,
        marginTop: 40
    },

    H2: {
        fontSize: 18,
        color: '#CA7D09',
        marginLeft: 20,
        marginBottom: 10,
        fontWeight: "bold",
    },

    cart: {
      marginLeft: 310
    },

    search: {
       marginLeft: 20,
        marginTop: 10,
        flexDirection: 'row'
    },

    scrollView: {
        marginHorizontal: 0,
        marginTop: 10,
        marginBottom: 5

    },

    imageShop: {
        marginLeft: 30,
        marginTop: 20
    },
    viewPager: {
        flex:1
    },

    page: {
        justifyContent: 'center',
        alignItems: 'center'
    }

});

