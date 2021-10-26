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
    // MapBox,
    // Map,
    // GpsAddress,
    // GPS,
    // // InputGPS,
    // // LAT,
    // // LNG,
    // Adress,
    PhotoWrapper,
    PhotoHeader,
    MainPhotoWrapper,
    RadioButton,
    RadioLabel,
    ButtonWrapper,
    
    
} from './ProductCreate.styles'
import Box from '../../../commons/inputs/CreateUseIteminput01/CreateUseIteminput01'
import "react-quill/dist/quill.snow.css"
import KakaoMapPage from '../../../commons/map/index'
import Upload02 from '../../../commons/uploads/02-market/Upload02.container'


export default function ProductCreateUI (props) {

    return (
        <form onSubmit={props.handleSubmit(
            props.isEdit ? props.onClickeEdit : props.onClickSubmit)}>
            <Wrapper>
                <Title>{props.isEdit ? "상품 수정하기" : "상품 등록하기"}</Title>
                <ItemWrapper>   
                    <Label>상품명</Label>
                    <Box 
                        type="text"  
                        placeholder="상품명을 작성해주세요" 
                        register={props.register("name")
                    }
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
                    <KakaoMapPage />
                        
                    
                   
                </MapWrapper>
                <PhotoWrapper>
                    <Label>사진 첨부</Label>
                    <PhotoHeader>
                        {new Array(3).fill(1).map((el, index) =>
                            <Upload02 
                                key={`${el}_${index}`}
                                index={index}
                                onChangeFiles={props.onChangeFiles}
                                defaultFileUrl={props.data?.fetchUseditem.images?.[index]}
                            />
                        )}
                    </PhotoHeader>
                </PhotoWrapper>
                <MainPhotoWrapper>
                    <Label>메인 사진 설정</Label>
                    <RadioButton type="radio" id="image" name="radio-button1"/>
                    <RadioLabel>사진1</RadioLabel>
                    <RadioButton type="radio" id="image" name="radio-button2"/>
                    <RadioLabel>사진2</RadioLabel>
                </MainPhotoWrapper>
                <ButtonWrapper>
                    <SubmitButton type="submit" name={props.isEdit ? "수정하기" : "등록하기"} isValid={props.formState.isValid}/>

                </ButtonWrapper>
            </Wrapper>
        </form>
    )
}