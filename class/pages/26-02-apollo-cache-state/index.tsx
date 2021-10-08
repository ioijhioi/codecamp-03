import { gql, useMutation, useQuery} from '@apollo/client'


const FETCH_BOARDS = gql`
    query fetchBoards {
        fetchBoards{
            _id
            writer
            title
            contents
        }
    }
` 

const DELETE_BOARD = gql `
    mutation deleteBoard ($boardId: ID!){
        deleteBoard(boardId: $boardId)
    }
`

const CREATE_BOARD = gql`
    mutation createBoard ($createBoardInput: CreateBoardInput!) {
        createBoard (createBoardInput: $createBoardInput) {
            _id
            writer
            title
            contents
        }
    }
`

export default function ApolloCacheStatePage (){
    const {data} = useQuery(FETCH_BOARDS)
    const [deleteBoard] = useMutation(DELETE_BOARD)
    const [ createBoard] = useMutation(CREATE_BOARD)

    const onClcikDelete = (boardId) => async () => {
        // boardId

        await deleteBoard({
            variables: {
                boardId: boardId,
            },
            // 위에가 요청이 되면 밑에가 응답이 된다. 
            update(cache, {data}) {
                const deletedId = data.deleteBoard;

                cache.modify({

                    fields: {
                        fetchBoards: (prev, {readField}) => {
                            
                            // 1. 기존의 fetchBoards 10개 에서, 지금 삭제된 ID를 제외한 9개를 만들고
                            // 2. 그렇게 만들어진 9개의 새로운 fetchBoards를 return하여, 덮어씌우기

                            const newFetchBoards = prev.filter(
                                (el) => readField("_id", el) !== deletedId // 삭제된게 아닌것만 return이 된다.
                            )
                            
                            return [...newFetchBoards];

                        }
                    }

                })

            } // 케시를 수정하는 로직입니다
            
        })
    }

    const onClickCreate = () => {
        createBoard ({
            variables: {
                createBoardInput : {
                    writer: "중현",
                    password: "1234",
                    title: "중현입니다",
                    contents: "중현초등학교",
                },
            },
            update (cache, {data}) {
                cache.modify ({
                    fields: {
                        fetchBoards: (prev) => {
                            // 추가된 createBoard 결과물과 이전의 10개를 합쳐서 11개를 돌려주기
                            return [ data.createBoard, ... prev];
                        },
                    },
                })
            },
        })
    }

    return (
        <>   
            {data?.fetchBoards.map((el) => (
                    <div key={el._id}>
                        <span>{el.writer}</span>
                        <span> {el.title} </span>
                        <span> {el.contents}</span>
                        <button onClick={onClcikDelete(el._id)}>삭제하기</button>
                    </div>  
            ))}

            <button onClick={onClickCreate}> 등록하기</button>
        </>
    )
      
}