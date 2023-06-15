import React from "react";
import StyledText from "./styledText";
import { View } from "react-native";


const parseThousand = (value) => {
    return value > 1000 ? `${Math.round(value / 100) / 10}k` : String(value);
  }
  
  const RepositoryStats = (props) => {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View>
          <StyledText align="center" fontWeight="bold">
            Languague:
          </StyledText>
          <StyledText align="center"> {props.languague}</StyledText>
        </View>
        <View>
          <StyledText align="center" fontWeight="bold">
            Forks:
          </StyledText>
          <StyledText align="center">
            {parseThousand(props.forkCounts)}
          </StyledText>
        </View>
        <View>
          <StyledText align="center" fontWeight="bold">
            Views:
          </StyledText>
          <StyledText align="center">{props.reviewCounts}</StyledText>
        </View>
      </View>
    );
  };

  export default RepositoryStats