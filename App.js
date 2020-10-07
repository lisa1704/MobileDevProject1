import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";
import Profile from "./src/screens/Profile";
import Faculty from "./src/screens/Faculty";
import Semesters from "./src/screens/Semesters";
import SixthSem from "./src/screens/SixthSem";
import SeventhSem from "./src/screens/SeventhSem";
import EighthSem from "./src/screens/EighthSem";



const stack = createStackNavigator();

function App() {
        return (
            <NavigationContainer>
                <stack.Navigator initialRouteName="Home">
                    <stack.Screen name="Home" component={HomeScreen} options={{
                        title: 'Home',
                        headerStyle: {
                            backgroundColor: '#f4511e',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize:20,
                            fontWeight: 'bold',
                        },
                    }}/>
                    <stack.Screen name="Profile" component={Profile} options={{
                        title: 'My Profile',
                        headerStyle: {
                            backgroundColor: '#f4511e',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize: 20,
                            fontWeight: 'bold',
                        },
                    }}/>
                    <stack.Screen name="Faculty" component={Faculty} options={{
                        title: 'List of Faculties',
                        headerStyle: {
                            backgroundColor: '#f4511e',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize: 20,
                            fontWeight: 'bold',
                        },
                    }}/>
                    <stack.Screen name="Semesters" component={Semesters} options={{
                        title: 'Semesters',
                        headerStyle: {
                            backgroundColor: '#f4511e',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize: 20,
                            fontWeight: 'bold',
                        },
                    }}/>
                    <stack.Screen name="SixthSem" component={SixthSem}
                        options={{
                            title: 'Course List',
                            headerStyle: {
                                backgroundColor: '#f4511e',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                        }}/>
                    <stack.Screen name="SeventhSem" component={SeventhSem}
                        options={{
                            title: 'Course List',
                            headerStyle: {
                                backgroundColor: '#f4511e',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontSize: 20,
                                fontWeight: 'bold',
                            },
                        }}/>
                    <stack.Screen name="EighthSem" component={EighthSem}
                        options={{
                            title: 'Course List',
                            headerStyle: {
                                backgroundColor: '#f4511e',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontSize: 20,
                                fontWeight: 'bold',
                            },
                        }}/>
                </stack.Navigator>
            </NavigationContainer>
        );
};

export default App;

