import { SettingOptionRadio } from "@/components/SettingOptionRadio";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export default function SettingsTheme() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SettingOptionRadio
        label="System"
        isSelected={false}
        onPress={() => {}}
      />
      <SettingOptionRadio label="User" isSelected={true} onPress={() => {}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    gap: theme.gap(2),
    marginTop: rt.insets.top,
    padding: theme.gap(2),
  },
}));
