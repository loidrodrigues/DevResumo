import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text, View } from "react-native";
export default function Header() {
  return (
    <View className="flex flex-row  justify-between items-center  p-8 rounded-lg">
      <View className="flex-1">
        <Text className="text-2xl  font-bold text-center">
          Dev <Text className="text-orange-700 font-normal">Resumo</Text>
        </Text>
      </View>
      <MaterialIcons name="settings" size={24} color="black" />
    </View>
  );
}
