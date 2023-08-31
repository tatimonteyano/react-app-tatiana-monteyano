import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export const  Item =  ({product}) => ( <Card key = {product.id}style={{ width: '18rem' }}>
<Card.Img style = {{height: "100px"}} variant="top" src={product.Avatar} />
<Card.Body>
   <Card.Title>{product.product}</Card.Title>
   <Card.Text>{product.marca}.</Card.Text>
   <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card>
);