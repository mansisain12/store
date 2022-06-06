import React from "react";
import { View,Text,StyleSheet } from "react-native";

class Home extends React.Component{
    render(){
        return(
            <View style={styles.view}>
                <Text style={styles.text}>Welcome to the home page</Text>
            </View>
        )
    }
}
export default Home;

const styles = StyleSheet.create({
    view:{
        backgroundColor:"green",height:"100%"
    },
    text:{
        color:"white",fontSize:40,textAlign:"center",paddingTop:280
    }
})