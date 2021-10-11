import {
    UploadImage,
    UploadButton,
    UploadFileHidden,
 } from "./Uploads01.styles"
import { IUploads01UIProps } from './Uploads01.types'

export default function Uploads01UI (props: IUploads01UIProps) {

    return (
        <>
            {props.fileUrl ? (
                <UploadImage
                    onClick={props.onClickUpload} 
                    src={props.fileUrl}
                />
            ) : (
                <UploadButton onClick={props.onClickUpload}>
                    <>+</>
                    <>업로드</>
                </UploadButton>
            )}
                <UploadFileHidden
                    type= "file"
                    ref= {props.fileRef}
                    onChange={props.onChangeFile}
                />
        </>
    )
}