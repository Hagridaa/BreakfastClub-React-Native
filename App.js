
import React, {useState, useEffect} from 'react';
import { NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import {createStackNavigator} from "@react-navigation/stack"
import ShopNow from "./ShopNow";
import Menu from "./Menu";
import Recipes from "./RecipeIdeas"
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import * as Font from "expo-font";





const Tab = createBottomTabNavigator();

export default function App() {
    const [fontReady, setFontReady] = useState(false)
    // let [fontsLoaded] = useFonts({
    //     'Poppins': require('./assets/Fonts/Poppins/Poppins-Regular.ttf'),
    // });
    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                'Poppins': require('./assets/Fonts/Poppins/Poppins-Italic.ttf'),
            });
            setFontReady(true);
        };
        loadFonts();
    }, []);
        /*const [loaded, error] = useFonts({
            Poppins: './assets/Fonts/Poppins/Poppins-Regular.ttf'
        });

        if (!loaded) {
            console.log(error)
            return null;
        }*/

    if (!fontReady) {
        console.log('loading fonts')
        return <AppLoading/>;
    }
    else {
        return (
            <NavigationContainer>
                <Tab.Navigator tabBarOptions={{
                    activeTintColor: 'white',
                    activeBackgroundColor: 'black',
                    inactiveTintColor: '#CA7D09',
                    fontFamily: 'Poppins',
                }}>
                    <Tab.Screen name="HOME" component={HomePage} />
                    <Tab.Screen name="ABOUT US" component={AboutUs} />
                    <Tab.Screen name="SHOP NOW" component={ShopNow} />
                    <Tab.Screen name="MENU" component={Menu}/>
                    <Tab.Screen name="RECIPEBOOK" component={Recipes}/>

                </Tab.Navigator>
            </NavigationContainer>
        );
    }

};

/*const styles = StyleSheet.create({

    font: {
        activeBackgroundColor: 'pink'
    }
});*/
