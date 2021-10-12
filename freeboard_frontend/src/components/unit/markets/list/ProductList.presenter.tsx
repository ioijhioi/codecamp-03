import {
    Wrapper,
    Header,
    BestProduct,
    Row,
    Images,
    Product,
    ProductLeft,
    Name,
    Remarks,
    Tags,
    SellerWrapper,
    Seller,
    PickedCount,
    ProductRight,
    Button,
} from "./ProductList.styles"

export default function ProductListUI (props) {

    return (
        <Wrapper>
            <Header>베스트 상품</Header>
            <BestProduct>상품목록</BestProduct>
            {props.data?.fetchUseditems.map((el) => (
                <Row key={el._id}>
                    <Images>이미지</Images>
                    <Product>
                        <ProductLeft>
                            <Name id={el._id} onClick={props.onClickMoveToDetail}>{el.name}</Name>
                            <Remarks>{el.remarks}</Remarks>
                            <Tags>{el.tags}</Tags>
                            <SellerWrapper>
                                <Seller>{el.seller.name}</Seller>
                                <PickedCount>{el.pickedCount}</PickedCount>
                            </SellerWrapper>
                        </ProductLeft>
                        <ProductRight>
                            {el.price}원
                        </ProductRight>
                    </Product>
                        
                </Row>
            ))}

        
            <Button onClick={props.onClickMoveToCreateProduct}>등록하기</Button>
        </Wrapper>
    )
}