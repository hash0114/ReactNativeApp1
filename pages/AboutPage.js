import { SafeAreaView, FlatList, StyleSheet, Image, View, Text, TouchableOpacity, Pressable
 } from "react-native";

export default function ListPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.moreButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.moreButtonText}>Home</Text>
      </Pressable>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
           
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const data = [
  {
    id: "1",
    title: "Giant Panda",
    image: require("../assets/giant-panda.jpg"),
     description: `This is probably the most well-known entry on the list.

Giant pandas are one of China’s biggest tourist attractions. They’re unique to China and, despite their size, are deceptively cute and cuddly looking.

Unfortunately, due to human activities, there are only around 1,800 giant pandas left in the wild. So, you’ll need to go to a breeding center or zoo to see one while you’re in China.`
  },
  {
    id: "2",
    title: "Red Panda",
    image: require("../assets/red-panda.jpg"),
     description: `The endangered red pandas are ridiculously adorable. They’re slightly larger than a house cat and come from central China and the Himalayas.

Small, shy, and good at hiding, red pandas are rarely seen in the wild, but you can catch a glimpse of them at the giant panda centers in China (though they’re not nearly as popular).

Despite carrying the same name, red pandas aren’t closely related to giant pandas. But they do have a distinct liking for bamboo, the same as their larger counterparts. They also eat leaves, fruit, and insects.`
  },
  {
    id: "3",
    title: "Golden Snub-Nosed Monkey",
    image: require("../assets/golden-snub-nosed-monkey.jpg"),
     description: `These adorable little fluff balls live in the mountains in China’s center and southwest.

Because of the cool climates in these areas, they have thick hair that ranges in color from golden brown to golden red. They also have small, pale blue faces that are undeniably cute!

The golden snub-nosed monkey is one of China’s national treasures. Unfortunately, it’s also endangered and can only be seen outside of China in a few zoos in South Korea and Japan.`
  },
  {
    id: "4",
    title: "Clouded Leopard",
    image: require("../assets/clouded-leopard.jpg"),
     description: `You would have to be very, very lucky to see one of these animals in the wild.

The clouded leopard lives in the foothills of the Himalayas in south China. These beautiful, medium-sized cats have bodies that range from greyish brown to yellowish brown in color with cloud-like blotches and white underparts.

The clouded leopard is mostly found in the trees and can actually climb down vertical tree trunks headfirst in an amazing feat of dexterity. They’re nocturnal and spend most of the day sleeping in trees, venturing out at night to hunt.

Clouded leopard numbers have been declining sharply over the last few decades and have already gone extinct in places like Singapore, Vietnam and Taiwan.

The main threats to these beautiful cats are deforestation and poaching.

You can see the clouded leopard at the Beijing Zoo and other wildlife parks in China.`
  },
  {
    id: "5",
    title: "Asian Black Bear",
    image: require("../assets/asian-black-bear.jpg"),
     description: `When you’re looking for amazing animals, you can’t go past a bear!

The Asian black bear is one of the most dangerous animals in China. It’s also known as the Himalayan bear, Tibetan bear, or moon bear and is found in the forests of northeast China as well as in countries such as India, Iran, Korea, and Russia.

These bears are omnivores and will eat everything from fruits and nuts to small animals and domestic livestock.

Unfortunately, the gallbladder and bile duct of the black bear are highly valued in traditional medicines, so the animals are hunted and farmed for their body parts, leaving them vulnerable to extinction.`
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
    backgroundColor: "#4CAF50", // Green button for "More"
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
