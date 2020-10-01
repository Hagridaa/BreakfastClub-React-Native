import React from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView, ImageBackground, Image, View, TextInput, Button} from 'react-native';
import Constants from 'expo-constants';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>


            <ScrollView style={styles.scrollView}>
                <Text style={styles.H1}>
                    WELCOME TO BREAKFAST CLUB
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
                <View>
                    <Image  source = {require('./brooke-lark-HlNcigvUi4Q-unsplash.jpg')}/>
                </View>

                <View>
                <Text style={styles.hungry}>
                    SWIPE Hungry Gallery
                </Text>

                <ScrollView horizontal={true} style={styles.scrollView2}>
                    <View style={styles.imageScroll}>
                        <Image source = {require('./brooke-lark-HlNcigvUi4Q-unsplash.jpg')}/>
                        <Text>IIII</Text>
                        <Image  source = {require('./brooke-lark-HlNcigvUi4Q-unsplash.jpg')}/>
                        <Image  source = {require('./brooke-lark-HlNcigvUi4Q-unsplash.jpg')}/>
                    </View>
                </ScrollView>
                </View>

                <View style={styles.contact}>
                    <Text style={styles.hungry}>Contact Us</Text>
                    <Image style={styles.contactImage} source = {require('./contact2.png')}/>
                    <Text>Send us message here</Text>
                    <TextInput
                        placeholder={' Write message here'}
                    style={styles.input}
                    />
                     <TextInput placeholder={' Write your email here'}
                      style={styles.input}
                     />
                </View>
                <View style={styles.buttonStyle}>
                          <Button color="black" title="Message us"/>
                        </View>
                <Text style={styles.adress}>
                    Breakfast Club
                </Text>
                <Text style={styles.adress}>
                    55 Breakfast street
                </Text>
                <Text style={styles.adress}>
                    London UK
                </Text>
                <Text style={styles.adress}>
                    550100
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

    scrollView2: {
    marginTop: 5,
        marginBottom: 10,

    },
    text: {
        fontSize: 18,
        // color: '#CA7D09',
        color: 'black',
        fontWeight: "bold",
        marginTop: 400,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },

    adress: {

        textAlign: 'center',
        fontSize: 18,
        color: '#CA7D09',
        marginBottom: 10,
        fontWeight: "bold",
    },

    H2: {
        fontSize: 18,
        color: '#CA7D09',
        marginLeft: 10,
        marginBottom: 10,
        fontWeight: "bold",
    },

    hungry: {
        fontSize: 16,
        color: '#CA7D09',
        marginLeft: 10,
        marginBottom: 2,
        fontWeight: "bold",
        marginTop: 30

    },

    image2: {
        paddingRight: 10,
        width: 40,
        height: 40,

    },

    image3: {
        paddingRight: 10,
        width: 60,
        height: 70
    },

    imageScroll: {
        flex: 1,
        flexDirection: 'row',

    },

    H1: {
        color: '#352E58',
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: 10,
        marginBottom: 20,
        marginTop: 40
    },
    input: {
        borderColor: 'black',
        borderBottomColor:'black',
        width:300,
        height:40,
        borderWidth: 2,
        marginTop: 20
    },

    contact: {
        alignItems: 'center',
        marginBottom: 20
    },

    buttonStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 40
    },
    contactImage: {
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 5
    }


});


