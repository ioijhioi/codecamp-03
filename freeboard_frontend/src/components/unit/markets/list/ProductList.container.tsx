import { useRouter } from 'next/router'
import ProductListUI from "./ProductList.presenter"

export default function ProductList (){
    const router = useRouter();

    function onClickMoveToCreateProduct (){
        router.push("/markets/new")
    }

    return (
        <ProductListUI 
            onClickMoveToCreateProduct={onClickMoveToCreateProduct}
        
        />
    )
}