export type ProductParamList = {
  Product: {
    name: String
  }
  EditProduct: {
    name: String
    submit?: React.MutableRefObject<() => void>
  }
}
