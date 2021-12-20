import { Link } from "react-router-dom";
import {
  List,
  Avatar,
  FlexboxGrid,
  Col,
  Row,
  Panel,
  Button,
  ButtonGroup,
  Stack,
} from "rsuite";
import { Product } from "../../app/models/product";

const styleCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "60px",
};

//   const slimText = {
//     fontSize: '0.666em',
//     color: '#97969B',
//     fontWeight: 'lighter',
//     paddingBottom: 5,
//   };

const titleStyle = {
  paddingBottom: 5,
  fontWeight: 500,
};

//   const dataStyle = {
//     fontSize: '1.2em',
//     fontWeight: 500,
//   };
interface Props {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: Props) {
  return (
    <Panel shaded style={{ height: "310px" }}>
      <Stack direction="row">
        <Avatar circle>{product.name.charAt(0).toUpperCase()}</Avatar>{" "}
        {
          <p
            style={{
              overflow: "hidden",
              maxWidth: "70ch",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              marginLeft: "5px",
            }}
          >
            {product.name}
          </p>
        }
      </Stack>

      <div style={{ textAlign: "center" }}>
        <img src={product.pictureUrl} height="120" />
      </div>
      <Panel>
        <h5>${(product.price / 100).toFixed(2)}</h5>
        <small>
          {product.type}/{product.brand}
        </small>
      </Panel>
      <ButtonGroup>
        <Button appearance="link">
          <Link to="/">Add to cart</Link>
        </Button>
        <Button appearance="link">
          <Link to={`/catalog/${product.id}`}>View</Link>
        </Button>
      </ButtonGroup>
    </Panel>
  );
}
