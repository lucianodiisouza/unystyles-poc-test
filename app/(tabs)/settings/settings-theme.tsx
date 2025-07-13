import { ThemedText } from "@/components/ThemedText";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export default function SettingsTheme() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText type="title">Change Theme</ThemedText>
    </ScrollView>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    marginTop: rt.insets.top,
    padding: theme.gap(2),
  },
}));
