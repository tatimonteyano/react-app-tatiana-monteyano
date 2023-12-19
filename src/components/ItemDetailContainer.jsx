import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import data from "../data/products.json";
import { ItemList } from "./ItemList";
//import { ItemCount } from './ItemCount'
export const ItemDetailContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    promise
      .then((data) => {
        const productById = data.filter((product) => product.id === Number(id));

        setProducts(productById);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) return <div>Cargando...</div>;

  return (
    <Container className="mt-4">
      <h1>Detalle</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <ItemList products={products} />
      </div>
      <ItemDetail product={products} />
    </Container>
  );
};
