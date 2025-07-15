import Header from "@/src/components/Header";
import SalveButton from "@/src/components/SalveButton";
import TextInputComponent from "@/src/components/TextInput";
import { ResumoDiario } from "@/src/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns";
import constants from "expo-constants";
import { useState } from "react";
import { Alert, View } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const STORAGE_KEY = "@devresumo:registros";

export default function Index() {
  const statusBar = constants.statusBarHeight;

  const [feito, setFeito] = useState("");
  const [travas, setTravas] = useState("");
  const [proximo, setProximo] = useState("");
  async function salvar() {
    try {
      // Verificação mais robusta dos campos (considera strings vazias ou só espaços)
      if (!feito?.trim() || !travas?.trim() || !proximo?.trim()) {
        Alert.alert("Atenção", "Preencha todos os campos corretamente");
        return;
      }

      const hoje = format(new Date(), "yyyy-MM-dd");
      console.log("Dados a serem salvos:", {
        data: hoje,
        feito,
        travas,
        proximo,
      });

      const novoResumo: ResumoDiario = {
        id: uuidv4(),
        data: hoje,
        feito: feito.trim(),
        travas: travas.trim(),
        proximo: proximo.trim(),
      };

      // 1. Obter registros atuais
      const json = await AsyncStorage.getItem(STORAGE_KEY);
      const registros: ResumoDiario[] = json ? JSON.parse(json) : [];
      console.log("Registros anteriores:", registros);

      // 2. Verificar se já existe registro para a data atual
      const index = registros.findIndex((item) => item.data === hoje);

      // 3. Atualizar ou adicionar novo registro
      if (index !== -1) {
        registros[index] = novoResumo;
        console.log("Atualizando registro existente");
      } else {
        registros.push(novoResumo);
        console.log("Adicionando novo registro");
      }

      // 4. Salvar no AsyncStorage
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(registros));
      Alert.alert("Sucesso", "Resumo salvo com sucesso");
      setFeito("");
      setTravas("");
      setProximo("");
    } catch (error) {
      console.error("Erro detalhado:", error);
      Alert.alert(
        "Erro",
        "Ocorreu um erro ao salvar. Verifique o console para mais detalhes."
      );
    }
  }

  return (
    <View style={{ marginTop: statusBar + 10 }} className="mx-8">
      <Header />
      <TextInputComponent
        title="Aqui você pode escrever"
        textbold="O que você fez hoje?"
        placeholder="O que você fez hoje?"
        value={feito}
        onChangeText={setFeito}
      />
      <TextInputComponent
        title="Aqui você pode dizer"
        textbold="onde travou hoje?"
        placeholder="Onde travou hoje?"
        value={travas}
        onChangeText={setTravas}
      />
      <TextInputComponent
        title="Aqui você pode escrever"
        textbold="o que vai fazer amanha?"
        placeholder="O que vai fazer amanha?"
        value={proximo}
        onChangeText={setProximo}
      />
      <SalveButton salvar={salvar} />
    </View>
  );
}
