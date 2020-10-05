import React from "react";
import { Text, StyleSheet, View, Button, Image, TouchableOpacity } from "react-native";

const Profile = (props) => {
    console.log(props);
    return (
        <View>
            <View style={{ marginVertical: 20, alignItems: "center" }}>
                <Image source={require('../../assets/me.jpg')} style={pstyle.photoStyle} />
            </View>
            <View style={pstyle.textViewStyle}>
                <Text style={pstyle.textStyle}>Name: Fahmida Tasnim Lisa</Text>
                <Text style={pstyle.textStyle}>Student ID: 170042020</Text>
                <Text style={pstyle.textStyle}>Room Number: FHR,UTB-403</Text>
                <Text style={pstyle.textStyle}>E-mail: fahmidatasnim@iut-dhaka.edu</Text>
            </View>
        </View>
    );
};
const pstyle = StyleSheet.create({
    photoStyle: {
        height: 300,
        width: 200,
        resizeMode: "contain",
        borderColor: "brown",
    },
    textViewStyle: {
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: "green",
        width:"50%"
    },
    textStyle: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    }

}
);
export default Profile;
