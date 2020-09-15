import React from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView, ImageBackground, Image, View} from 'react-native';
import Constants from 'expo-constants';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>


            <ScrollView style={styles.scrollView}>
                <Text style={styles.H1}>
                    Welcome to Breakfast Club!
                </Text>

                <Text style={styles.H2}>
                    About us
                </Text>

                <View style={styles.image2}>
                    <Image  source = {require('./brooke-lark-HlNcigvUi4Q-unsplash.jpg')}/>
                </View>
                <Text style={styles.text}>
                   Welcome to Breakfast Club!
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id.
                </Text>
                <View style={styles.image3}>
                    <Image  source = {require('./liana-mikah-L5cEmk3ucYY-unsplash.jpg')}/>
                </View>

                <Text style={styles.text}>
                    Welcome to Breakfast Club!
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id.
                </Text>

            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'


    },
    scrollView: {
        marginHorizontal: 0,
        marginTop: 10,
        marginBottom: 5

    },
    text: {
        fontSize: 18,
        // color: '#CA7D09',
        color: 'black',
        fontWeight: "bold",
        marginTop: 400,
        marginBottom: 30,
        marginLeft: 10,
        marginRight: 10
    },

    H2: {
        fontSize: 18,
        color: '#CA7D09',
        marginLeft: 10,
        marginBottom: 10,
        fontWeight: "bold",
    },

    image2: {
        paddingRight: 10,
        width: 40,
        height: 40
    },

    image3: {
        paddingRight: 10,
        width: 60,
        height: 70
    },

    H1: {
        color: '#352E58',
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 40
    }
});

