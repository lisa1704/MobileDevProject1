import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const EighthSem = () => {
    const ecourse = [
        { name: "CSE 4809: Algorithm Engineering",key:1 },
        { name: "SWE 4801: Software Maintenance",key:2 },
        { name: "SWE 4803: Software Project Management",key:3 },
        { name: "SWE 4805 Software Verification and Validation",key:4 },
        { name: "Optional 8-I: Optional 8-I" ,key:5},
        { name: "Optional 8-II Optional 8-II" ,key:6},
        { name:"SWE 4800: Project/Thesis",key:7}
    ];
    return (
        <View style={styles.viewStyle}>
            <FlatList
                data={ecourse}
                renderItem={
                    function ({ item }) {
                        return (
                            <View style={styles.listviewStyle}>
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
        marginTop: 100
    },
    textStyle: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    },
    listviewStyle: {
        backgroundColor: "green",
        justifyContent: "space-evenly",
        alignSelf: "center",
        width: "100%",
        marginTop: 5,
        marginHorizontal: 5,
        marginVertical: 5,
        padding: 20
    }
}
);

export default EighthSem;
