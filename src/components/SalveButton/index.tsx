import { Pressable, Text } from "react-native";

interface SalveButtonProps {
  salvar: () => void;
}
export default function SalveButton({ salvar }: SalveButtonProps) {
  return (
    <Pressable className="w-full p-4 bg-blue-600   rounded-lg" onPress={salvar}>
      <Text className="text-white text-center text-lg font-bold">Salvar</Text>
    </Pressable>
  );
}
