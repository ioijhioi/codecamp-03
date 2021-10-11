import ProductDetail from "../../../src/components/unit/markets/detail/ProductDetail.container"
import ProductCreate from "../../../src/components/unit/markets/create/ProductCreate.container"
import ProudctList from "../../../src/components/unit/markets/list/ProductList.container"



export default function ProductDetailPage () {
    return (
        <>
            <ProductDetail />
            <ProductCreate />
            <ProudctList />
        </>

    )

}