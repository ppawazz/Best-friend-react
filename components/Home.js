import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const friends = [
  {
    id: "1",
    name: "Sultan",
    description: "Wibu",
    photo: require("../assets/sultan.jpg"),
  },
  {
    id: "2",
    name: "Bu Seblak",
    description: "nyeblak skuy",
    photo: require("../assets/3.jpg"),
  },
  {
    id: "3",
    name: "Kang Somay",
    description: "Somay Everyday",
    photo: require("../assets/2.jpg"),
  },
  {
    id: "4",
    name: "Bu Kost",
    description: "Sini Kostan murmer",
    photo: require("../assets/4.jpg"),
  },
];

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.friendLabel}>Friend</Text>
            <View style={styles.contentContainer}>
              <Image source={item.photo} style={styles.photo} />
              <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  navigation.navigate("Detail", { friendId: item.id })
                }
              >
                <Text style={styles.buttonText}>View</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  friendLabel: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#666",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#007BFF",
    borderRadius: 4,
    alignSelf: "flex-end",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Home;
