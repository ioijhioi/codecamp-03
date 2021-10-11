import { gql} from "@apollo/client"

export const UPLOAD_FILE = gql `
    mutation uploadFile($file: upload!){
        uploadFile(file:$file){
            url
        }
    }
`