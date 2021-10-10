import {
    Wrapper,
    Header,
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
                <Icon></Icon>
                <SellerInformation>
                    <Seller></Seller>
                    <UpdatedAt></UpdatedAt>
                </SellerInformation>
                <Right>
                    <div>이미지파일</div>
                    <Address></Address>
                </Right>
            </Header>
            <Body>
                <ProductHeader>
                    <Product>
                        <Remarks></Remarks>
                        <Name></Name>
                    </Product>
                    <Like>
                        <PickedCount></PickedCount>
                    </Like>
                </ProductHeader>
                <ProductBody>
                    <Price></Price>
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