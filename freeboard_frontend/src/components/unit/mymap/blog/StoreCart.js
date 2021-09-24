import React, {useState} from 'react';
import cartService from "./cartService";

const style={
    listStyle:"none",
    backgroundColor:"lightblue"
}
const StoreCart = () => {
    
    const [flag, setFlag] = useState(false)
    
    cartService.setFn( () => { setFlag(!flag) }) 

   
    const storeItems = cartService.getAll()

    console.log("-------------------------")
    console.log(storeItems)
    console.log("=========================")

  
    const list = storeItems.map( (store,idx) => 
         <li key={idx}>{store.name}
            <button onClick={() => cartService.remove(store) }>
               DEL
           </button></li>)

    return (
        <div style={style}>
            {list} 
        </div>
    );
};

export default StoreCart;
