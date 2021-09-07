import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardWriteUI from './BoardRead.presenter'
import {FETCH_PRODUCT} from './BoardRead.queries'




export default function ReadContainer() {
    const router = useRouter()
    
    
    
    const {data} =useQuery(FETCH_PRODUCT, {
        variables: {productId: router.query.qqq}
    })
    
    return (

        <BoardWriteUI
            data={data}
            router={router}
        />
    )


    

}