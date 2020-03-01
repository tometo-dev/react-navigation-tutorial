import React, { useContext, useRef, useState, useEffect } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { Center } from "./Center"
import { Text, TouchableOpacity, FlatList, Button } from "react-native"
import { AuthContext } from "./AuthProvider"
import faker from "faker"
import { HomeParamList, HomeStackNavProps } from "./HomeParamList"

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

const Product = ({ route, navigation }: HomeStackNavProps<"Product">) => {
  return (
    <Center>
      <Text>{route.params.name}</Text>
      <Button
        title="Edit This Product"
        onPress={() => {
          navigation.navigate("EditProduct", {
            name: route.params.name,
          })
        }}
      />
    </Center>
  )
}

function apiCall(x: any) {
  return x
}

const EditProduct = ({
  route,
  navigation,
}: HomeStackNavProps<"EditProduct">) => {
  const [formState] = useState()
  const submit = useRef(() => {})

  submit.current = () => {
    // api call
    apiCall(formState)
    navigation.goBack()
  }

  useEffect(() => {
    navigation.setParams({ submit })
  }, [])

  return (
    <Center>
      <Text>editing {route.params.name}...</Text>
    </Center>
  )
}

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  const { logout } = useContext(AuthContext)
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `Edit: ${route.params.name}`,
          headerRight: () => (
            <TouchableOpacity
              style={{ paddingRight: 5 }}
              onPress={() => {
                // submit the form
                route.params.submit?.current()
              }}
            >
              <Text
                style={{
                  color: "red",
                }}
              >
                Done
              </Text>
            </TouchableOpacity>
          ),
        })}
        name="EditProduct"
        component={EditProduct}
      />
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `Product: ${route.params.name}`,
        })}
        name="Product"
        component={Product}
      />
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
