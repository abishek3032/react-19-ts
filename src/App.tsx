import Products from "./components/Products";
import { ProductType } from "./types/ProductType";
function App() {
  const products: ProductType[] = [
    {
      name: "Apple",
      id: "0001",
      price: "$12",
      isActive: true
    },
    {
      name: "Orange",
      id: "0002",
      price: "$10",
      isActive: false
    },
  ]

  return (
    <>
      <Products products={products} />
    </>
  );
}

export default App;
