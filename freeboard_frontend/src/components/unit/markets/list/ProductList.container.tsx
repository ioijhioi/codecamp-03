import { useRouter } from 'next/router'
import ProductListUI from "./ProductList.presenter"
import {useQuery} from "@apollo/client"
import {FETCH_USED_ITEMS, } from "./ProductList.queries"


export default function ProductList (){
    const router = useRouter();
    const { data } =useQuery (FETCH_USED_ITEMS)

    console.log(data);

    function onClickMoveToCreateProduct (){
        router.push("/markets/new")
    }

    function onClickMoveToDetail (event:any) {
        router.push(`/markets/${event.target.id}`)
    }

    return (
        <ProductListUI 
            data={data}
            onClickMoveToDetail={onClickMoveToDetail}
            onClickMoveToCreateProduct={onClickMoveToCreateProduct}
        
        />
    )
}