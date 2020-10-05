import React from "react";
import { Text, StyleSheet, View, Button, Image, TouchableOpacity } from "react-native";


const HomeScreen = (props) => {
    console.log(props)
    return (
        <View>
            <View style={{ marginVertical: 30, alignItems: "center" }}>
                <Image source={require('../../assets/logo.png')} style={styles.logoStyle}/>
            </View>
            <View style={{ marginVertical: 20, alignItems: "center" }}>
                <Text style={styles.textStyle}>Department of CSE</Text>
                <Text style={styles.textStyle}>Program: SWE</Text>
            </View>
            <View style={{ marginVertical: 20, alignItems: "center" }}>
                <TouchableOpacity style={styles.buttonstyle}>
                    <Button
                        color="green"
                        title="MY PROFILE"
                        onPress={
                            function () {
                                props.navigation.navigate("Profile");
                            }
                        }
                    />
                </TouchableOpacity>
            </View>
            <View style={{ marginVertical: 20, alignItems: "center" }}>
                <TouchableOpacity style={styles.buttonstyle}>
                    <Button
                        color="green"
                        title="SEMESTER WISE COURSE LIST"
                        onPress={
                            function () {
                                props.navigation.navigate("Profile");
                            }
                        }
                    />
                </TouchableOpacity>
            </View>
            <View style={{ marginVertical: 20, alignItems: "center" }}>
                <TouchableOpacity style={styles.buttonstyle}>
                    <Button
                        color="green"
                        title="LIST OF FACULTY MEMBERS"
                        onPress={
                            function () {
                                props.navigation.navigate("Profile");
                            }
                        }
                    />
                </TouchableOpacity>
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
    opacityTextStyle: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    },
    buttonstyle: {
        alignSelf: "center",
        width: "30%", 
    },

});
export default HomeScreen;
