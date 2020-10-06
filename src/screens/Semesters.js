import React from "react";
import { Text, StyleSheet, View, Button, Image, TouchableOpacity } from "react-native";

function Semesters(props) {
    console.log(props);
    return (
        <View style={ styles.pageviewStyle}>
            <View style={styles.buttonStyle}>
                <TouchableOpacity
                    style={styles.opacityTextStyle}
                    onPress={function () {
                        props.navigation.navigate("SixthSem");
                    }}
                    />
            </View>
        </View>
     );

};

const styles = StyleSheet.create({
    pageviewStyle: {
        alignItems: "center"
    },
    buttonStyle: {
        backgroundColor:"green"
    },
    opacityTextStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color:"black"

    }
});
export default Semesters;
