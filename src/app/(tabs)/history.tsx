import { View } from "react-native";
import { Calendar } from "react-native-calendars";
export default function History() {
  return (
    <View className="flex flex-col w-full">
      <Calendar
        onDayPress={(day) => {
          console.log("selected day", day.dateString);
        }}
        markedDates={{
          "2025-07-15": { marked: true, dotColor: "orange" },
        }}
      />
    </View>
  );
}
