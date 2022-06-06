import React from "react";
import { View, Text, Image, ScrollView, StatusBar, SafeAreaView, Dimensions,StyleSheet,TextInput } from "react-native";
import Shop from "./components/Shop";

const App = () => {
  const { width, height } = Dimensions.get('window')
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
        >
          <View style={{width,height}}>
          </View>


          <View style={{ width, height }}>
            <Text>Screen 2</Text>
            <Shop />
          </View>

          <View style={{ width, height }}>
            <Text>Screen 3</Text>
          </View>

          <View style={{ width, height }}>
            <Text>Screen 4</Text>
          </View>

        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default App;