import { SongTite } from "@/components/SongTitle";
import { ThemedText } from "@/components/ThemedText";
import { playlist } from "@/mocks";
import { router } from "expo-router";
import { ScrollView, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export default function PlaylistHome() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.contentContanier}>
        <View style={styles.header}>
          <ThemedText type="title">Playlist</ThemedText>
        </View>

        {playlist.map((song) => (
          <SongTite
            song={song}
            onPress={() => router.push(`/(tabs)/player/${song.id}`)}
            key={song.id}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    marginTop: rt.insets.top + theme.gap(3),
    backgroundColor: theme.colors.background,
  },
  contentContanier: {
    gap: theme.gap(1),
    paddingHorizontal: theme.gap(2),
  },
  header: {
    paddingBottom: theme.gap(2),
  },
}));
