import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router";
export const Item = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card key={product.id} style={{ width: "18rem" }}>
      <Card.Img
        style={{ height: "100px" }}
        variant="top"
        src={product.Avatar}
      />
      <Card.Body>
        <Card.Title>{product.product}</Card.Title>
        <Card.Text>{product.marca}.</Card.Text>
        <Button
          variant="primary"
          onClick={() => navigate(`/item/${product.id}`)}
        >
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
};
