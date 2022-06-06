import React, { Component } from "react";
import { View, Text, TextInput, Image, StyleSheet, Button, TouchableOpacity } from "react-native";

class Login extends React.Component {

    render() {
        return (
            <View>

                <View style={styles.view}>
                    <Image source={require('./assets/grocery.png')}
                        style={{ width: 200, height: 50, marginLeft: 75 }} />
                    <Text style={styles.text}>Welcome back!  {"\n"} {"\n"}</Text>

                    <View style={styles.icon}>

                        <View style={styles.sectionStyle}>
                            <Image source={require('./assets/email.jpeg')} style={styles.imgstyle} />
                            <TextInput placeholder="eg:example@gmail.com"
                                style={{ flex: 1 }}
                            />
                        </View>

                        <View style={styles.sectionStyle}>
                            <Image source={require('./assets/key.jpeg')} style={styles.imgstyle}></Image>
                            <TextInput placeholder="Password"
                                keyboardType="numeric"
                                style={{ flex: 1 }}
                                maxLength={5}
                            />
                            <Image source={require('./assets/eye.jpeg')} style={styles.imgstyle}></Image>
                        </View>

                    </View>

                </View>

                <Text style={{ textAlign: "center", color: "lightgreen" }}>
                    {"\n"} {"\n"} {"\n"} Forgot Password? </Text>
                <Text>{"\n"}</Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={{ fontSize: 16 }}>Login</Text>
                </TouchableOpacity>

                <Text>{"\n"}</Text>
                <Image source={require('./assets/or.png')} style={{ marginLeft: 22 }}></Image>
                <Text>{"\n"}</Text>
                <Text style={styles.login}>Continue with</Text>

                <View style={styles.container}>
                    <Image source={require('./assets/facebook.jpeg')} style={styles.image} />
                    <Image source={require('./assets/google1.jpeg')} style={styles.image}
                        resizeMode="contain" />
                </View>

            </View>

        )
    }
}
const styles = StyleSheet.create({
    view: {
        padding: 20, height: 300, paddingTop: 130
    },
    icon: {
        flex: 1, justifyContent: "center", alignItems: "center", margin: 10
    },
    sectionStyle: {
        flexDirection: "row", justifyContent: "center", alignItems: "center",
        borderWidth: 2, height: 40, backgroundColor: "white", marginTop: 22,
        borderColor: "white",
        borderBottomColor: "lightgrey"
    },
    imgstyle: {
        padding: 10, margin: 5, height: 25, width: 30, resizeMode: "stretch", alignItems: "center"

    },
    text: {
        textAlign: "center", fontSize: 20, fontWeight: "700"
    },
    placeholder:
    {
        margin: 8, borderWidth: 2, height: 35, backgroundColor: "white",
        borderColor: "white",
        borderBottomColor: "lightgreen"
    },

    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
    },
    login: {
        textAlign: "center", fontSize: 18, fontWeight: "600"
    },
    image: {
        width: 115, height: 40, borderWidth: 2, borderColor: "grey", margin: 30
    },
    button: {
        width: "16%", height: 35, alignItems: "center", justifyContent: "center", backgroundColor: "lightgreen",
        marginLeft: 163
    }
})
export default Login;