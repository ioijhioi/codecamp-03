import ProductCreateUI from "./ProductCreate.presenter"
import { useForm} from 'react-hook-form'
import { yupResolver} from "@hookform/resolvers/yup"
import { schema} from './ProductCreate.validations'
import { 
    CREATE_USED_ITEM, 
    UPDATE_USED_ITEM,
    // FETCH_USED_ITEM,
} from "./ProductCreate.queries"
import { useMutation } from "@apollo/client"
import { useRouter} from "next/router"


export default function ProductCreate(props: any) {
    const router = useRouter()
    // const {data} = useQuery (FETCH_USED_ITEM)

    const { handleSubmit, register, formState, setValue, trigger} = useForm ({
        mode: "onChange",
        resolver: yupResolver(schema),
    })

    const [createUseditem] = useMutation(CREATE_USED_ITEM);
    const [updateUseditem] =useMutation(UPDATE_USED_ITEM)

    async function onClickSubmit(data) {
        console.log({...data})

        const result = await createUseditem ({
            variables: {
                createUseditemInput: {...data},
            },
        })
        
        console.log(result);
        router.push(`/markets/${result.data?.createUseditem._id}`)
        alert("게시물을 등록합니다")
    } 
    function onChangeMyEditor (value) {
        setValue('contents', value === "<p><br></p>" ? "" : value);
        console.log(value);
        trigger("contents");
    }

    function onClickUpdateProduct (data) {
        updateUseditem({
            variables: {
              updateUseditemInput: { ...data },
              useditemId: router.query.useditemId,
            },
          });
          router.push(`/market/detail/${router.query.useditemId}`);
    }


    return (
        <ProductCreateUI
            handleSubmit={handleSubmit}
            register={register}
            formState={formState}
            onClickSubmit={onClickSubmit}
            onClickUpdateProduct={onClickUpdateProduct}
            onChangeMyEditor={onChangeMyEditor}
            isEdit={props.isEdit}
        />
    )
}