import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";

import ColPoke from "../components/ColPoke";

const Home = ({navigation}) => {
  const [URL, setURL] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [PokeLista, setPokeLista] = useState();
  const [Load, setLoad] = useState(true);

  useEffect(() => {
    fetch(URL)
      .then((value) => value.json())
      .then((value) => {
        setPokeLista(value);
        setLoad(false);
      });
  }, [URL]);

  if (Load) {
    return (
      <View style={styles.container}>
        <StatusBar translucent={false} barStyle={'dark-content'}/>
        <ActivityIndicator size={"large"} color={"blue"} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={PokeLista.results}
        renderItem={(value) => <ColPoke item={value.item} navigation={navigation}/>}
        keyExtractor={(Pokemon) => Pokemon.name}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity
          style={{
            ...styles.boton,
            display: PokeLista.previous ? "flex" : "none",
          }}
          onPress={() => setURL(PokeLista.previous)}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Anterior</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.boton, display: PokeLista.next ? "flex" : "none" }}
          onPress={() => setURL(PokeLista.next)}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#302F2F",
  },
  texto: {
    color: "white",
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
