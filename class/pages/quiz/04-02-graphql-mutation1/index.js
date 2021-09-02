import { useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql`
    mutation{
        createBoard(writer:"중현", title:"안녕하세요!. 중현입니다.", contents: "내용"){
            number
            message
        }
    }
`

export default function GraphqlMutaionBoardPageQuizz() {
    const [ createBoard]= useMutation(CREATE_BOARD)

    async function aaa() {
        const result = await createBoard()
        console.log(result)
        console.log(result.data.createBoard.number)
    }

    return (
        <button onClick={aaa}>GRAPHQL-API 요청하기!!</button>
    )
}