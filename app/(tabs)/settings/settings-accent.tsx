import { Button } from "@/components/Button";
import { ThemedText } from "@/components/ThemedText";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import { StyleSheet, useUnistyles } from "react-native-unistyles";

export default function SettingsAccent() {
  const { theme } = useUnistyles();
  const allAccents = theme.colors.accents;
  const [selectedAccent, setSelectedAccent] =
    useState<keyof typeof theme.colors.accents>("banana");

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <View>
          {Object.entries(allAccents).map(([accentName, accentcolor]) => (
            <Pressable
              key={accentName}
              style={styles.item}
              onPress={() =>
                setSelectedAccent(accentName as keyof typeof allAccents)
              }
            >
              <View
                style={styles.box(accentcolor, accentName === selectedAccent)}
              />
              <ThemedText>{accentName}</ThemedText>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          label="Save"
          onPress={() => router.back()}
          accent={selectedAccent}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
  },
  scrollview: {
    flex: 1,
    gap: theme.gap(2),
    paddingTop: theme.gap(2),
    paddingHorizontal: theme.gap(2),
  },
  row: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: theme.gap(2),
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.gap(2),
    paddingVertical: theme.gap(2),
    width: "100%",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.dimmed,
  },
  buttonContainer: {
    marginBottom: rt.insets.bottom,
    paddingHorizontal: theme.gap(2),
  },
  box: (accentColor: string, isSelected: boolean) => ({
    height: 40,
    width: 40,
    backgroundColor: accentColor,
    borderRadius: 10,
    borderWidth: isSelected ? 2 : 0,
    borderColor: theme.colors.tint,
  }),
}));
