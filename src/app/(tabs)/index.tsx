import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import constants from "expo-constants";
import { Text, View } from "react-native";

export default function Index() {
  const statusBar = constants.statusBarHeight;
  return (
    <View style={{ marginTop: statusBar + 40 }} className="mx-8">
      <View
        className="flex flex-row  justify-between items-center
      "
      >
        <View className="flex-1">
          <Text className="text-3xl text-slate-900 font-bold text-center">
            DevResumo
          </Text>
        </View>
        <MaterialIcons name="settings" size={24} color="black" />
      </View>
    </View>
  );
}
