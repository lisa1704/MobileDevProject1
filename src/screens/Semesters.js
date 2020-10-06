import React from "react";
import { Text, StyleSheet, View, Button, Image, TouchableOpacity } from "react-native";

function Semesters(props) {
    console.log(props);
    return (
        <View style={ styles.pageviewStyle}>
            <View style={styles.buttonStyle}>
                <TouchableOpacity
                    style={styles.opacityStyle}
                    onPress={function () {
                        props.navigation.navigate("SixthSem");
                    }}
                >
                    <Text style={styles.textStyle}>6th Semester
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={styles.buttonStyle}>
                <TouchableOpacity
                    style={styles.opacityStyle}
                    onPress={function () {
                        props.navigation.navigate("SeventhSem");
                    }}
                >
                    <Text style={styles.textStyle}>7th Semester
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonStyle}>
                <TouchableOpacity
                    style={styles.opacityStyle}
                    onPress={function () {
                        props.navigation.navigate("EighthSem");
                    }}
                >
                    <Text style={styles.textStyle}>8th Semester
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
     );

};

const styles = StyleSheet.create({
    pageviewStyle: {
        marginTop:250,
        alignItems: "center",
        alignSelf: "center"
    },
    buttonStyle: {
        backgroundColor: "green",
        justifyContent: "space-evenly",
        width: "80%",
        padding: 10,
        alignSelf: "center",
        margin:5
    },
    opacityStyle: {
        alignSelf: "center",
        justifyContent: "space-evenly",
        marginVertical: 10,
        marginHorizontal: 10,
        alignItems: "center",
        width:300
    },
    textStyle: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    }
});
export default Semesters;
