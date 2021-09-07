

export default function BoardWriteUI(props){

    return (
        <>
            <div>상품등록 상세 페이지 입니다</div>
            <div>상품등록 판매자: {data && data. fetchProduct.seller}</div>
            <div>상품등록 상품명: {data && data. fetchProduct.name}</div>
            <div>상품등록 상품내용:{data && data. fetchProduct.detail}</div>
            <div>상품등록 상품가격:{data && data. fetchProduct.price}</div>
        </>
    )

}
