import { gql, useMutation } from '@apollo/client'
import { useState } from 'react'

const CREATE_PRODUCT = gql`    
    
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
        createProduct(
            seller: $seller, 
            createProductInput: $createProductInput
        ){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutaionProductPageQuizz() {
    
    const [ createProduct] = useMutation(CREATE_PRODUCT)
    const [ mySeller, setMySeller] = useState ("")
    const [ myName, setMyName ] = useState ("")
    const [ myDetail, setMyDetail] = useState ("")
    const [ myNumber, setMyNumber] = useState ("")

    function onChangeMySeller(event) {
        setMySeller(event.target.value)
    }

    function onChangeMyName(event){
        setMyName(event.target.value)
    }

    function onChangeMyDeatil(event) {
        setMyDetail(event.target.value)
    }

    function  onChangeMyNumber(event) {
        setMyNumber(event.target.value)
    }

    async function onClickSubmit() {
        const result = await createProduct({
            variables: {
                seller: mySeller, 
                createProductInput: {
                    name: myName,
                    detail: myDetail,
                    price: Number(myNumber)
                }

            }
        })
        console.log(result.data.createProduct._id)
    }
    
    
    
    return(
        <>
            판매자: <input type="text" onChange={onChangeMySeller} /><br />
            상품명: <input type="text" onChange={onChangeMyName} /><br />
            상품상세: <input type="text" onChange={onChangeMyDeatil} /><br />
            상품가격: <input type="text" onChange={onChangeMyNumber}/><br />
            <button onClick={onClickSubmit}>상품등록하기!!</button>
        </>
    )
}