import { useQuery,gql } from '@apollo/client'
import {useRouter} from 'next/router'

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            writer
            title
            contents
        }
    }
`

export default function DynamicBoardRead(){
    const router = useRouter()

    const { data } =useQuery(FETCH_BOARD, {          //async await로 할수는 있는데 return값이 늦게 그려진다. 이건 비동기방식
        variables: { number: Number(router.query.number) }
    })

    return (
        <>    
            <div>게시물 상세 페이지 입니다</div>
            <div>게시글 번호: {router.query.number}</div>
            <div>게시글 작성자: {data && data. fetchBoard.writer}</div>  
            <div>게시글 제목:{data && data. fetchBoard.title}</div>
            <div>게시글 내용:{data && data. fetchBoard. contents}</div>
            {/* <div>게시글 작성자: {data?.fetchBoard.writer}</div>  <---옵셔널 체이닝이라고한다
            <div>게시글 제목:{data?. fetchBoard.title}</div>
            <div>게시글 내용:{data?. fetchBoard. contents}</div> <---실무에서 많이 쓰임*/} 

        </>
    )
}