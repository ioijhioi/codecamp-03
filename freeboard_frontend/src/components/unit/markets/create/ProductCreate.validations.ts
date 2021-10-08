import * as yup from 'yup'

export const schema = yup.object(). shape({
    name: yup
        .string()
        .required("반드시 입력해야하는 필수 사항힙니다."),
    remarks: yup
        .string()
        .required("반드시 입력해야하는 필수 사항힙니다."),
    contents: yup  
        .string()
        .required("반드시 입력해야하는 필수 사항힙니다."),
    price: yup
        .number()
        .required("반드시 입력해야하는 필수 사항입니다."),
    tags: yup
        .string()
        .required("반드시 입력해야하는 필수 사항힙니다."),
})