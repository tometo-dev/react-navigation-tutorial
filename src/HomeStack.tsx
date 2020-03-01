import React, { useContext, useRef, useState, useEffect } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { Center } from "./Center"
import { Text, TouchableOpacity, FlatList, Button } from "react-native"
import { AuthContext } from "./AuthProvider"
import faker from "faker"
import { HomeParamList, HomeStackNavProps } from "./HomeParamList"
import { addProductRoutes } from "./addProductRoutes"

interface HomeStackProps {}

const Stack = createStackNavigator<HomeParamList>()

const Feed = ({ navigation }: HomeStackNavProps<"Feed">) => {
  return (
    <Center>
      <FlatList
        style={{ width: "100%" }}
        data={Array.from(Array(50), () => faker.commerce.product())}
        keyExtractor={(product, idx) => product + idx}
        renderItem={({ item }) => {
          return (
            <Button
              title={item}
              onPress={() => {
                navigation.navigate("Product", {
                  name: item,
                })
              }}
            />
          )
        }}
      />
    </Center>
  )
}

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  const { logout } = useContext(AuthContext)
  return (
    <Stack.Navigator initialRouteName="Feed">
      {addProductRoutes(Stack)}
      <Stack.Screen
        name="Feed"
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity
                style={{ paddingRight: 5 }}
                onPress={() => {
                  logout()
                }}
              >
                <Text>Logout</Text>
              </TouchableOpacity>
            )
          },
        }}
        component={Feed}
      />
    </Stack.Navigator>
  )
}
