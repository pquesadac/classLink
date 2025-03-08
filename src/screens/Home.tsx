import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { NavigationProp } from '@react-navigation/native';

interface HomeProps {
  navigation: NavigationProp<any>;
}

function Home({ navigation }: HomeProps) {
  return (
    <View style={styles.container}>
      <View style={styles.class2StackStack}>
        <View style={styles.class2Stack}>
          <Text style={styles.class2}>Class</Text>
          <Image
            source={require("../assets/images/logo.png")}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <Text style={styles.link}>Link</Text>
      </View>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Main')}
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,248,232,1)"
  },
  class2: {
    top: -10,
    left: 10,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(122,160,149,1)",
    fontSize: 40
  },
  image: {
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    position: "absolute"
  },
  class2Stack: {
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    position: "absolute"
  },
  link: {
    top: -10,
    left: 108,
    position: "absolute",
    fontFamily: "impact-regular",
    color: "rgba(97,139,74,1)",
    fontSize: 40
  },
  class2StackStack: {
    width: 200,
    height: 200,
    marginTop: 208,
    marginLeft: 80
  },
  button: {
    width: 181,
    height: 45,
    backgroundColor: "rgba(97,139,74,1)",
    marginTop: 15,
    marginLeft: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default Home;