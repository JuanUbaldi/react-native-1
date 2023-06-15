import React from "react";
import { View } from "react-native";
import RepositoriesList from "./RepositoriesList.jsx";
import AppBar from "./AppBar";
import { Switch } from "react-native-web";
import { Route } from "react-router-native";
import LogInPage from "../pages/LogInPage.jsx";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoriesList />
        </Route>

        <Route path="/singIn">
          <LogInPage />
        </Route>
      </Switch>
    </View>
  );
};

export default Main;
