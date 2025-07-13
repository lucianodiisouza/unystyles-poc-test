import { SettingOptionRadio } from "@/components/SettingOptionRadio";
import { ThemeColor } from "@/components/ThemeColor";
import { ScrollView, View } from "react-native";
import {
  StyleSheet,
  UnistylesRuntime,
  useUnistyles,
} from "react-native-unistyles";

export default function SettingsTheme() {
  const { rt } = useUnistyles();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SettingOptionRadio
        label="System"
        isSelected={rt.hasAdaptiveThemes}
        onPress={() => {
          if (rt.hasAdaptiveThemes) {
            return;
          }

          UnistylesRuntime.setAdaptiveThemes(true);
        }}
      />
      <SettingOptionRadio
        label="User"
        isSelected={!rt.hasAdaptiveThemes}
        onPress={() => {
          if (rt.hasAdaptiveThemes) {
            UnistylesRuntime.setAdaptiveThemes(false);
          }
        }}
      />
      {!rt.hasAdaptiveThemes && (
        <View style={styles.row}>
          <ThemeColor label="light" onPress={() => {}} />
          <ThemeColor label="dark" onPress={() => {}} />
        </View>
      )}
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
  row: {
    justifyContent: "center",
    flexDirection: "row",
    gap: theme.gap(2),
  },
}));
