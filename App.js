import { createAppContainer } from "react-navigation";
import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/indexScreen";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Notas",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return <App />;
};
