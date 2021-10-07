import ProductCreate from "../../../src/components/unit/markets/create/ProductCreate.container"
import { withAuth} from '../../../src/components/commons/hocs/withAuth'

const MarketPage = () => {
    return <ProductCreate />
}

export default withAuth(MarketPage)
