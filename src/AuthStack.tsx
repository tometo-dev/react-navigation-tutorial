import React, { useContext } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { AuthParamList, AuthNavProps } from "./AuthParamList"
import { AuthContext } from "./AuthProvider"
import { Center } from "./Center"
import { Text, Button } from "react-native"

interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamList>()

const Login = ({ navigation }: AuthNavProps<"Login">) => {
  const { login } = useContext(AuthContext)
  return (
    <Center>
      <Text>Login Screen</Text>
      <Button
        title="log me in"
        onPress={() => {
          login()
        }}
      />
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
export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{ header: () => null }}
      initialRouteName="Login"
    >
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
  )
}
