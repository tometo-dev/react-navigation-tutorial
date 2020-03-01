import React, { useContext } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AppParamList } from "./AppParamList"
import { Center } from "./Center"
import { Text, Button } from "react-native"
import { AuthContext } from "./AuthProvider"

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>()

const Home = () => {
  const { logout } = useContext(AuthContext)
  return (
    <Center>
      <Text>Home</Text>
      <Button title="logout" onPress={() => logout()} />
    </Center>
  )
}

const Search = () => {
  return (
    <Center>
      <Text>Search</Text>
    </Center>
  )
}

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Search" component={Search} />
    </Tabs.Navigator>
  )
}
