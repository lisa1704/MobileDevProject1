import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const Faculty = () => {
    const facult = [{ name: "Dr Muhammad Mahbub Alam", key: 1 },
        { name: "Dr. Abu Raihan Mostofa Kamal", key: 2 },
        { name: "Dr. Md. Hasanul Kabir", key: 3 },
        { name: "Mr. Mohayeminul Islam ", key: 4 },
        { name: "Ms. Tajkia Toma", key: 5 },
        { name: "Mr. Tasnim Ahmed", key: 6 }

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
        marginTop: 150,
    },
    listviewStyle: {
        width: "100%",
        alignSelf: "center",
        alignContent:"center",
        alignItems: "center",
        backgroundColor: "green",
        justifyContent: "center",
        marginTop: 5,
        marginHorizontal: 5,
        marginVertical: 5,
        padding: 20

    }

}
);
export default Faculty;
