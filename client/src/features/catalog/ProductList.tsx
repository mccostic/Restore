import { List, Avatar, FlexboxGrid, Stack, Row, Col, Grid } from "rsuite";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}
export default function ProductList({ products }: Props) {
  return (
    <>
      <Grid
        fluid
        style={{ marginLeft: "100px", marginRight: "100px", marginTop: "20px" }}
      >
        <Row gutter={16}>
          {products.map((product, index) => (
            <Col xs={6} sm={6} key={product.id}>
              <ProductCard product={product} index={index} />
              <br />
            </Col>
          ))}
        </Row>
      </Grid>
    </>
  );
}
