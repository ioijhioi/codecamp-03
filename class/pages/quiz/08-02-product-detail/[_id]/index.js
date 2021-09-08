import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';

const FETCH_Product = gql`
    query fetchProduct($productId: ID){
        fetchProduct(productId: $productId){
            seller
            name
            detail
            price
    
    }
}
`

export default function ProductDetailPage() {
    const router = useRouter()

    const {data } = useQuery(FETCH_Product,{
        variables: { productId: (router.query._id)}
    })

    function onClickMoveToEdit() {
        router.push(`/quiz/08-02-product-detail/${router.query._id}/edit`)
    }

    return (
        <>
            <div>상품 상세 페이지 입니다!!</div>
            <div>상품 판매자 번호:{router.query.productId}</div>
            <div>상품 판매자:{data?.fetchProduct.seller}</div>
            <div>상품 이름:{data?.fetchProduct.name}</div>
            <div>상품 정보{data?.fetchProduct.detail}:</div>
            <div>상품 가격{data?.fetchProduct.price}</div>
            <button onClick={onClickMoveToEdit}>수정하러 이동하기</button>

        </>





    )
}