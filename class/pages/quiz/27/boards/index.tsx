import { gql, useQuery} from '@apollo/client'


const FETCH_BOARDS = gql`
    query fetchBoards {
        fetchBoards {
            _id
            writer
            title
        }
    }
`


export default function QuizBasketPage (){
    const {data} = useQuery(FETCH_BOARDS)

    const onClickBasket = (el) => () => {
        

    }


    return (
        <>
            {data?.fetchBoards.map((el, index) => (
                <div key={el._id}>
                    <span style={{marginRight: "10px"}}>{index}</span>
                    <span style={{marginRight: "10px"}}>{el.writer}</span>
                    <span style={{marginRight: "10px"}}>{el.title}</span>
                    <button onClick={onClickBasket(el)}> 장바구니담기</button>
                </div>
            ))}
        </>
    )
}