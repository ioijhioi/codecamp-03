import ProductCreateUI from "./ProductCreate.presenter"
import { useForm} from 'react-hook-form'
import { yupResolver} from "@hookform/resolvers/yup"
import { schema} from './ProductCreate.validations'
import { 
    CREATE_USED_ITEM, 
    UPDATE_USED_ITEM,
    FETCH_USED_ITEM,
} from "./ProductCreate.queries"
import { useMutation, useQuery } from "@apollo/client"
import { useRouter} from "next/router"
import { useState } from 'react'
import {UPLOAD_FILE} from '../../../commons/uploads/02-market/Upload02.queries'


export default function ProductCreate(props: any) {
    const router = useRouter()
    // const {data} = useQuery (FETCH_USED_ITEM)

    const { handleSubmit, register, formState, setValue, trigger} = useForm ({
        mode: "onChange",
        resolver: yupResolver(schema),
    })

    const [createUseditem] = useMutation(CREATE_USED_ITEM);
    const [updateUseditem] =useMutation(UPDATE_USED_ITEM)
    const [uploadFile] =useMutation(UPLOAD_FILE)

    const {data} = useQuery (FETCH_USED_ITEM, {
        variables: {
            useditemId: router.query.number,
        },
    });

    const [files, setFiles] = useState([null, null, null])

    async function onClickSubmit(data) {
        console.log({...data})

        try {
            const uploadFiles = files
                .filter((el) => el)
                .map ((el) => uploadFile({ variables: { file: el}}))
            const results = await Promise.all(uploadFiles);
            const images = results.map((el) => el.data.uploadFile.url)


            const result = await createUseditem ({
                variables: {
                    createUseditemInput: {
                        ...data,
                        images,
                    },
                    
                },
            })
            console.log(result.data.createUseditem._id);
            console.log(result)
            router.push(`/markets/${result.data?.createUseditem._id}`)
            alert("게시물을 등록합니다")
        } catch (error) {
            console.log(error.message)
        }
    } 

    function onChangeMyEditor (value) {
        setValue('contents', value === "<p><br></p>" ? "" : value);
        console.log(value);
        trigger("contents");
    }

    function onChangeFiles(file, index) {
        const newFiles = [...files];
        newFiles[index] = file;
        setFiles(newFiles)
    }

    async function onClickUpdateProduct (data) {
        try {
            const uploadFiles = files
                .filter((el) => el)
                .map((el) => uploadFile ({variables: {file: el}}))
            const results= await Promise.all(uploadFiles)
            const images= results.map((el) => el.data.uploadFile.url)    

            const result = await updateUseditem({
                variables: {
                updateUseditemInput: { 
                    ...data,
                    images,
                },
                useditemId: router.query.useditemId,
                },
            });
            router.push(`/markets/detail/${result.data.updateUseditem._id}`);
        } catch (error) {
            console.log(error.message)
        }
    }


    return (
        <ProductCreateUI
            handleSubmit={handleSubmit}
            register={register}
            formState={formState}
            onClickSubmit={onClickSubmit}
            onClickUpdateProduct={onClickUpdateProduct}
            onChangeMyEditor={onChangeMyEditor}
            onChangeFiles={onChangeFiles}
            isEdit={props.isEdit}
            data={data}
        />
    )
}