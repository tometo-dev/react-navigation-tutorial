import { ProductParamList } from "./ProductParamList"
import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

export type SearchParamList = {
  Search: undefined
} & ProductParamList

export type SearchStackNavProps<T extends keyof SearchParamList> = {
  navigation: StackNavigationProp<SearchParamList, T>
  route: RouteProp<SearchParamList, T>
}