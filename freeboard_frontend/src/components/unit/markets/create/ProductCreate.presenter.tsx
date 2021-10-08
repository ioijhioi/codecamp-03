import {
    Wrapper,
    Title,
    ItemWrapper,
    Label,
    Tool,
    ToolBox,
    Content,
    MapWrapper,
    MapBox,
    Map,
    GpsAddress,
    // GPS,
    // // InputGPS,
    // // LAT,
    // // LNG,
    // Adress,
    PhotoWrapper,
    MainPhotoWrapper,
    RadioButton,
    RadioLabel,
    ButtonWrapper,
    SubmitButton,
    
} from './ProductCreate.styles'
import Box from '../../../commons/inputs/CreateUseIteminput01/CreateUseIteminput01'

export default function ProductCreateUI (props) {

    return (
        <Wrapper>
            <Title>상품 등록하기</Title>
            <ItemWrapper>   
                <Label>상품명</Label>
                <Box 
                    type="text"  
                    name="name"
                    placeholder="상품명을 작성해주세요" 
                    register={props.register("myProduct")}/>
            </ItemWrapper>
            <ItemWrapper>
                <Label>한줄요약</Label>
                <Box
                    type="text"
                    placeholder="한줄 요약 해주세요"
                />
            </ItemWrapper>
            <ItemWrapper>
                <Label>상품 설명</Label>
                <Tool>
                    <ToolBox></ToolBox>
                    <Content 
                        name="content" 
                        placeholder="상품을 설명해주세요" 
                    />
                </Tool>
            </ItemWrapper>
            <ItemWrapper>
                <Label>판매 가격 </Label>
                <Box 
                    type="text"  
                    name="name"
                    placeholder="판매 가격을 입력해주세요"
                    register={props.register("myPrice")}/>
            </ItemWrapper>
            <ItemWrapper>
                <Label>태그 입력 </Label>
                <Box 
                    type="text"  
                    name="tag"
                    placeholder="#태그 #태그 #태그"
                    register={props.register("myTag")}/>
            </ItemWrapper>
            <MapWrapper>
                <MapBox>
                    <Label>거래위치 </Label>
                    <Map>지도화면입니다.</Map>
                </MapBox>
                <GpsAddress>
                    {/* <GPS> */}
                        <Label>GPS</Label>
                        {/* <InputGPS>
                            <LAT></LAT>
                            <div></div>
                            <LNG></LNG>
                        </InputGPS> */}
                    {/* </GPS> */}
                    {/* <Adress> */}
                        <Label>주소</Label>
                        {/* <InputAddress>
                        </InputAddress>
                        < */}
                    {/* </Adress> */}
                </GpsAddress>
            </MapWrapper>
            <PhotoWrapper>
                <Label>사진 첨부</Label>
                
            </PhotoWrapper>
            <MainPhotoWrapper>
                <Label>메인 사진 설정</Label>
                <RadioButton type="radio" id="image" name="radio-button1"/>
                <RadioLabel>사진1</RadioLabel>
                <RadioButton type="radio" id="image" name="radio-button2"/>
                <RadioLabel>사진2</RadioLabel>
            </MainPhotoWrapper>
            <ButtonWrapper>
                        <SubmitButton>

                        </SubmitButton>
            </ButtonWrapper>
        </Wrapper>
    )
}