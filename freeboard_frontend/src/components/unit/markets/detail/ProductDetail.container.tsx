import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router'
import ProductDetailUI from './ProductDetail.presenter'
import {FETCH_USED_ITEM} from "./ProductDetail.queries"

export default function ProductDetail (){
    const router = useRouter();

    const {data} = useQuery (FETCH_USED_ITEM, {
        variables: {
            useditemId: router.query.productId,
        },
    });
    console.log(data, router);

    function onClickMoveToList () {
        router.push(`markets/`)
    }

    return ( 
        <ProductDetailUI 
            data={data}
            onClickMoveToList={onClickMoveToList}
        />
    )
}