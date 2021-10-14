import SubmitButton from "../../../commons/buttons/submitButton/submitButton"
import {
    Wrapper,
    Title,
    ItemWrapper,
    Label,
    ReactQuillBox,
    // Tool,
    // ToolBox,
    // Content,
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
    
    
} from './ProductCreate.styles'
import Box from '../../../commons/inputs/CreateUseIteminput01/CreateUseIteminput01'
import "react-quill/dist/quill.snow.css"


export default function ProductCreateUI (props) {

    return (
        <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
            <Wrapper>
                <Title>상품 등록하기</Title>
                <ItemWrapper>   
                    <Label>상품명</Label>
                    <Box 
                        type="text"  
                        placeholder="상품명을 작성해주세요" 
                        register={props.register("name")}
                    />
                </ItemWrapper>
                <ItemWrapper>
                    <Label>한줄요약</Label>
                    <Box
                        type="text"
                        placeholder="한줄 요약 해주세요"
                        register={props.register("remarks")}
                    />
                </ItemWrapper>
                <ItemWrapper>
                    <Label>상품 설명</Label>
                    <ReactQuillBox onChange={props.onChangeMyEditor}/>
                        
                    
                </ItemWrapper>
                <ItemWrapper>
                    <Label>판매 가격 </Label>
                    <Box 
                        type="text"  
                        placeholder="판매 가격을 입력해주세요"
                        register={props.register("price")}
                    />
                </ItemWrapper>
                <ItemWrapper>
                    <Label>태그 입력 </Label>
                    <Box 
                        type="text"  
                        placeholder="#태그 #태그 #태그"
                        register={props.register("tags")}
                    />
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
                    <SubmitButton type="submit" name="등록하기" isValid={props.formState.isValid}/>

                </ButtonWrapper>
            </Wrapper>
        </form>
    )
}