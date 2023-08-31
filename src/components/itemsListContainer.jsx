import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import data from "../data/products.json"
console.log(data)

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
    return <Container className="mt-4">
        <h1>{props.greetings}</h1>
        
        </Container>
}
