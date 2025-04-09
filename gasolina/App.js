import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function App() {
  const [alcoolPreco, setAlcoolPreco] = useState("");
  const [gasolinaPreco, setGasolinaPreco] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularMelhorOpcao() {
    if (alcoolPreco && gasolinaPreco) {
      const alcool = parseFloat(alcoolPreco.replace(",", "."));
      const gasolina = parseFloat(gasolinaPreco.replace(",", "."));

      if (alcool / gasolina < 0.7) {
        setResultado("Álcool é a melhor opção.");
      } else {
        setResultado("Gasolina é a melhor opção.");
      }
    } else {
      setResultado("Por favor, insira valores válidos.");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qual melhor opção?</Text>
      <Image
        source={require("./assets/logo.jpeg")}
        style={styles.logo}
        accessibilityLabel="Bomba de combustível"
      />

      <View style={styles.form}>
        <Text style={styles.label}>Preço do Álcool (R$):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={alcoolPreco}
          onChangeText={setAlcoolPreco}
        />

        <Text style={styles.label}>Preço da Gasolina (R$):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={gasolinaPreco}
          onChangeText={setGasolinaPreco}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={calcularMelhorOpcao}>
        <Text style={styles.button}>Calcular</Text>
      </TouchableOpacity>

      {resultado ? <Text style={styles.result}>{resultado}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#282c34",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontFamily: "sans-serif",
    fontSize: 18,
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 100,
    marginBottom: 20,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    color: "white",
    marginBottom: 15,
  },
  input: {
    width: 400,
    height: 32,
    borderRadius: 40,
    outline: "none",
    fontSize: 11,
    paddingHorizontal: 20,
    marginBottom: 15,
    color: "#000",
    backgroundColor: "#fff",
  },
  button: {
    width: 432,
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#ffd23b",
    paddingVertical: 5,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    color: "#000",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
