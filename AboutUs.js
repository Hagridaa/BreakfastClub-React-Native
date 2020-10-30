import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    Image,
    View,
    TextInput,
    Button,
    Alert
} from 'react-native';
import  {Avatar} from "react-native-elements";
import Constants from 'expo-constants';
import { API } from 'aws-amplify';
import { Tile} from "react-native-elements";


export default function App() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const sendMessage = () => {
        const apiName = 'contactapi'; // replace this with your api name.
        const path = '/contact'; //replace this with the path you have configured on your API
        const myInit = {
            body: {
                message: message,
                email: email,
            }, // replace this with attributes you need
            headers: {}, // OPTIONAL
        };
        API.post(apiName, path, myInit)
            .then(response => {
                console.log(response)
                return Alert.alert(response.success)
            })
            .catch(error => {
                console.log(error.response);
            });
        setMessage('')
        setEmail('')
    }

    return (

        <SafeAreaView style={styles.container}>

            <ScrollView style={styles.scrollView}>

                <Text style={styles.H1}>
                    WELCOME TO BREAKFAST CLUB
                </Text>
                <Tile
                    imageSrc={require('./amy-flak-MK4TYh3CxKs-unsplash.jpg')}
                    title="Enjoy healthy food with us"
                    featured
                    caption="Pancakes, porridges..you name it"
                />

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


                <View style={styles.contact}>
                    <Text style={styles.hungry}>Contact Us</Text>
                    <Image style={styles.contactImage} source = {require('./contact2.png')}/>
                    <Text>Send us message here</Text>
                    <TextInput
                        placeholder={' Write message here'}
                        value={message}
                        onChangeText={setMessage}
                        style={styles.input}
                    />
                     <TextInput placeholder={' Write your email here'}
                      style={styles.input}
                      value={email}
                      onChangeText={setEmail}
                     />
                </View>
                <View style={styles.buttonStyle}>
                    <Button color="black" title="Send Message" onPress={() => sendMessage()}/>
                </View>
                <View style={styles.find}>
                    <Text style={styles.findus}>Find us</Text>
                    <Image style={styles.locationImage} source = {require('./location2.png')}/>
                    <Avatar
                        rounded
                        size="large"
                        containerStyle={{flex: 2, marginLeft: 175, marginTop: 10, marginBottom:10}}
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                    />
                    <Text style={styles.ceo}>
                        CEO Nia Q: 040 000 111
                    </Text>
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


                </View>

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
        fontSize: 17,
        color: '#CA7D09',
        marginBottom: 10,
        fontWeight: "bold",
    },

    ceo: {

        textAlign: 'center',
        fontSize: 17,
        color: 'black',
        marginBottom: 20,
        fontWeight: "bold",
    },

    H2: {
        fontSize: 18,
        color: '#CA7D09',
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 20,
        fontWeight: "bold",
    },

    hungry: {
        fontSize: 18,
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
        marginBottom: 80
    },
    contactImage: {
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 5
    },
    locationImage: {
        marginLeft: 185,
        marginBottom:20
    },

    findus: {
           fontSize: 18,
        color: '#CA7D09',
        fontWeight: "bold",
        marginLeft: 185,
        marginBottom: 5 ,
        marginTop: 20
    } ,
    find: {
        backgroundColor: '#FFF5F5',
       
    }


});


