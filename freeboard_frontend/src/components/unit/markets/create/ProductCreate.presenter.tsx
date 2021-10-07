import {
    Wrapper,
    Title,
    ItemWrapper,
    Label,
    Tool,
    ToolBox,
    Content,
    
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
        </Wrapper>
    )
}