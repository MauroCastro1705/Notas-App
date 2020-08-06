import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <View style={estilos.fondo}>
      <Text style={estilos.label}>Titulo:</Text>
      <TextInput
        style={estilos.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={estilos.label}>Contenido:</Text>
      <TextInput
        style={estilos.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button title="Crear Nota" />
    </View>
  );
};

const estilos = StyleSheet.create({
  fondo: {
    padding: 5,
    paddingTop: 10,
    backgroundColor: "#fada5e",
    flex: 1,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold",
  },
});

export default CreateScreen;
