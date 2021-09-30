import {
    UploadImage,
    UploadButton,
    UploadFileHidden,
 } from "./Uploads01.styles"

export default function Uploads01UI (props) {

    return (
        <>
            {props.fileUrl ? (
                <UploadImage
                    onClick={props.onClickUpload}
                    src={`https://storage.googleapis.com/${props.fileUrl}`}
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