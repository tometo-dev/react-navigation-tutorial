import React, { useContext } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AppParamList } from "./AppParamList"
import { Center } from "./Center"
import { Text, Button } from "react-native"
import { AuthContext } from "./AuthProvider"
import { AntDesign, EvilIcons } from "@expo/vector-icons"
import { HomeStack } from "./HomeStack"

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>()

const Search = () => {
  return (
    <Center>
      <Text>Search</Text>
    </Center>
  )
}

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return <AntDesign name={"home"} size={size} color={color} />
          } else if (route.name === "Search") {
            return <EvilIcons name={"search"} size={size} color={color} />
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Search" component={Search} />
    </Tabs.Navigator>
  )
}
