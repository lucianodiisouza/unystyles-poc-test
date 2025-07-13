import { Button } from "@/components/Button";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { playlist } from "@/mocks";
import { router, useLocalSearchParams } from "expo-router";
import { Image, ScrollView } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export default function PlayerScreen() {
  const { songId } = useLocalSearchParams();

  const song = playlist.find((song) => song.id === Number(songId));
  if (!songId || !song) {
    return (
      <ThemedView style={[styles.centerContainer, styles.container]}>
        <ThemedText type="title">Looking for inspiration?</ThemedText>
        <ThemedText>Pick a song from the playlist</ThemedText>
        <Button
          label="Pick a song"
          accent="banana"
          onPress={() => router.replace("/")}
        />
      </ThemedView>
    );
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: song.imageUrl }} style={styles.image} />
      <ThemedText type="title">{song.title}</ThemedText>
      <ThemedText type="subtitle" dimmed>
        {song.genre}
      </ThemedText>
      {/* <PlayerControls /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    gap: theme.gap(2),
    alignItems: "center",
    marginTop: rt.insets.top + theme.gap(3),
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: theme.gap(2),
  },
}));
