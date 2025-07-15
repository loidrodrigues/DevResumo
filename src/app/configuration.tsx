import { Link } from "expo-router";
import { Text, View } from "react-native";
export default function Configuration() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text className="text-2xl font-bold">Configuration</Text>
      <Link href="/">Ir para home</Link>
    </View>
  );
}
