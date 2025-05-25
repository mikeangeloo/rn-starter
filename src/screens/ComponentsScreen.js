import { StyleSheet, Text, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = "Getting started with React Native!";
  const name = "Miguel Angel Ramirez Lopez.";
  return (
    <View>
      <Text style={syles.greetingsStyle}>{greeting}</Text>
      <Text style={syles.userName}>My name is: {name}</Text>
    </View>
  );
};

const syles = StyleSheet.create({
  greetingsStyle: {
    fontSize: 45,
  },
  userName: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
