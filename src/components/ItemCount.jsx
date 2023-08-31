import { useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";


const stock = 6;
export const ItemCount = () =>{
const [count, setCount] = useState(0);
    const handleIncreaseCount = () => {
       if (stock > count) {
        setCount((Prev) => Prev +1);
    }
}
    const handleDecreaseCount = () => {
        if (count > 0){
            setCount((Prev) => Prev -1);
        }
      
    };
    const onAdd = () =>{
    alert(count);} 
    
    return (
     <div>
        
        <span onClick={handleDecreaseCount}>-</span>
        <span>{count}</span>
        <span onClick={handleIncreaseCount}>+</span>
        <button onClick={onAdd}> agregar al carrito</button>

    </div>
);

}

   
