import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const SeventhSem = (props) => {
    console.log(props)
    const sevcourse = [
    ];
    return (
        <View style={styles.viewStyle}>
            <FlatList
                data={sevthcourse}
                renderItem={
                    function ({ item }) {
                        return (
                            <View style={styles.listviewStyle}>
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
        marginTop: 180
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
        padding: 10
    }
}
);

export default SeventhSem;
