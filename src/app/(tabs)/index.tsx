import Header from "@/src/components/Header";
import constants from "expo-constants";
import { View } from "react-native";

export default function Index() {
  const statusBar = constants.statusBarHeight;
  return (
    <View style={{ marginTop: statusBar + 10 }} className="mx-8">
      <Header />
    </View>
  );
}
