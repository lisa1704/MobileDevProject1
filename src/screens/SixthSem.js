import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const SixthSem = () =>
{

    const sixthcourse = [{ name: "Math 4643: Probability and Statistics II",key:1 },
        { name: "SWE 4637: Web and Mobile Application Development", key: 2},
        { name: "CSE 4617: Artificial Intelligence", key: 3},
        { name: "CSE 4621: Microprocessor and Interfacing", key: 4 },
        { name: "SWE 4601: Software Design and Architectures", key: 5},
        { name: "SWE 4603: Software Testing and Quality Assurance", key: 6}
    ];
    return (
        <View style={ styles.viewStyle}>
            <FlatList
                data={sixthcourse}
                renderItem={
                    function ({ item }) {
                        return (
                            <View style={ styles.listviewStyle}>
                                <Text style={styles.textStyle}>{ item.key}. {item.name}</Text>
                            </View>
                        );
                    }
                }
                />
        </View>
       );
};

const styles = StyleSheet.create({
    viewStyle: {
        marginTop:120
    },
    textStyle: {
        fontSize: 20,
        color: "white",
        fontWeight:"bold"
    },
    listviewStyle: {
        backgroundColor: "green",
        justifyContent: "space-evenly",
        alignSelf: "center",
        width: "100%",
        marginTop: 5,
        marginHorizontal: 5,
        marginVertical: 5,
        padding:20
    }
}
);

export default SixthSem;
