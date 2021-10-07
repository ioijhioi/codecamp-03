import * as yup from 'yup'

export const schema = yup.object(). shape({
    myProduct: yup
        .string()
        .required("반드시 입력해야하는 필수 사항힙니다."),
    myPrice: yup
        .number()
        .required("반드시 입력해야하는 필수 사항입니다."),
    myTag: yup
        .string()
        
})