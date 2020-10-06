import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const SeventhSem = () => {
    const sevcourse = [{ name: " Hum 4747: Legal Issues and Cyber Law",key:1},
        { name: " SWE 4701: Software Metrics and Process" ,key: 2},
        { name: " Optional 7-I", key: 3},
        { name: " CSE 4714: Technical Report Writing ", key: 4 },
        { name: " SWE 4790: Internship", key: 5},
        { name: " SWE 4700: Project/Thesis", key: 6}
    ];
    return (
        <View style={styles.viewStyle}>
            <FlatList
                data={sevcourse}
                renderItem={
                    function ({ item }) {
                        return (
                            <View style={styles.listviewStyle}>
                                <Text style={styles.textStyle}>{item.key}.{item.name}</Text>
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
        marginTop: 120
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

export default SeventhSem;
