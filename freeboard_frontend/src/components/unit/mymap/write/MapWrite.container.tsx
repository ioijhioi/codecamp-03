// import MapWriteUI from './MapWrite.presenter';
import { useState, useEffect } from 'react'
import axios from 'axios'
import MapWriteUI from './MapWrite.presenter'


export default function MapWrite(){
    const [ bearImage, setBearImage] = useState("");

    useEffect (()=> {
        async function getImage(){
            const image = await axios.get("https://dog.ceo/api/breeds/image/random")
            setBearImage (image.data.message)
        }  
        getImage()
    }, [])
    
    return <MapWriteUI bearImage={bearImage} />;
}