import React from "react";
import { View,Text,Image,StyleSheet, TextInput } from "react-native";

const App = () => {
  return(
    <View style={{marginTop:10}}>

      <View>
      <TextInput placeholder="Find Store" style={styles.placeholder} />
      </View>

    <View style={styles.image}>

      <View style={styles.sectionstyle}>
      <Image source={require('./images/vegetable1.jpg')} style={styles.picture}></Image>
      <Text style={styles.text}>contray to popular {"\n"} ⭐️⭐️⭐️⭐️⭐️</Text>
      </View>

      <View style={styles.sectionstyle}>
      <Image source={require('./images/vegetable2.jpg')} style={styles.picture}></Image>
      <Text style={styles.text}>The standard {"\n"} ⭐️⭐️⭐️⭐️⭐️</Text>
      </View>
      
    </View>

    <View style={styles.image}>

      <View style={styles.sectionstyle}>
      <Image source={require('./images/vegetable3.jpg')} style={styles.picture}></Image>
      <Text style={styles.text}>Hampden-Sydney {"\n"} ⭐️⭐️⭐️⭐️⭐️</Text>
      </View>

      <View style={styles.sectionstyle}>
      <Image source={require('./images/fruits1.jpg')} style={styles.picture}></Image>
      <Text style={styles.text}>Nullam ornare {"\n"} ⭐️⭐️⭐️⭐️⭐️</Text>
      </View>
      
    </View>

    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  image:{
    flexDirection:"row",justifyContent:"space-between"
  },

  sectionstyle:{
    flexDirection: "column",alignItems:"center",justifyContent:"center",padding:5,
    alignSelf:"flex-start",borderWidth:1,borderColor:"lightgrey"
  },

  picture:{
    resizeMode:"stretch",width:180,height:170
  },

  text:{
    fontSize:15,fontWeight:"500",paddingTop:13
  },

  placeholder:{
    margin:10,borderWidth:1,padding:10,borderColor:"lightgrey",marginTop:90
  }
})