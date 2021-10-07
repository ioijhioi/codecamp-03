import styled from '@emotion/styled'

export const Box = styled.input`
    width: 996px;
    height: 52px;
    padding: 16px;
`

export default function LoginInput01 (props){
    return (
        <Box type={props.type} {...props.register} placeholder={props.placeholder} />
    )
}