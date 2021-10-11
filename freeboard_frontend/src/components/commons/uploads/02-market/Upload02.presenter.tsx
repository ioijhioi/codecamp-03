import { 
    UploadFileHidden, 
    UploadImage,
    UploadButton,
} from '../01-board/Uploads01.styles'
import {IUploads02UIProps} from "./Upload02.types"


export default function Upload02UI (props:IUploads02UIProps){

    return (
        <>
            {props.fileUrl || props.defaultFileUrl ? (
                <UploadImage
                    onClick={props.onClickUpload}
                    src={
                        props.fileUrl ||
                        `https://storage.googleapis.com/${props.defaultFileUrl}`
                    }
                />
            ) : (
                <UploadButton onClick ={props.onClickUpload}>
                    <>+</>
                    <>Upload</>
                </UploadButton>
            )}
            <UploadFileHidden
                type="file"
                ref={props.fileRef}
                onChange={props.onChangeFile}
            />
        </>
    )
}