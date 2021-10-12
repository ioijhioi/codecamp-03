import {
    Wrapper,
    Header,
    HeaderLeft,
    Icon,
    SellerInformation,
    Seller,
    UpdatedAt,
    Right,
    Address,
    Body,
    ProductHeader,
    Product,
    Remarks,
    Name,
    Like,
    LikeIcon,
    PickedCount,
    ProductBody,
    Price,
    Image,
    Content,
    Tags,
    Map,
    Botton,

} from './ProductDetail.styles'


export default function ProductDetailUI (props) {

    return (
        <Wrapper>
            <Header>
                <HeaderLeft>    
                    <Icon src="/images/product/sellericon.png"></Icon>
                    <SellerInformation>
                        <Seller>판매자</Seller>
                        <UpdatedAt>Date: 2021.02.18</UpdatedAt>
                    </SellerInformation>
                </HeaderLeft>
                <Right>
                    <div>이미지파일</div>
                    <Address></Address>
                </Right>
            </Header>
            <Body>
                <ProductHeader>
                    <Product>
                        <Remarks>2019 LTE 32GB</Remarks>
                        <Name>삼성전자 갤럭시 탭A 10.1</Name>
                    </Product>
                    <Like>
                        <LikeIcon src="/images/product/likeheart.png"/>
                        <PickedCount>20</PickedCount>
                    </Like>
                </ProductHeader>
                <ProductBody>
                    <Price>240,120원</Price>
                    <Image></Image>
                    <Content></Content>
                    <Tags></Tags>
                    <Map></Map>
                </ProductBody>
            </Body>
            <Botton>

            </Botton>
        </Wrapper>
    )
}