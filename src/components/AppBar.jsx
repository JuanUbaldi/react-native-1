import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import StyledText from "./styledText.jsx";
import theme from "../theme.js";
import Constants from "expo-constants";

import { Link, useLocation } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.AppBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    flexDirection: "row",
  },
  text: {
    color: theme.AppBar.textPrimary,
  },
  scroll: {
    paddingBottom: 15,
  },
});

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation();
  const active = pathname === to;
  const textStyles = [styles.text, active && styles.active];
  return (
    <Link to={to} component={TouchableWithoutFeedback}>
      <StyledText fontWeight="bold" style={textStyles}>
        {children}
      </StyledText>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab to="/">Repositories</AppBarTab>
        <AppBarTab to="/signIn">Sign in</AppBarTab>
        <AppBarTab to="/register">register</AppBarTab>
        <AppBarTab to="/twitch">twitch</AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;
