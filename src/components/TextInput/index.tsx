import { Text, TextInput, View } from "react-native";

interface TextInputProps {
  title: string;
  textbold: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}
export default function TextInputComponent({
  title,
  textbold,
  placeholder,
  value,
  onChangeText,
}: TextInputProps) {
  return (
    <View className="flex flex-col gap-4 mt-2 mb-10">
      <Text className="text-lg">
        {title} <Text className="font-bold">{textbold}</Text>
      </Text>
      <TextInput
        className="w-full p-4 bg-white border border-gray-600 rounded-lg h-20"
        placeholder={placeholder}
        multiline={true}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
