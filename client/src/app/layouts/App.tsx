import { useEffect, useState } from "react";
import { Container, Content } from "rsuite";
import AboutPage from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
import { Product } from "../models/product";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  function addProduct() {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 101,
        name: `product${prevState.length + 1}`,
        price: 100.0 * (prevState.length + 1),
        brand: "some brand",
        description: "some description",
        pictureUrl: "http://picsum.photos/200",
      },
    ]);
  }
  useEffect(() => {
    fetch("http://localhost:5198/api/Products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log("Error fetching products", error));
  }, []);
  return (
    <>
      <Container>
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/catalog"
              element={<Catalog products={products} addProduct={addProduct} />}
            />
            <Route path={`catalog/:id`} element={<ProductDetails />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          {/* <Catalog products={products} addProduct={addProduct} /> */}
        </Content>
      </Container>
    </>
  );
}

export default App;
