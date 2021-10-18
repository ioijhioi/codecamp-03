import { gql} from "@apollo/client"

export const CREATE_USED_ITEM = gql `
    mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
        createUseditem(createUseditemInput: $createUseditemInput){
            _id
        }
    }
`

export const UPDATE_USED_ITEM = gql`
    mutation updateUseditem ( $updateUseditemInput:UpdateUseditemInput! ){
        updateUseditem( updateUseditemInput:$updateUseditemInput ) {
            _id
        }
    }
`

export const FETCH_USED_ITEM = gql `
    query fetchUseditem($useditemId: ID!) {
        fetchUseditem(useditemId: $useditemId) {
            seller {
                name
            }
            name
            createdAt
            remarks
            contents
            price
            pickedCount
            tags
        }
    }
`