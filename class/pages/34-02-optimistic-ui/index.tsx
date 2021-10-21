import {gql, useMutation, useQuery} from '@apollo/client'

const FETCH_BOARD = gql`
    query fetchBoard ($boardId: ID! ) {
        fetchBoard (boardId: $boardId) {
            _id
            likeCount
        }
    }
`
const LIKE_BOARD = gql`
    mutation likeBoard ($boardId: ID!) {
        likeBoard(boardId: $boardId) 
    }
`

export default function OptimisticPage (){
    const [likeBoard] = useMutation(LIKE_BOARD);
    const {data} = useQuery(FETCH_BOARD, {
        variables: {boardId: "6170e288b55052002a93d14d"},
    });

    const onClickLikeButton = () => {
        likeBoard ({
            variables: { boardId: "6170e288b55052002a93d14d"},
            // refetchQueries: [
            //     {
            //         query: FETCH_BOARD, 
            //         variables: {boardId:"6170e288b55052002a93d14d"},
            //     },
            // ], // 이거는 리페치 될때까지 기다려야됨
            optimisticResponse : {
                likeBoard: data?.fetchBoard.likeCount + 1,
            },
            update (cache, { data }){
                cache.writeQuery ({
                    query: FETCH_BOARD,
                    variables: { boardId: "6170e288b55052002a93d14d"},
                    data: {
                        fetchBoard: {
                            _id: "6170e288b55052002a93d14d",
                            __typename: "Board",
                            likeCount: data.likeBoard,
                        },
                    }
                })
            }
        });
    };

    // rtt타입이 높으니깐 하나로 합쳐
    // n +1 쿼리를 기억해

    return (
        <>
            <div>좋아요 갯수 : {data?.fetchBoard.likeCount}</div>
            <button onClick={onClickLikeButton}>좋아요 올리기!</button>
        </>

    )
}