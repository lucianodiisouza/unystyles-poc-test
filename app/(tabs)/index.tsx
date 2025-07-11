import {StyleSheet} from 'react-native-unistyles'
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";


export default function HomeScreen() {
    return (
        <ThemedView style={styles.container}>
            <ThemedText>Home Screen</ThemedText>
        </ThemedView>
    );
}

const styles = StyleSheet.create(theme => ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
}));
