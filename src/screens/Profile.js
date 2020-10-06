import React from "react";
import { Text, StyleSheet, View, Button, Image, TouchableOpacity } from "react-native";

const Profile = (props) => {
    console.log(props);
    return (
        <View style={pstyle.pageStyle}>
            <View style={pstyle.viewStyle}>
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
    pageStyle: {
 
    },
    viewStyle: {
        marginVertical: 20,
        alignItems: "center",
    },
    photoStyle: {
        marginTop:80,
        height: 400,
        width: 300,
        resizeMode: "contain",
        borderColor: "brown",
    },
    textViewStyle: {
        alignSelf: "center",
        alignItems: "flex-start",
        backgroundColor: "green",
        width: "90%",
        justifyContent: "space-evenly",
        padding: 10,
        margin:2,
        marginTop: 2,
        marginHorizontal: 2,
        marginVertical: 2,
        paddingBottom: 1
    },
    textStyle: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        paddingBottom: 1,
        borderBottomWidth:15
    },

}
);
export default Profile;
