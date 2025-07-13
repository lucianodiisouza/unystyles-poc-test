import { SettingTile } from "@/components/SettingTile";
import { ThemedText } from "@/components/ThemedText";
import { router } from "expo-router";
import { ScrollView, View } from "react-native";
import {
  StyleSheet,
  UnistylesRuntime,
  withUnistyles,
} from "react-native-unistyles";

const StyledScrollview = withUnistyles(ScrollView);

export default function SettingsHome() {
  const systemTheme = UnistylesRuntime.hasAdaptiveThemes;
  return (
    <StyledScrollview contentContainerStyle={styles.scrollview}>
      <ThemedText type="title">Appearance</ThemedText>
      <View style={styles.settingsContainer}>
        <SettingTile
          settingName="Theme"
          selectedValue="Light"
          description={systemTheme ? "System" : "User"}
          onPress={() => router.push("/(tabs)/settings/settings-theme")}
        />
        <SettingTile
          settingName="App accent"
          selectedValue="Default"
          description="Primary app color"
          onPress={() => router.push("/(tabs)/settings/settings-accent")}
        />
      </View>
    </StyledScrollview>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  scrollview: {
    marginTop: rt.insets.top + theme.gap(3),
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.gap(2),
  },
  settingsContainer: {
    marginTop: theme.gap(4),
    padding: theme.gap(0),
  },
}));
