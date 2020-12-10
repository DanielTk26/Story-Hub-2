import * as React from "react";
import { Header } from "react-native-elements";
import { View, StyleSheet, Text } from "react-native";

export default class ReadStoryScreen extends React.Component {
  render() {
    return (
        <View
        style={{
          flex: 1,
          backgroundColor: "white",
         }}  >

        <Header
          backgroundColor={"lightblue"}
          centerComponent={{
            text: "Story Hub",
            style: { fontSize: 28, color: "black" },
          }}
        />
        <Text>Read Others Stories</Text>
        <Text>Unable to preview others stories.</Text>
      </View>
    );
  }
}
