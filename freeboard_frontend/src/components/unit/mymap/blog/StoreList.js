import React, {useState} from 'react';
import storeService from "./storeService";
import cartService from "./cartService";

const style={
    listStyle:"none" 
}
const StoreList = () => {
   
    const [stores, setStores] = useState(storeService.getStores())
    


    const list = stores.map( (store,idx) =>
        <li key={idx} onClick={() => cartService.append(store)}>{store.name}</li>  )


    const searchByCat = (str) => {
        const filteredStores = storeService.getByCat(str)
        setStores(filteredStores)
    }

    return (
        <div>
            <div>
                <b onClick={()=>{searchByCat()}}>ALL / </b>
                <b onClick={()=>{searchByCat('한식')}}>한식 / </b>
                <b onClick={()=>{searchByCat('뷔페')}}>뷔페 / </b>
                <b onClick={()=>{searchByCat('디저트')}}>디저트</b>
            </div>
            <ul style={style}>
                {list}
            </ul>
        </div>
    );
};

export default StoreList;
