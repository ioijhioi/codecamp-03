import React, {useEffect} from 'react';
import storeService from "./storeService";

const style = {
    width: '100%',
    height: '50vh',
    backgroundColor:'pink'
}


const kakao = window.kakao

const StoreMap = () => {

    
    useEffect(() => {
        console.log("StoreMap useEffect...")
        const mapContainer = document.getElementById('map'), 
            mapOption = {
                center: new kakao.maps.LatLng(37.57040150611514, 126.98529248099322),
                level: 3 
            };

       
        const map = new kakao.maps.Map(mapContainer, mapOption);
        showMarkers(map)
    }, [])

   
    const showMarkers = (map) => {
      
        const stores = storeService.getStores()
    
        const positions = stores.map( store => (
           {title:store.name, latlng:new kakao.maps.LatLng(store.lat,store.lng) }) )

      
        var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

        for (var i = 0; i < positions.length; i ++) {

           
            const marker = new kakao.maps.Marker({
                map: map, 
                position: positions[i].latlng, 
                title : positions[i].title,
            });
            marker.orgin = stores[i]

           
            kakao.maps.event.addListener(marker, 'click', function() {
                console.log(marker)
                console.log(marker.orgin)
            });
        }
    }

    return (
        <div>
            <div id='map' style={style}></div>
        </div>
    );
};

export default StoreMap;
