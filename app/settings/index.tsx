import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export default function SettingsHome() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText type="title">Settings Home</ThemedText>
      <Link href="/settings/settings-accent">Accent</Link>
      <Link href="/settings/settings-theme">Theme</Link>
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
