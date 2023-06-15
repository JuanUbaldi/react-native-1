import React, { useState, useEffect } from "react";
import { Text, FlatList, StyleSheet } from "react-native";

import RepositoriesItem from "./RepositoriesItem";

const useRepositories = () => {
  const [repositories, setRepositories] = useState(null);

  const fetchRepositories = async () => {
    const response = await fetch("http://localhost:5000/api/repositories");
    const json = await response.json();
    setRepositories(json);
  };
  useEffect(() => {
    fetchRepositories;
  }, []);

  const repositoriesNode = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];
  return { repositories: repositoriesNode };
};

const RepositoriesList = () => {
  return (
    <FlatList
      data={repositoriesNode}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => <RepositoriesItem {...repo} />}
    />
  );
};
export default RepositoriesList;
