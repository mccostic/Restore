import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Divider, FlexboxGrid, Grid, Loader, Panel, Row } from "rsuite";
import { Product } from "../../app/models/product";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5198/api/Products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);
  if (loading)
    return (
      <Panel>
        <Loader backdrop content="loading..." vertical />
      </Panel>
    );

  if (!product)
    return (
      <Panel>
        <h3>Product not found</h3>
      </Panel>
    );
  return (
    <Grid fluid>
      <Row className="show-grid">
        <Col xs={12} sm={12} md={12}>
          <img
            src={product.pictureUrl}
            alt={product.name}
            style={{ width: "80%" }}
          />
        </Col>
        <Col xs={12} sm={12} md={12}>
          <Row>
            <Row className="show-grid">
              <h3>{product.name}</h3>
              <Divider />

              <h4 style={{ color: "blue" }}>
                ${(product.price / 100).toFixed(2)}
              </h4>
              <br></br>

              <Col xs={12} sm={12} md={12} lg={12}>
                <h5>Name</h5>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12}>
                <h5>{product.name}</h5>
              </Col>
            </Row>
            <Divider />

            <Row className="show-grid">
              <Col xs={12} sm={12} md={12} lg={12}>
                <h5>Description</h5>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12}>
                <h5>{product.description}</h5>
              </Col>
            </Row>
            <Divider />

            <Row className="show-grid">
              <Col xs={12} sm={12} md={12} lg={12}>
                <h5>Type</h5>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12}>
                <h5>{product.type}</h5>
              </Col>
            </Row>
            <Divider />

            <Row className="show-grid">
              <Col xs={12} sm={12} md={12} lg={12}>
                <h5>Brand</h5>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12}>
                <h5>{product.brand}</h5>
              </Col>
            </Row>
            <Divider />

            <Row className="show-grid">
              <Col xs={12} sm={12} md={12} lg={12}>
                <h5>Quantity in stock</h5>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12}>
                <h5>{product.quantityInStock}</h5>
              </Col>
            </Row>
            <Divider />
          </Row>
        </Col>
      </Row>
    </Grid>
  );
}
