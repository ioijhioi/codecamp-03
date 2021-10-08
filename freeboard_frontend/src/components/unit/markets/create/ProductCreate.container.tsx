import ProductCreateUI from "./ProductCreate.presenter"
import { useForm} from 'react-hook-form'
import { yupResolver} from "@hookform/resolvers/yup"
import { schema} from './ProductCreate.validations'
import { CREATE_USED_ITEM } from "./ProductCreate.queries"
import { useMutation } from '@apollo/client'

export default function ProductCreate() {
    const { handleSubmit, register, formState} = useForm ({
        mode: "onChange",
        resolver: yupResolver(schema),
    })

    const [createUsedItem] = useMutation(CREATE_USED_ITEM);

    async function onClickSingup (){

        const result = await createUsedItem ({
                variables:
            })
        
    }


    return (
        <ProductCreateUI
            handleSubmit={handleSubmit}
            register={register}
            formState={formState}
        />

    )
}