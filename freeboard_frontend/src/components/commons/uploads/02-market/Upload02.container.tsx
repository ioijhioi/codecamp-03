import Upload02UI from './Upload02.presenter';
import { ChangeEvent, useRef, useState} from "react"
import { checkValidationImage } from '../../../../commons/libraries/validations/checkValidationsImages';
import { IUploads02Props} from "./Upload02.types"

export default function Upload02 (props: IUploads02Props){

    const fileRef = useRef<HTMLInputElement>(null) 
    const [fileUrl, setFilUrl] = useState("")

    function onClickUpload (){
        fileRef.current?.click();
    }

    async function onChangeFile(event:ChangeEvent<HTMLInputElement>) {
        const file = checkValidationImage(event.target.files?.[0])
        if ( !file) return;

        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (data) => {
            setFilUrl(data.target?.result as string);
            props.onChangeFiles(file, props.index)
        }
    }

    return (
        <Upload02UI
            fileRef={fileRef}
            fileUrl={fileUrl}
            defaultFileUrl={props.defaultFileUrl}
            onClickUpload={onClickUpload}
            onChangeFile={onChangeFile}
        />

    )

}