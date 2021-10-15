import Head from 'next/head'
import { useEffect } from 'react';

declare const window: typeof globalThis & {
    kakao: any;
}

export default function KakaoMapPage (){

    useEffect (() => {
        const container = document.getElementById('map');
        const options = { 
	        center: new window.kakao.maps.LatLng(33.450701, 126.570667), 
	        level: 3 
        };
        const map = new window.kakao.maps.Map(container, options);
        console.log(map)
    }, [])
    return (
        <>
            <Head>
            <script 
                type="text/javascript" 
                src="//dapi.kakao.com/v2/maps/sdk.js?appkey=5dba63b28cbbcc0a01d2debe9103bd08">

            </script>
            </Head>
            <div id="map" style={{width:"500px", height:"400px"}}></div>
        </>
    );
}