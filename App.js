import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";
import Profile from "./src/screens/Profile";
const stack = createStackNavigator();

function App() {
        return (
            <NavigationContainer>
                <stack.Navigator initialRouteName="Home">
                    <stack.Screen name="Home" component={HomeScreen} />
                    <stack.Screen name="Profile" component={Profile}/>
                </stack.Navigator>
            </NavigationContainer>
        );
};

export default App;

