import Container from 'react-bootstrap/Container'
export const ItemsListContainer = (props) =>{
    return <Container className="mt-4">
        <h1>{props.greetings}</h1>
        </Container>
}