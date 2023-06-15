import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../theme.js";

const styles = StyleSheet.create({
  text: {
    /*  color: theme.colors.textPrimary, */
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subHeading1: {
    fontSize: theme.fontSizes.subheading1,
  },
  subHeading2: {
    fontSize: theme.fontSizes.subheading2,
  },
  colorPrimary: {
    color: theme.colors.textPrimary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  textAlignCenter: {
    textAlign: "center",
  },
});

export default function StyledText({
  align,
  children,
  color,
  fontSize,
  fontWeight,
  style,
  restOfProps,
}) {
  const textStyles = [
    styles.text,
    align === "center" && styles.textAlignCenter,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontSize === "subHeading1" && styles.subHeading1,
    fontSize === "subHeading2" && styles.subHeading2,
    fontWeight === "bold" && styles.bold,
    style
  ];
  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
}
