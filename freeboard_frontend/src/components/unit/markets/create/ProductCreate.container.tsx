import ProductCreateUI from "./ProductCreate.presenter"
import { useForm} from 'react-hook-form'
import { yupResolver} from "@hookform/resolvers/yup"
import { schema} from './ProductCreate.validations'
import { CREATE_USED_ITEM } from "./ProductCreate.queries"
import { useMutation} from "@apollo/client"
import { useRouter} from "next/router"

export default function ProductCreate() {
    const router = useRouter()
    const { handleSubmit, register, formState} = useForm ({
        mode: "onChange",
        resolver: yupResolver(schema),
    })

    const [createUseditem] = useMutation(CREATE_USED_ITEM);

    async function onClickSubmit(data) {
        console.log({...data})

        const result = await createUseditem ({
            variables: {
                createUseditemInput: {...data},
            },
        })
        console.log(result);
        
    }


    return (
        <ProductCreateUI
            handleSubmit={handleSubmit}
            register={register}
            formState={formState}
            onClickSubmit={onClickSubmit}
        />
    )
}