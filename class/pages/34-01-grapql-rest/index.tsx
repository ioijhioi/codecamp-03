import axios from 'axios'


export default function GrapqlRestPage (){

    const onClickRequest = async () => {
        const result = await axios.post("https://backend03.codebootcamp.co.kr/graphql", 
        {
            query: `
                    mutation createBoard{
                        createBoard(
                            createBoardInput: {
                                writer: "중현",
                                password: "1234",
                                title: "충현",
                                contents: "쭝현"
                            }
                        ) {
                            _id
                            writer
                        }
                    }
                `
        });
       console.log(result);
    }
    return (
        <>
            <button onClick={onClickRequest}>클릭해서 Grapgql을 Axios로 요청하기!!</button>
        </>
    )
}

// post 를 쓰는 이유

// 데이터를 사용해야 하기 때문에 post를 사용한다.

// graphql 은 내용을 요청하든 받든 무조건 post방식으로 한다.

// usecallback, 하이노드펑션