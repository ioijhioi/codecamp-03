import {gql, useQuery} from '@apollo/client'
import styled from '@emotion/styled'
import { useState } from 'react'

const FETCH_BOARDS = gql`
    query fetchBoards($search: String,  $page: Int){
        fetchBoards(search: $search, page: $page){
            _id
            writer
            title
            createdAt
        }
    }
`

const Column = styled.span`
    padding: 0px 50px; 
`

export default function SearchPage(){

    const [mySearch, setMySearch] = useState("")
    const [myKeyword, setMyKeyword] = useState("")
    const {data, refetch} = useQuery(FETCH_BOARDS)

    function onChangeSearch(event){
        setMySearch (event.target.value);
    }

    function onClickSearch(){
        refetch({ search: mySearch, page:1});
        setMyKeyword(mySearch)
    }

    return (
        <>
            <div>검색페이지!!</div>
            검색어: <input type= "text" onChange={onChangeSearch}/>
            <button onClick={onClickSearch}> 검색</button>
            {data?.fetchBoards.map((el) => ( 
                <div key={el._id}>
                    <Column>{el.writer}</Column>
                    <Column>{el.title}</Column>
                    <Column>{el.createdAt}</Column>
                </div>
            ))}  
        </>
    )
}