// import {
//     Wrapper,
//     Header,
//     Body,
//     Map,
//     LocationList,
// } from "./MapWrite.styles"
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function MapWriteUI(){
//     const [map, setMap] = useState("");
    
//     useEffect (() => {
//         async function getMap() {
//             const map = await axios.get("//dapi.kakao.com/v2/maps/sdk.js?appkey=9e3107e9d5f071103d62737f6d316aeb")
//             setMap (map.data.message)
//         }
//         getMap()
//     }, [])

//     return(
//         <Wrapper>
//             <Header>나만의 지도</Header>
//             <Body>
//                 <Map>
//                     <div id="map" ="width:500px;height:400px;"/>
//                     <script type = "text/javascript" src={map}/>
//                 </Map>
//                 <LocationList></LocationList>
//             </Body>
//         </Wrapper>

//     )

// }