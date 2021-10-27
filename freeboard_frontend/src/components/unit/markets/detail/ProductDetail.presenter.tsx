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
    RealPhoto,
    Content,
    Tags,
    Map,
    Bottom,
    GoToList,
    Edit,
    Delete,

} from './ProductDetail.styles'
// import DomPurify from "dompurify"


export default function ProductDetailUI (props) {
    console.log("이미지: ", props)

    return (
        <Wrapper>
            <Header>
                <HeaderLeft>    
                    <Icon src="/images/product/sellericon.png"></Icon>
                    <SellerInformation>
                        <Seller>123</Seller>
                        <UpdatedAt>Date:{props.data?.fetchUseditem.createdAt.slice(0, 10)}</UpdatedAt>
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
                        <Remarks>{props.data?.fetchUseditem.remarks}</Remarks>
                        <Name>{props.data?.fetchUseditem.name}</Name>
                    </Product>
                    <Like>
                        <LikeIcon src="/images/product/likeheart.png"/>
                        <PickedCount>{props.data?.fetchUseditem.pickedCount}</PickedCount>
                    </Like>
                </ProductHeader>
                <ProductBody>
                    <Price>{props.data?.fetchUseditem.price}</Price>
                    <Image>
                        {props.data?.fetchUseditem.images
                            ?.filter((el: string) => el !== "" )
                            .map((el: string) => (
                                <RealPhoto 
                                    key={el}
                                    src={`https://storage.googleapis.com/${el}`}
                                />
                            ))
                        }
                    </Image>
                    <Content>{props.data?.fetchUseditem.contents}
                    </Content>
                    <Tags>{props.data?.fetchUseditem.tags}</Tags>
                    <Map></Map>
                </ProductBody>
            </Body>
            <Bottom>
                <GoToList onClick={props.onClickMoveToList}>목록으로</GoToList>
                <Edit onClick={props.onClickMoveToEdit} >수정하기</Edit>
                <Delete onClick={props.onClickMoveToDelete}> 삭제하기</Delete>
            </Bottom>
           
        </Wrapper>
    )
}