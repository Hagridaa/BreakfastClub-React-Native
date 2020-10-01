import React from "react";
import * as Font from 'expo-font';
import {useFonts} from "expo-font";
import {Text} from "react-native-web";

function  App() {
    const [loaded] = useFonts({
        Poppins: require('./assets/Fonts/Poppins/Poppins-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return <Text style={{ fontFamily: 'Poppins'}} />;
}