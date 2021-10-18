import {gql} from "@apollo/client"

export const FETCH_USED_ITEMS = gql `
    query fetchUseditems {
        fetchUseditems {
            _id
            name
            remarks
            tags
            pickedCount
            price
            seller {
                name
            }
        }
    }
`

// export const FETCH_USED_ITEMS_OF_THE_BEST = gql`
//     query fetchUseditemsOfTheBest {
//         fetchUseditemsOfTheBest {
//             _id
//             remarks
//             tags
//             pickedCount
//             price

//         }
//     }
// `
