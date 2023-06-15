import { Image, View, Text, StyleSheet, Platform} from "react-native";
import React from "react";
import StyledText from "./styledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 5,
    paddinBottom: 5,
    
  },
  strong: {
    color: "blue",
    fontWeight: "bold",
    paddinBottom: 5,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 4,
    overflow: "hidden",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
    overflow: "hidden",
  },
});

const RepositoryItemHeader = (props) => {
  return (
    <View style={{ flexDirection: "row", paddingBottom: 2 }} key={props.id}>
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={styles.image} />
      </View>
      <View style={{ flex: 1 }}>
        <StyledText fontWeight="bold" style={styles.language}>
          {props.fullName}
        </StyledText>
        <StyledText fontSize="text" fontWeight="text" color="secondary">
          description:
        </StyledText>
        <StyledText fontSize="text" fontWeight="text" color="text">
          {props.description}
        </StyledText>

        <StyledText fontSize="text" fontWeight="text" color="secondary">
          id:
        </StyledText>
        <StyledText fontSize="text" fontWeight="text" color="text">
          {props.id}
        </StyledText>
      </View>
    </View>
  );
};

const RepositoriesItem = (props) => {
  return (
    <View>
      <RepositoryItemHeader {...props} />
      <RepositoryStats {...props} />
    </View>
  );
};
export default RepositoriesItem;
