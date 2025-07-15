import Header from "@/src/components/Header";
import SalveButton from "@/src/components/SalveButton";
import TextInputComponent from "@/src/components/TextInput";
import constants from "expo-constants";
import { useState } from "react";
import { View } from "react-native";

export default function Index() {
  const statusBar = constants.statusBarHeight;

  function salvar() {
    console.log(feito);
    console.log(travas);
    console.log(proximo);
  }

  const [feito, setFeito] = useState("");
  const [travas, setTravas] = useState("");
  const [proximo, setProximo] = useState("");

  return (
    <View style={{ marginTop: statusBar + 10 }} className="mx-8">
      <Header />
      <TextInputComponent
        title="Aqui você pode escrever"
        textbold="O que você fez hoje?"
        placeholder="O que você fez hoje?"
        onChangeText={setFeito}
      />
      <TextInputComponent
        title="Aqui você pode dizer"
        textbold="onde travou hoje?"
        placeholder="Onde travou hoje?"
        onChangeText={setTravas}
      />
      <TextInputComponent
        title="Aqui você pode escrever"
        textbold="o que vai fazer amanha?"
        placeholder="O que vai fazer amanha?"
        onChangeText={setProximo}
      />
      <SalveButton salvar={salvar} />
    </View>
  );
}
