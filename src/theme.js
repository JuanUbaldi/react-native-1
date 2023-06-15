import { Platform } from "react-native";

const theme = {
  AppBar: {
    primary: "grey",
    textPrimary: "#fff",
    textSecondary: "#999",
  },
  colors: {
    textPrimary: "violet",
    textSecondary: "red",
    primary: "blue",
    white: "white",
  },
  fontSizes: {
    body: 12,
    subheading1: 16,
    subheading2: 14,
  },
  fonts: {
    main: Platform.select({
      ios: "arial",
      android: "roboto",
      default: "",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
