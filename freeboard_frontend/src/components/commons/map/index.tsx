import { useEffect, useState } from 'react';
import styled from "@emotion/styled"

const Wrapper = styled.div`
    width: 996px;
    /* background-color: yellow; */
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    
    margin-top: 5px;
    
`

const MapLeft = styled.div`
    width: 384px;
    height: 292px;
    /* background-color: green; */
    display:flex;
    flex-direction:column;
`
const Label = styled.div`
    padding-bottom: 16px;
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
    
`
const Map = styled.div`
    width: 384px;
    height: 252px;
    /* background-color: red; */
    margin-bottom: 5px;
`
const MapRight = styled.div`
    width: 588px;
    height: 292px;
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
`

const GPS = styled.div`
    width: 272px;
    height: 92px;
    /* background-color: red; */
    display:flex;
    flex-direction:column;
`
const Location = styled.div`
    width: 272px;
    height: 52px;
    /* background-color: green; */
    display:flex;
    flex-direction: row;
    justify-content: space-between;
`
const Longitudela = styled.input`
    width: 108px;
    height: 52px;
    /* background-color: gold; */
`
const LongitudeImg = styled.img`
    width: 14px;
    height: 20px;
    margin-top: 10px;
`
const Longitudema = styled.input`
    width: 108px;
    height: 52px;
    /* background-color: gold; */
`

const Address = styled.div`
    width: 588px;
    height: 160px;
    /* background-color: purple; */
`

declare const window: typeof globalThis & {
    kakao: any;
}

export default function KakaoMapPage (){

    const [la, setLa] = useState()
    const [ma, setMa] = useState()
    useEffect (() => {
        
        const script = document.createElement("script")
        script.src =
            "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=5dba63b28cbbcc0a01d2debe9103bd08"
        document.head.appendChild(script);
        
        script.onload = () => {
            window.kakao.maps.load(function () {
                const container = document.getElementById('map');
                const options = { 
                    center: new window.kakao.maps.LatLng(37.471604590313966, 126.87306291344667), 
                    level: 3,
                };
                const map = new window.kakao.maps.Map(container, options);
                console.log(map);

                const marker = new window.kakao.maps.Marker({ 
                    // 지도 중심좌표에 마커를 생성합니다 
                    position: map.getCenter() 
                }); 
                // 지도에 마커를 표시합니다
                marker.setMap(map);
                
                // 지도에 클릭 이벤트를 등록합니다
                // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
                window.kakao.maps.event.addListener(map, 
                    'click', 
                    function(mouseEvent) {        
                    
                    // 클릭한 위도, 경도 정보를 가져옵니다 
                    const latlng = mouseEvent.latLng; 
                    
                    // 마커 위치를 클릭한 위치로 옮깁니다
                    marker.setPosition(latlng);
                    console.log(latlng)
                    setLa(latlng.La)
                    setMa(latlng.Ma)
    //                 var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
    // message += '경도는 ' + latlng.getLng() + ' 입니다';
    
    // var resultDiv = document.getElementById('clickLatlng'); 
    // resultDiv.innerHTML = message;
                    
                    
                });
            });
        };
    }, []);
    return (
        <Wrapper>
            <MapLeft>
                <Label>거래위치</Label>
                <Map id="map" />
            </MapLeft>
           
            <MapRight>
                <GPS>
                    <Label>GPS</Label>
                    <Location>
                        <Longitudela placeholder="위도" value={la}/>
                        <LongitudeImg src="/images/gps.png"/>
                        <Longitudema placeholder="경도" value={ma}/>
                    </Location>
                </GPS>
                <Address>

                </Address>
            </MapRight>
            {/* <Input style={{width:"100px"}} value={la} />

            <input value={ma} /> */}
        </Wrapper>
    );
}