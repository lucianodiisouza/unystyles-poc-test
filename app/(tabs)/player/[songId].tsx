import { ThemedText } from "@/components/ThemedText";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export const PlayerScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <ThemedText></ThemedText>
    </ScrollView>
  );
};

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    marginTop: rt.insets.top,
    padding: theme.gap(2),
  },
}));
