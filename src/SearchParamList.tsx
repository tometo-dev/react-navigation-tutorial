export type SearchParamList = {
  Search: undefined
  Product: {
    name: String
  }
  EditProduct: {
    name: String
    submit?: React.MutableRefObject<() => void>
  }
}
