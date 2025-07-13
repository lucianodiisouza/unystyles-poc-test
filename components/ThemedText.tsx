import { Text, type TextProps } from "react-native";
import { StyleSheet, type UnistylesVariants } from "react-native-unistyles";

export type ThemedTextProps = TextProps &
  UnistylesVariants<typeof styles> & {
    lightColor?: string;
    darkColor?: string;
  };

export function ThemedText({
  style,
  type,
  bold,
  dimmed,
  ...rest
}: ThemedTextProps) {
  styles.useVariants({ type, bold, dimmed });

  return <Text style={[styles.textType, styles.textColor, style]} {...rest} />;
}

const styles = StyleSheet.create((theme) => ({
  textColor: {
    color: theme.colors.typography,
  },
  textType: {
    variants: {
      type: {
        default: {
          fontSize: 16,
          lineHeight: 24,
        },
        defaultSemiBold: {
          fontSize: 16,
          lineHeight: 24,
          fontWeight: "600",
        },
        title: {
          fontSize: 32,
          fontWeight: "bold",
          lineHeight: 32,
        },
        subtitle: {
          fontSize: 20,
          fontWeight: "bold",
        },
        link: {
          lineHeight: 30,
          fontSize: 16,
          color: theme.colors.link,
        },
      },
      bold: {
        true: {
          fontWeight: "bold",
        },
      },
      dimmed: {
        true: {
          color: theme.colors.tint,
        },
      },
    },
  },
}));
