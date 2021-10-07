import ProductCreateUI from "./ProductCreate.presenter"
import { useForm} from 'react-hook-form'
import { yupResolver} from "@hookform/resolvers/yup"
import { schema} from './ProductCreate.validations'

export default function ProductCreate() {
    const { handleSubmit, register, formState} = useForm ({
        mode: "onChange",
        resolver: yupResolver(schema),
    })


    return (
        <ProductCreateUI
            handleSubmit={handleSubmit}
            register={register}
            formState={formState}
        />

    )
}