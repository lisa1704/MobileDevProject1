import React from "react";
import { Text, StyleSheet, View, Button, Image, TouchableOpacity } from "react-native";


const HomeScreen = (props) => {
    console.log(props)
    return (
        <View>
            <View style={{ marginVertical: 30, alignItems: "center", marginTop:60 }}>
                <Image source={require('../../assets/logo.png')} style={styles.logoStyle}/>
            </View>
            <View style={{ marginVertical: 20, alignItems: "center" }}>
                <Text style={styles.textStyle}>Department of CSE</Text>
                <Text style={styles.textStyle}>Program: SWE</Text>
            </View>
            <View style={ styles.opacityviewStyle}>
                <TouchableOpacity
                    style={{ alignSelf: "center"}}
                    onPress={
                        function () {
                            props.navigation.navigate("Profile");
                        }
                    }
                >
                    <Text style={styles.opacityTextStyle}>My Profile</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.opacityviewStyle} >
                <TouchableOpacity
                    style={{ alignSelf: "center" }}
                    onPress={
                        function () {
                            props.navigation.navigate("Semesters");
                        }
                    }
                >
                    <Text style={styles.opacityTextStyle}>Course Wise Semester List</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.opacityviewStyle} >
                <TouchableOpacity
                    style={{ alignSelf: "center" }}
                    onPress={
                        function () {
                            props.navigation.navigate("Faculty");
                        }
                    }
                >
                    <Text style={styles.opacityTextStyle}>List of Faculty Members</Text>
                </TouchableOpacity>
            </View>
        </View>
        );
};


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 22,
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
    opacityviewStyle: {
        backgroundColor: "green",
        width: "80%",
        alignSelf: "center",
        padding: 20,
        marginTop: 20,
        justifyContent: "space-evenly"
    },
});
export default HomeScreen;
