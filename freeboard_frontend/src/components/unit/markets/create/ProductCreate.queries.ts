import { gql} from "@apollo/client"

export const CREATE_USED_ITEM = gql `
    mutation createUsedItem($createUsedItemInput: createUseditemInput!) {
        createUsedItem(createUsedItemInput: $createUsedItemInput){
            _id
        }
    }
`