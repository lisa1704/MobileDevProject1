import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const Faculty = () => {
    const facult = [{ name: "Mr.A", key: 1 },
        { name: "Mr.B", key: 2 },
        { name: "Mr.C", key: 3 },
        { name: "Mr.D", key: 4 },
        { name: "Mr.E", key: 5 }

    ];
    return (
        <View style={styles.viewStyle}>
            <FlatList
                data={facult}
                renderItem={
                    function ({ item }) {
                        return (<View style={styles.listviewStyle}>
                            <Text style={styles.textStyle}>{item.key}. {item.name}</Text>
                        </View>);
                    }
                }

            />
        </View>

    );

};
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: "white",
        fontWeight:"bold"
    },
    viewStyle: {
        justifyContent: "center",
        marginTop:250
    },
    listviewStyle: {
        width: "70%",
        alignSelf: "center",
        alignContent:"center",
        alignItems: "center",
        backgroundColor: "green",
        justifyContent: "center",

    }

}
);
export default Faculty;
