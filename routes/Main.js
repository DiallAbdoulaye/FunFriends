import React from "react";
import { StyleSheet, Platform, Image, Text, View, Button } from "react-native";
import Firebase from "firebase";
export default class Main extends React.Component {
  state = { currentUser: null };

  randAll = () => {
    let obj = {
      place: "",
      access: "",
      outfit: ""
    };
    let randPlace = ["Venise", "Rome", "Paris", "New-York"];
    let randAccess = ["Bag", "Shoe", "Glove", "Weapon"];
    let randOutfit = [
      "Naked",
      "Iron Man Suit",
      "Manga Cosplay",
      "Spiderman Suit"
    ];
    obj.place = randPlace[Math.floor(Math.random() * randPlace.length)];
    obj.access = randAccess[Math.floor(Math.random() * randAccess.length)];
    obj.outfit = randOutfit[Math.floor(Math.random() * randOutfit.length)];
    console.log(obj.place);
    console.log(obj.access);
    console.log(obj.outfit);
    return obj;
  };
  componentDidMount() {
    const { currentUser } = Firebase.auth();
    this.setState({ currentUser });
  }
  render() {
    const { currentUser } = this.state;
    return (
      <View style={styles.container}>
        <Button onPress={this.randAll} title="Play !" type="outline" />

        <Text>Hi {currentUser && currentUser.email}!</Text>
        <Text>Place : {}!</Text>
        <Text>Accessory : </Text>
        <Text>Outfit : </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
