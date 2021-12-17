import {
    Wrapper,
    
    // BestProduct,
    ProductName,
    // ProductWrapper,
    SellingProduct,
    SoldProduct,
    BottonHeader,
    Search,
    SearchButton,
    Row,
    Images,
    ImagesNone,
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
           
            {/* <BestProduct/> */}
            <ProductName>
                <SellingProduct> 판매중상품 </SellingProduct>
                <SoldProduct>판매된상품</SoldProduct>
                <BottonHeader>
                    <Search 
                        type="text" 
                        placeholder="제목을 검색해주세요"
                        onChange={props.onChangeSearch}/>
                    <SearchButton onClick={props.onClickSearch}>검색하기 </SearchButton>
                </BottonHeader>

            </ProductName>
            
      
            {props.data?.fetchUseditems.map((el: any) => (
                <Row 
                    key={el._id}
                    id={el._id}
                    onClick={props.onClickMoveToDetail(el)}
                >
                    <div>
                        {el.images[0] ? (
                            <Images
                                src={`https://storage.googleapis.com/${el.images[0]}`}
                            />
                        ) : ( 
                            <ImagesNone>
                                이미지가 <br/>없습니다
                            </ImagesNone>
                        )}
                            
                    </div>
                    <Product>
                        <ProductLeft >
                            <Name>{el.name}</Name>
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