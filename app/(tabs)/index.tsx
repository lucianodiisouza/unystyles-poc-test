import { ThemedText } from "@/components/ThemedText";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export default function PlaylistHome() {
  return (
    <ScrollView style={styles.container}>
      <ThemedText type="title">Home Screen</ThemedText>
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
