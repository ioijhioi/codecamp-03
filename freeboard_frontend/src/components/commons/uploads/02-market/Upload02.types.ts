import { ChangeEvent, RefObject} from "react"

export interface IUploads02Props {
    index: number;
    onChangeFiles: (file: File, index: number) => void;
    defaultFileUrl?: string;
}

export interface IUploads02UIProps {
    fileRef: RefObject<HTMLInputElement>;
    fileUrl: string;
    onClickUpload: () => void;
    onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
    defaultFileUrl?: string;
}