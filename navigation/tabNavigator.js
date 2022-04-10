import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feed from "../screens/feed";
import CreatePost from "../screens/createPost";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Feed") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === "CreatePost") {
            iconName = focused ? "create" : "create-outline";
          }
          return <Ionicons name={iconName} size={RFValue(25)} color={color} />;
        },
      })}
      tabBarOptions={{
        activetintColor: "tomato",
        inactivetintColor: "gray",
      }}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="CreatePost" component={CreatePost} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator