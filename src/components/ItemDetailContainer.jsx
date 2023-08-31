import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import data from "../data/products.json"
import { ItemDetail } from './ItemDetail';
//import { ItemCount } from './ItemCount'
export const ItemsListContainer = (props) =>{
    const [products, setProducts] = useState ([]);
    useEffect(() => { 
        const promise = new Promise ((resolve, reject) => {
            setTimeout (() => resolve (data), 2000);
        });
        promise.then(data => setProducts (data));
    }, []);
    console.log(products);
    return (
       <Container className="mt-4">
  <h1>Detalle</h1>
<div style={{ display: "flex", flexWrap: "wrap" }}>
<ItemList products = { products}/>
</div>
<ItemDetail product={product}/>
     </Container>
     
);
};