import * as React from "react";
import DrawerNavigator from "./navigation/drawerNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Feed from "./screens/feed";
import CreatePost from "./screens/createPost";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
