import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Pokemon = ({ navigation, route }) => {
  const Poke = route.params.Poke;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: Poke.sprites.front_default }}
      />
      <Text style={styles.Titulo}>
        {Poke.name.charAt(0).toUpperCase() + Poke.name.slice(1)}
      </Text>
      <Text style={styles.texto}>
          ID: {Poke.id}
      </Text>
      <Text style={styles.texto}>
          Exp base: {Poke.base_experience}
      </Text>
      <Text style={styles.texto}>
            Altura: {(Poke.height/10)}m
      </Text>
      <Text style={styles.texto}>
          Peso: {(Poke.weight/10)}Kg.
      </Text>
      <Text style={styles.texto}>
          
      </Text>
      <Text style={styles.texto}>
          
      </Text>
      <Text style={styles.texto}>
          
      </Text>
    </View>
  );
};

export default Pokemon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#302F2F",
  },
  texto: {
    color: "white",
    margin: 16,
  },
  image: {
    height: 192,
    width: 192,
    borderWidth: 3,
    borderColor: "#565656",
    borderRadius: 96,
    alignSelf: "center",
  },
  Titulo: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginHorizontal: '10%'
  },
  pokelista: {
    marginVertical: 8,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 16,
    marginHorizontal: 4,
  },
  pokelistaTexto: {
    color: "white",
    fontWeight: "bold",
  },
  boton: {
    margin: 8,
    padding: 8,
    flex: 1,
    backgroundColor: "#DB2F2F",
    borderRadius: 8,
  },
});
