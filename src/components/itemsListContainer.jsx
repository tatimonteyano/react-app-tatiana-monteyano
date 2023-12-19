import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import data from "../data/products.json";
import { ItemList } from "./ItemList";
import { useParams } from "react-router";
//import { ItemCount } from './ItemCount'
export const ItemsListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });
    promise
      .then((data) => {
        if (!id) {
          setProducts(data);
        } else {
          const filteredProducts = data.filter(
            (product) => product.producto === id
          );
          setProducts(filteredProducts);
        }
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) return <div>Cargando...</div>;

  return (
    <Container className="mt-4">
      <h1>{props.greetings}</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <ItemList products={products} />
      </div>
    </Container>
  );
};


