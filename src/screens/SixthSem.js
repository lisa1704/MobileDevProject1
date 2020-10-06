import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const SixthSem = (props) =>
{
    console.log(props)
    const sixthcourse = [{ name: "Math 4643: Probability and Statistics II" },
        { name:"SWE 4637: Web and Mobile Application Development"},
        { name: "CSE 4617: Artificial Intelligence" },
        { name: "CSE 4621: Microprocessor and Interfacing" },
        { name: "SWE 4601: Software Design and Architectures" },
        { name:"SWE 4603: Software Testing and Quality Assurance"}
    ];
    return (
        <View style={ styles.viewStyle}>
            <FlatList
                data={sixthcourse}
                renderItem={
                    function ({ item }) {
                        return (
                            <View style={ styles.listviewStyle}>
                                <Text style={styles.textStyle}>{item.name}</Text>
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
        marginTop:180
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
        padding:10
    }
}
);

export default SixthSem;
