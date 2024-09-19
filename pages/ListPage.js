import { SafeAreaView, FlatList, StyleSheet, Image, View, Text, TouchableOpacity, Pressable, ScrollView } from "react-native";

export default function ListPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

      <ScrollView>
      {data.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>


            <TouchableOpacity
              style={styles.moreButton}
              onPress={() => navigation.navigate("About")}
            >
              <Text style={styles.moreButtonText}>More</Text>
            </TouchableOpacity>
          </View>
      ))}
    </ScrollView>
  </SafeAreaView>
  
  );
}

const data = [
  {
    id: "1",
    title: "Giant Panda",
    image: require("../assets/giant-panda.jpg"),
  },
  {
    id: "2",
    title: "Red Panda",
    image: require("../assets/red-panda.jpg"),
  },
  {
    id: "3",
    title: "Golden Snub-Nosed Monkey",
    image: require("../assets/golden-snub-nosed-monkey.jpg"),
  },
  {
    id: "4",
    title: "Clouded Leopard",
    image: require("../assets/clouded-leopard.jpg"),
  },
  {
    id: "5",
    title: "Asian Black Bear",
    image: require("../assets/asian-black-bear.jpg"),
  },

];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  card: {
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  moreButton: {
    backgroundColor: "#4CAF50", 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 10,
    alignSelf: "center",
  },
  moreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
