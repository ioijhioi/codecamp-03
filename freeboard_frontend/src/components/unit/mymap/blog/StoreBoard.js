import React from 'react';
import StoreList from "./StoreList";
import StoreCart from "./StoreCart";
import StoreMap from "./StoreMap";

const kakao = window.kakao

const StoreBoard = () => {

    console.log(kakao)
   
   
    return (
        <div>
            <h1>StoreBoard</h1>
            <StoreMap></StoreMap>
            <StoreList></StoreList>
            <hr/>
            <StoreCart></StoreCart>
        </div>
    );
};

export default StoreBoard;
