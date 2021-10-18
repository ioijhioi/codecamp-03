import {
    Wrapper,
    BestProduct,
    ProductName,
    // ProductWrapper,
    SellingProduct,
    SoldProduct,
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
    PriceIcon,
    Button,
} from "./ProductList.styles"

export default function ProductListUI (props) {

    return (
        <Wrapper>
            <BestProduct/>
            <ProductName>
                <SellingProduct />
                <SoldProduct/>
            </ProductName>
            
      
            {props.data?.fetchUseditems.map((el) => (
                <Row key={el._id}>
                    <Images>이미지</Images>
                    <Product>
                        <ProductLeft >
                            <Name id={el._id} onClick={props.onClickMoveToDetail(el)} >{el.name}</Name>
                            <Remarks>{el.remarks}</Remarks>
                            <Tags>{el.tags}</Tags>
                            <SellerWrapper>
                                <Seller>{el.seller.name}</Seller>
                                <PickedCount>{el.pickedCount}</PickedCount>
                            </SellerWrapper>
                        </ProductLeft>
                        <ProductRight>
                            <PriceIcon src="/images/product/price.png"/>
                            {el.price}원
                        </ProductRight>
                    </Product>
                </Row>
            ))}
            
        
            <Button onClick={props.onClickMoveToCreateProduct}>등록하기</Button>
            {/* <WatchedProduct  ></WatchedProduct> */}
        </Wrapper>
    )
}