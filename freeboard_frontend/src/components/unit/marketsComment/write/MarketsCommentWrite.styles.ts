import styled from '@emotion/styled';
// import {Rate} from "antd";


export const Wrapper = styled.div`
    width: 1200px;
    /* background-color: green; */
`
export const Line = styled.div`
    width: 1200px;
    border-bottom: 1px solid black;
    
`
export const CommentHeader = styled.div`
    width: 100px;
    height:50px;
    /* background-color: yellow; */
    display:flex;
    flex-direction:row;
    margin-top: 50px;
`

export const AskIcon = styled.img`
    width: 20px;
    height: 20px;
`

export const Ask = styled.div`
    font-size: 18px;
    display:flex;
`

export const ContentWrapper = styled.div`
    border: 1px solid lightgray;
    margin-top: 15px;
`
export const Content = styled.textarea`
    width: 100%;
    min-height: 108px;
`

export const BottomWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ContentLength = styled.div`
    width: 100%;
    height: 51px;
    line-height: 51px;
    padding-left: 20px;
    color: gray;
`

export const Button = styled.div`
    width: 91px;
    height: 51px;
    background-color: yellow;
    color: black;
    cursor: pointer;
    box-shadow: 0px 0px 5px gray;
`