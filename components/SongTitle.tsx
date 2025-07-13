import { Song } from "@/types";
import { Image, Pressable, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { ThemedText } from "./ThemedText";

type SongProps = {
  song: Song;
  onPress(): void;
};

export const SongTite: React.FunctionComponent<SongProps> = ({
  song,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress} style={style.container}>
      <Image source={{ uri: song.imageUrl }} style={style.image} />
      <View style={style.textContainer}>
        <ThemedText bold>{song.title}</ThemedText>
        <ThemedText dimmed>{song.genre}</ThemedText>
      </View>
      <ThemedText>{song.duration}</ThemedText>
    </Pressable>
  );
};

const style = StyleSheet.create((theme) => ({
  container: {
    paddingVertical: theme.gap(1),
    flexDirection: "row",
    gap: theme.gap(2),
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: theme.gap(2),
  },
  textContainer: {
    flex: 1,
  },
}));
