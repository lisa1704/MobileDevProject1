import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";
import Profile from "./src/screens/Profile";
import Faculty from "./src/screens/Faculty";
import Semesters from "./src/screens/Semesters";
import SixthSem from "./src/screens/SixthSem";


const stack = createStackNavigator();

function App() {
        return (
            <NavigationContainer>
                <stack.Navigator initialRouteName="Home">
                    <stack.Screen name="Home" component={HomeScreen} />
                    <stack.Screen name="Profile" component={Profile} />
                    <stack.Screen name="Faculty" component={Faculty} />
                    <stack.Screen name="Semesters" component={Semesters} />
                    <stack.Screen name="SixthSem" component={SixthSem} />
                </stack.Navigator>
            </NavigationContainer>
        );
};

export default App;

