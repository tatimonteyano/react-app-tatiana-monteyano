
import ".//App.css"
import { ItemsListContainer } from './components/itemsListContainer';
import { NavBar } from './components/NavBar'
function BasicExample() {
  return ( 
  <>
  <NavBar/>
  <ItemsListContainer greeting ="hola"/>
  </>
  );
}

export default BasicExample;

