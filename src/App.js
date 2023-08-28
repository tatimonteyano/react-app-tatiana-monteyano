
import "./App.css"
import { ItemsListContainer } from "./components/ItemsListContainer";
import { NavBar } from './components/NavBar'
function BasicExample() {
  return ( 
  <>
  <NavBar/>
  <ItemsListContainer greetings ="hola, lo logré!"/>
  </>
  );
}

export default BasicExample;

