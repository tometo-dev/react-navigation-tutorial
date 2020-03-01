import { TouchableOpacity, Text, Button } from "react-native"
import { HomeStackNavProps, HomeParamList } from "./HomeParamList"
import { Center } from "./Center"
import React, { useState, useRef, useEffect } from "react"
import { TypedNavigator, StackNavigationState } from "@react-navigation/native"
import { SearchParamList, SearchStackNavProps } from "./SearchParamList"

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

export const addProductRoutes = (
  Stack: TypedNavigator<
    HomeParamList | SearchParamList,
    StackNavigationState,
    any,
    any,
    any
  >,
) => {
  return (
    <>
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
    </>
  )
}
