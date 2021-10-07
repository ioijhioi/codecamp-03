import {
    Wrapper,
    Button,
} from "./ProductList.styles"

export default function ProductListUI (props) {

    return (
        <Wrapper>
            상품 리스트페이지
        <Button onClick={props.onClickMoveToCreateProduct}>등록하기</Button>
        </Wrapper>
    )
}