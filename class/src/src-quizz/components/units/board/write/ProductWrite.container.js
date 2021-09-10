import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { useRouter } from 'next/router'
import ProductWriteUI from './ProductWrite.presenter'
import { UPDATE_PRODUCT } from './ProductWrite.queries'
import { CREATE_PRODUCT } from './ProductWrite.queries'




export default function ProductWrite(props) {
    const router = useRouter ()

    const [ createProduct] = useMutation(CREATE_PRODUCT)
    const [ updateProduct] = useMutation(UPDATE_PRODUCT)

    const [ mySeller, setMySeller] = useState ("")
    const [ myName, setMyName ] = useState ("")
    const [ myDetail, setMyDetail] = useState ("")
    const [ myPrice, setMyPrice] = useState ("")

    // const [zzz, setZzz] = useState(false)
    // const [qqq, setQqq] = useState(false)

    function onChangeMySeller(event) {
        setMySeller(event.target.value)
    }

    function onChangeMyName(event){
        setMyName(event.target.value)
    }

    function onChangeMyDetail(event) {
        setMyDetail(event.target.value)
    }

    function  onChangeMyPrice(event) {
        setMyPrice(event.target.value)
    }

    async function onClickSubmit() {
        const result = await createProduct({
            variables: {
                seller: mySeller,
                createProductInput: {
                    name: myName,
                    detail: myDetail,
                    price: Number(myPrice),
                }
            }
        })
        
            router.push(
                `/quiz/08-02-product-detail/${result.data.createProduct._id}/`);
    }
    
    async function onClickEdit() {
        try {
            const result = await updateProduct({
                variables: {
                    productId:router.query._id,
                    updateProductInput: {
                        name: myName,
                        detail: myDetail,
                        price: Number(myPrice),
                    }

                }
            })
            console.log(result)
            console.log(result.data.updateProduct._id)
            router.push (`/quiz/08-02-product-detail/${router.query._id}`)
            
        }   catch(error){
            console.log("")
        }
    }
    
    
    
    
    
    return(
        <ProductWriteUI
            onChangeMySeller={onChangeMySeller}
            onChangeMyPrice={onChangeMyPrice}
            onChangeMyName={onChangeMyName}
            onChangeMyDetail={onChangeMyDetail}
            onClickEdit={onClickEdit}
            // zzz={zzz}
            // qqq={qqq}
            isEdit={props.isEdit}
            onClickSubmit={onClickSubmit}
            // {/* 판매자: <input type="text" onChange={onChangeMySeller} /><br />
            // 상품명: <input type="text" onChange={onChangeMyName} /><br />
            // 상품상세: <input type="text" onChange={onChangeMyDeatil} /><br />
            // 상품가격: <input type="text" onChange={onChangeMyNumber}/><br />
            // <button onClick={onClickSubmit}>상품등록하기!!</button> */}
        />
    )
}