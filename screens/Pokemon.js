import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { Icon } from "react-native-elements";

const Pokemon = ({ navigation, route }) => {
  const [Poke, setPoke] = useState(route.params.Poke);

  const changePokemon = (ID) => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + String(ID))
      .then((value) => value.json())
      .then((value) => {
        setPoke(value);
      });
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Image
          style={styles.image}
          source={{ uri: Poke.sprites.front_default }}
        />
        <Text style={styles.Titulo}>
          {Poke.name.charAt(0).toUpperCase() + Poke.name.slice(1)}
        </Text>

        <View style={styles.statView}>
          <Text style={styles.statTitle}>ID</Text>
          <Text style={styles.texto}>{Poke.id}</Text>
        </View>

        <View style={styles.statView}>
          <Text style={styles.statTitle}>Exp. al derrotarlo</Text>
          <Text style={styles.texto}>{Poke.base_experience}</Text>
        </View>

        <View style={styles.statView}>
          <Text style={styles.statTitle}>Altura</Text>
          <Text style={styles.texto}>{Poke.height / 10}m</Text>
        </View>

        <View style={styles.statView}>
          <Text style={styles.statTitle}>Peso</Text>
          <Text style={styles.texto}>{Poke.weight / 10}Kg.</Text>
        </View>
        <Text style={styles.texto}></Text>
        <Text style={styles.texto}></Text>
        <Text style={styles.texto}></Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity
          style={{
            ...styles.boton, display: (Poke.id!=1) ? "flex" : "none"
          }}
          onPress={() => changePokemon(Poke.id - 1)}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Anterior</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.boton, display: (Poke.id!=898) ? "flex" : "none" }}
          onPress={() => changePokemon(Poke.id + 1)}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Siguiente</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 20,
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
    borderColor: "gray",
    marginHorizontal: "10%",
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
  statView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  statTitle: {
    color: "#FF5555",
    fontWeight: "bold",
    fontSize: 20,
  },
});
