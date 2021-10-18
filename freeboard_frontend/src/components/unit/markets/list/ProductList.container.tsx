import { useRouter } from 'next/router'
import ProductListUI from "./ProductList.presenter"
import {useQuery} from "@apollo/client"
import {FETCH_USED_ITEMS } from "./ProductList.queries"


export default function ProductList (){
    const router =  useRouter();
    const { data } = useQuery (FETCH_USED_ITEMS)
    // const { data: datafetchUseditemsOfTheBest} = useQuery (FETCH_USED_ITEMS_OF_THE_BEST)

    console.log(data);

    function onClickMoveToCreateProduct (){
        router.push("/markets/new")
    }

    const onClickMoveToDetail = (el) => (event) => {
        const baskets = JSON.parse(localStorage.getItem("baskets")) || []

        let isExists = false
        baskets.forEach ((basketEl) => {
            if( el._id === basketEl._id) isExists = true
        })
        if (isExists) {
            router.push(`/markets/${event.target.id}`)
            return;
            
        }
        const newEl = { ...el };
        delete newEl.__typename;
        baskets.push(newEl)

        
        localStorage.setItem("baskets", JSON.stringify(baskets));
        router.push(`/markets/${event.target.id}`)
    }

    return (
        <ProductListUI 
            data={data}
            onClickMoveToDetail={onClickMoveToDetail}
            onClickMoveToCreateProduct={onClickMoveToCreateProduct}
            // datafetchUseditemsOfTheBest={datafetchUseditemsOfTheBest}
        
        />
    )
}