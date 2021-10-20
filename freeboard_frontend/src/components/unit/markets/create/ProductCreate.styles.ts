import styled from '@emotion/styled';

import dynamic from "next/dynamic";

const ReactQuill = dynamic (() => import("react-quill"), { ssr: false})

export const ReactQuillBox = styled(ReactQuill)`
    width: 100%;
    height: 400px;
`

export const Wrapper = styled.div`
    width: 1200px;
    border: 1px solid black;
    margin: 100px;
    padding-top: 80px;
    padding-bottom: 100px;
    padding-left: 102px;
    padding-right: 102px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    box-shadow: 0px 0px 10px gray;
`

export const Title = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 40px;
    font-weight: bold;
`

export const ItemWrapper = styled.div`
    width: 100%;
    /* background-color: red; */
`

export const Label = styled.div`
    padding-bottom: 16px;
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
    
`



export const Tool = styled.div`
    width: 100%;
    height: 320px;
    background-color: green;
`

export const ToolBox = styled.div`
    width: 100%;
    height: 52px;
    padding: 16px;
    background-color: skyblue;
`

export const Content = styled.textarea`
    width:100%;
    height: 270px;
    padding: 14px;

`

export const MapWrapper = styled.div`
    width: 100%;
    height: 300px;
    /* background-color: greenyellow; */
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    /* padding-top: 40px; */
`

export const MapBox = styled.div`
    width: 384px;
    height: 300px;
    background-color: peru;
`

export const Map = styled.div`
    width: 384px;
    height: 252px;
    background-color: orange;
`

export const GpsAddress = styled.div`
    width: 100%;
    height: 300px;
    background-color: red;
`

// export const GPS = styled.div`

// `

// export const Adress = styled.div`

// `

export const PhotoWrapper = styled.div`
    width: 100%;
    height: 250px;
    background-color: papayawhip;
`

export const MainPhotoWrapper = styled.div`
    width: 100%;
    height: 100px;
`

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 80px;
    background-color: pink;
`

