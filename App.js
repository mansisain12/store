import React from "react";
import { View, Text, Image, ScrollView, StatusBar, SafeAreaView, Dimensions,StyleSheet,TextInput } from "react-native";
import Shop from "./components/Shop";
import Home from "./components/Home";

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
          // showsHorizontalScrollIndicator={false}
          // scrollEnabled={false}
          // centerContent={false}
          // contentInset={false}
          // zoomScale={3.0}
          // maximumZoomScale={6}
          // minimumZoomScale={8.0}
        >
          <View style={{width,height}}>
            <Home />
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