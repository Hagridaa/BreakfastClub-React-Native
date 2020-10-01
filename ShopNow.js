import React, { useState } from "react";

import {ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    Alert,
    ScrollView,
    TextInput,
    TouchableOpacity
} from "react-native";
import ViewPager from "@react-native-community/viewpager";


export default function App () {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);
    const onPress2 = () => setCount(prevCount => prevCount - 1);

    return (

        <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

            <Text style={styles.H1}>
                BREAKFAST CLUB
            </Text>
            <Text style={styles.H2}>
                Shop now
            </Text>

            <Image style={styles.cart} source = {require('./CART12png.png')}/>
            <View style={styles.countContainer}>
                <Text style={styles.cart}>Items on cart: {count}</Text>
            </View>

                <View style={styles.search}>
                <Image source = {require('./search.png')}/>
                    <TextInput placeholder={' Mood for something special?'}/>
                </View>

            <View style={styles.shopfood}>
            <Image style={styles.imageShop} source = {require('./brooke-lark-HlNcigvUi4Q-unsplash.jpg')}/>
            <Text style={styles.text3}>Brunchset 1</Text>
                <Text>Price: 10e</Text>
                <Text>Includes 2 waffles, two coffees</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={onPress}>
                    <View style={styles.buttonarea}>
                    <Image style={styles.plusbutton} source = {require('./plusbutton.png')}/>
                    <Text style={styles.add}>Add to cart</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onPress2}>
                    <View style={styles.buttonarea}>
                        <Image style={styles.minusbutton} source = {require('./minusbutton.png')}/>
                        <Text style={styles.add}>Delete from cart</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.shopfood}>
                <Image style={styles.imageShop} source = {require('./brooke-lark-HlNcigvUi4Q-unsplash.jpg')}/>
                <Text>Brunchset 2</Text>
                <Text>Includes 2 waffles, two coffees</Text>
                <Image style={styles.plusbutton} source = {require('./plusbutton.png')}/>
            </View>
            <View style={styles.shopfood}>
                <Image style={styles.imageShop} source = {require('./brooke-lark-HlNcigvUi4Q-unsplash.jpg')}/>
                <Text>Brunchset 3</Text>
                <Text>Includes 2 waffles, two coffees</Text>
                <Image style={styles.plusbutton} source = {require('./plusbutton.png')}/>
            </View>



            {/*<ViewPager style={styles.viewPager} initialPage={0}>
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
            </ViewPager>*/}


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
        height: 200,
        width: 200,
        marginTop: 20,

    },
    shopfood: {
    marginLeft: 100

    },

    viewPager: {
        flex:1
    },

    page: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    plusbutton: {
        marginLeft: 30,
        marginBottom: 0
    },
    minusbutton: {
        marginLeft: 30,
        marginBottom: 20
    },

    buttonarea: {
        flexDirection: 'row'
    },

    add: {
        marginTop: 25,
        color: '#CA7D09'
    },
    text3: {
        color: '#CA7D09',
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 0,

    },

});

