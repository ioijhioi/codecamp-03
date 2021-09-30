
import Uploads01UI from "./Uploads01.presenter"
import { ChangeEvent,useRef, useState} from "react"

import {IUploads01Props} from "./Uploads01.types"





export default function Uploads01 (props: IUploads01Props) {
    const fileRef = useRef<HTMLInputElement>(null);
    const [fileUrl, setFileUrl] =useState("")
    
    function onClickUpload(){
        fileRef.current?.click();
    }

    async function onChangeFile (event: ChangeEvent<HTMLInputElement>){
        const file = event.target.files[0]
        if(!file){
            alert("파일이 없습니다")
            return;
        }
        if( file.size > 5 * 1024 * 1024){
            alert("파일용량이 너무 큽니다. (제한: 5MB) ")
            return;
        }
        if(!file.type.includes("jpeg") && !file.type.includes("png")){
            alert("jpeg 또는 png만 업로드 가능합니다")
            return;
        }
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (data) => {
            setFileUrl(data.target?.result as string);
            props.onChangeFiles(file,props.index);
        };
    }
    
    
    return(
        <Uploads01UI
            onClickUpload={onClickUpload}
            onChangeFile={onChangeFile}
            fileRef={fileRef}
            fileUrl={fileUrl}
        />
    )
}