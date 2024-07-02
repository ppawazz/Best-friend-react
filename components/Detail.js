import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

const friends = [
  {
    id: "1",
    name: "Sultan",
    description: "saya wibu",
    photo: require("../assets/sultan.jpg"),
  },
  {
    id: "2",
    name: "Bu Seblak",
    description: "Seblak best forever",
    photo: require("../assets/3.jpg"),
  },
  {
    id: "3",
    name: "Kang Somay",
    description: "Somay everyday",
    photo: require("../assets/2.jpg"),
  },
  {
    id: "4",
    name: "Bu Kost",
    description: "open kostan murmer",
    photo: require("../assets/4.jpg"),
  },
];

const Detail = ({ route, navigation }) => {
  const { friendId } = route.params;
  const friend = friends.find((f) => f.id === friendId);

  if (!friend) {
    return (
      <View style={styles.container}>
        <Text>No friend data found</Text>
        <Button title="Back to Home" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.friendLabel}>Friend</Text>
      <Image source={friend.photo} style={styles.photo} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{friend.name}</Text>
        <Text style={styles.description}>{friend.description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  friendLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 16,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 32, // Adds space above the button
  },
});

export default Detail;
