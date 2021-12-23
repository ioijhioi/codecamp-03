import {
    Wrapper,
    Header,
    Body,
    Map,
    // LocationList,
} from "./MapWrite.styles"



export default function MapWriteUI(props){
    

    return(
        <Wrapper>
            <Header>나만의 지도</Header>
            <Body>
                <Map src={props.bearImage} >
                    
                </Map>
                {/* <LocationList>새로고침</LocationList> */}
            </Body>
        </Wrapper>

    )

}