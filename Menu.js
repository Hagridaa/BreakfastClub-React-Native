import React from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList
} from "react-native";
import Constants from "expo-constants";

const DATA = [
    {
        title: "Porridge",
        data: ["Waffle syrup 3,5e","Cinnamon 2,5e", "Toffee 3e"]
    },
    {
        title: "Brunch",
        data: ["Vegan surprice 20e", "English gift 20e", "Everything 30e"]
    },
    {
        title: "Drinks",
        data: ["Latte 5e", "Kombutcha 3e", "Black coffee 2e"]
    },
    {
        title: "Desserts",
        data: ["Cheese Cake 4,5e", "Waffle dream 5e", "Raw bites 2e"]
    }
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

export  default function App() {

    return(
    <SafeAreaView style={styles.container}>
        <Text style={styles.H1}>BREAKFAST CLUB</Text>
        <Text style={styles.H2}>MENU</Text>
        <Text style={styles.text}>Every order includes daily changing surprise</Text>
        <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} />}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.header}>{title}</Text>
            )}
        />
    </SafeAreaView>
    )};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        marginHorizontal: 5
    },
    item: {
        backgroundColor: "white",
        padding: 20,
        marginVertical: 8,
        marginLeft: 10,
        marginRight: 10
    },
    header: {
        fontSize: 24,
        backgroundColor: "#CA7D09",
        color: 'white',
        marginLeft: 10,
        marginRight: 10,
        fontWeight: "bold"
    },
    title: {
        fontSize: 16,
        marginLeft: 10
    },

    H1: {
        color: '#352E58',
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 10
    },
    text: {
        color: 'black',
        fontSize: 14,
        marginLeft: 10,
        marginBottom: 30,

    },
    H2: {
        fontSize: 18,
        color: '#CA7D09',
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 40,
        fontWeight: "bold",
    }
});


