import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, StyleSheet, ActivityIndicator, Image } from "react-native";

const ColPoke = ({ item, navigation }) => {
  const [PokeDatos, setPokeDatos] = useState();
  const [Load, setLoad] = useState(true);

  useEffect(() => {
    fetch(item.url)
      .then((value) => value.json())
      .then((value) => {
        setPokeDatos(value);
        setLoad(false);
      });
  }, []);

  if(Load){
      return(
        <ActivityIndicator
        size='small'
        color='red'
        />
      )
  }

  return (
    <TouchableOpacity style={styles.pokelista} onPress={()=> navigation.navigate("Pokemon",{Poke: PokeDatos})}>
        <Image style={styles.image}
        source={{uri: PokeDatos.sprites.front_default}}
        />
      <Text style={styles.pokelistaTexto}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
    </TouchableOpacity>
  );
};

export default ColPoke;

const styles = StyleSheet.create({
  texto: {
    color: "white",
  },
  image: {
    height: 48,
    width: 48,
    borderRadius: 24,
    alignSelf: "center",
  },
  Titulo: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
  },
  pokelista: {
    marginVertical: 8,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "gray",
    marginHorizontal: 4,
    alignContent: 'center'
  },
  pokelistaTexto: {
    color: "white",
    fontWeight: "bold",
    alignSelf: 'center',
    marginLeft: 8
  },
});
