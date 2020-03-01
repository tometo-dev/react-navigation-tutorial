import React from "react"
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack"
import { NavigationContainer, RouteProp } from "@react-navigation/native"
import { Text, Button } from "react-native"
import { Center } from "./Center"
import { AuthParamList, AuthNavProps } from "./AuthParamList"

interface RoutesProps {}

const Stack = createStackNavigator<AuthParamList>()

const Login = ({ navigation }: AuthNavProps<"Login">) => {
  return (
    <Center>
      <Text>Login Screen</Text>
      <Button
        title="register"
        onPress={() => {
          navigation.navigate("Register")
        }}
      />
    </Center>
  )
}

const Register = ({ navigation }: AuthNavProps<"Register">) => {
  return (
    <Center>
      <Text>Register Screen</Text>
      <Button
        title="login"
        onPress={() => {
          navigation.navigate("Login")
        }}
      />
    </Center>
  )
}

export const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: "Sign in",
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerTitle: "Sign up",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
