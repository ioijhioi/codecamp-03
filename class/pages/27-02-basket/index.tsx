import { gql, useQuery} from '@apollo/client'
import {useRouter} from 'next/router';


const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            _id
            writer
            title
        }
    }
`

export default function BasketPage (){
    const router = useRouter()
    const {data} = useQuery(FETCH_BOARDS);

    const onClickBasket = (el) => () => {
        const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
        // localStorage.getItem("baskets")를 문자열로 변환했기때문에 다시 JSON.parse를 써서 다시 변환해준다
        
        // 체크!! ( 이미담았는지 체크!!)

        let isExists = false
        baskets.forEach ((basketEl) => {
            if( el._id === basketEl._id) isExists = true
        })
        if (isExists) {
            alert('이미 장바구니에 담으셨습니다')
            return;
        }
        // ^^^^^^^^^^^^^^^^^^^^^^^스위치 변수라고 함
        
        const newEl = { ...el };
        delete newEl.__typename;
        baskets.push(newEl)

        // console.log('담기:', el)
        localStorage.setItem("baskets", JSON.stringify(baskets));
    };

    function onClickLogin () {
        alert('로그인에 성공하였습니다!')
        const baskets = JSON.parse(localStorage.getItem("baskets")) || []
        if (baskets.length) {
            const result =confirm("장바구이네 담으신 상품이 있습니다,장바구니 페이지로 이동할까요?")
            if(result) {
                router.push( "27-03-basket-logged-in");
            }
        }
    }

    return (
        <>
            {data?.fetchBoards.map((el, index) => (
                <div key={el._id} >
                    <span style={{marginRight: "10px"}}>{index}</span>
                    <span style={{marginRight: "10px"}}>{el.writer}</span>
                    <span style={{marginRight: "10px"}}>{el.title}</span>
                    <button onClick={onClickBasket(el)}> 장바구니담기</button>

                </div>
            ))}
            <button onClick={onClickLogin}>로그인하기</button>
        </>
    )
}