import {useRef, useState} from "react";
import {fileValidation } from "../../src/commons/libraries/validation";
import {gql, useMutation} from '@apollo/client'


const UPLOAD_FILE = gql`
    mutation uploadFile ($file: Upload!) {
        uploadFile(file:$file){
            url
        }
    }
`


export default function ImageUploadPreviewPage(){
    const [imageUrl, setImageUrl] = useState("")
    const [myFile, setMyFile] =useState("")
    const [uploadFile] = useMutation(UPLOAD_FILE)
    const fileRef = useRef<HTMLInputElement>();
    
    function onClickGray (){
        fileRef.current.click();
    }

    function onChangeFile(event){
        console.log("change")
        const file = event.target.files[0]
        if (!fileValidation(file)) return;
        console.log("return")
        const fileReader = new FileReader ()
        fileReader.readAsDataURL(file) // 임시 url입니다
        fileReader.onload = (data) => {
            console.log(data.target.result)
            setImageUrl (data.target.result)
            setMyFile(file)
        }
    }

    async function onClickSubmit (){
        const start = performance.now();
        await Promise.all([
            uploadFile({variables: {file: myFile}}),
            uploadFile({variables: {file: myFile}}),
            uploadFile({variables: {file: myFile}}),
            uploadFile({variables: {file: myFile}}),
            uploadFile({variables: {file: myFile}}),
            uploadFile({variables: {file: myFile}}),
            uploadFile({variables: {file: myFile}}),
            uploadFile({variables: {file: myFile}}),
        ])

        // [result1, result2, result3, ...]
        // result.map((el) => ( el.data.uploadFile.url))

        const urls = result.map((el) => el.data.uploadFile.url)
        
        const end = performance.now();
        console.log(end - start)
        // const result = await uploadFile({
        //     variables: {
        //         file: myFile,
        //     }
        // })
        // const url = result.data.uploadFile.url

        // 게시물 등록
        // createBoard ({ variables:{
        //     ...
        //     images: urls
        // }})
    }
    return(
        <>
            <div style={ {width: "50px", height: "50px", backgroundColor: "gray"}} onClick={onClickGray}>
                이미지 업로드!!
            </div>
            <img src={imageUrl} />
            <input type="file" ref={fileRef} onChange={onChangeFile} />
            <button onClick={onClickSubmit}>게시물 등록하기!</button>
        </>
    )
}