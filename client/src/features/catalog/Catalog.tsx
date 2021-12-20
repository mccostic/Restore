import { Product } from "../../app/models/product";
import { Button } from "rsuite";
import ProductList from "./ProductList";

interface Props {
  products: Product[];
  addProduct: () => void;
}

export default function Catalog({ products, addProduct }: Props) {
  return (
    <>
      <ProductList products={products} />
      {/* <Button onClick={addProduct}>Add product</Button> */}
    </>
  );
}
