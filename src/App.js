import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css"
import { ItemsListContainer } from "./components/ItemsListContainer"
import {ItemDetailContainer} from ".components/ItemDetailContainer"
import { NavBar } from './components/NavBar'
function BasicExample() {
  return ( 
  <BrowserRouter>
  <NavBar/>
  <Routes>
   <Route path="/" element ={<ItemsListContainer greetings= "hi!"/>}/>
   <Route path="/category/:id" element ={<ItemsListContainer greetings= "hi!"/>}/>
   <Route path="/item:id" element ={<ItemDetailContainer/>}/>
   </Routes>
  </BrowserRouter>
  );
}

export default BasicExample;

