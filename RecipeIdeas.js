import React from 'react';
import {StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
import ViewPager from '@react-native-community/viewpager';


export default function App () {

    return (
        <View style={{ flex: 1 }}>
            <ViewPager style={styles.viewPager} initialPage={0}>
                <View style={styles.page} key="1">
                    <ImageBackground source={require('./sean-geraghty-JjxaZVoAAuA-unsplash.jpg')} style={styles.image}>
                    <Text style={styles.H1}>
                        BREAKFAST CLUB
                    </Text>
                    <Text style={styles.H2}>
                        RecipeBook
                    </Text>

                    <Text style={styles.H2}>
                        Get inspired
                    </Text>

                    <Text style={styles.H3}>
                        Swipe left to see recipes
                        ➡
                    </Text>
                    </ImageBackground>
                </View>
                <View style={styles.page} key="2">
                    <Text style={styles.H1}>Delux brunch</Text>
                    <Image source = {require('./brooke-lark-HlNcigvUi4Q-unsplash.jpg')}/>
                    <Text style={styles.H3}>Delux brunch recipe:</Text>
                    <Text style={styles.H3}>You need 4 waffels, 3 portions of chiapudding, strawberries, blueberries</Text>
                </View>
                <View style={styles.page} key="3">
                    <Text style={styles.H1}>Delux brunch2</Text>
                    <Image source = {require('./brooke-lark-HlNcigvUi4Q-unsplash.jpg')}/>
                    <Text style={styles.H3}>Delux brunch recipe:</Text>
                    <Text style={styles.H3}>You need 4 waffels, 3 portions of chiapudding, strawberries, blueberries</Text>
                </View>
            </ViewPager>
        </View>                             
    );
};

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
    },
    page: {
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white'
    },
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
    H3: {
        fontSize: 18,
        color: 'black',
        marginLeft: 20,
        marginBottom: 10,
        fontWeight: "bold",
    },
    image:{
        flex:1,
        resizeMode: 'cover',
        paddingTop: 20
    }
});             

