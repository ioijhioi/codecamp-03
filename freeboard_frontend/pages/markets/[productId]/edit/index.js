import {useRouter, gql, useQuery} from "@apollo/client"
import ProductCreate from "../../../../src/components/unit/markets/create/ProductCreate.container"

const FETCH_USED_ITEM = gql`
    query fetchUseditem ($useditemId: ID!) {
        fetchUseditem(useditemId: $useditemId) {
            name
            remarks
            contents
            price
            tags
            seller
            pickedCount
        }
    }
`


export default function ProductEditPage () {
    const router = useRouter()
    const {data} = useQuery(FETCH_USED_ITEM,
        {variables : {productId: String(router.query.productId)}}
    )

    console.log(data)

    return <ProductCreate isEdit={true} data={data} />

}