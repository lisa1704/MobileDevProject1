import React from "react";
import { Text, StyleSheet, View, Button, Image, TouchableOpacity } from "react-native";


const HomeScreen = (props) => {
    console.log(props)
    return (
        <View>
            <Text style={styles.textStyle}>Home</Text>
            <View style={{ alignContent: "center" }}>
                <Image source={require('../../assets/logo.png')} style={styles.logoStyle}/>
            </View>

        </View>
        
        );

};


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: "black",
        fontWeight: "bold"
    },
    logoStyle: {
        height: 250,
        width: 250,
        resizeMode: "contain"
    },


});
export default HomeScreen;
