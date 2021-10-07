import styled from '@emotion/styled'

export interface IProps {
    isValid: boolean;
}
const MyButton = styled.button`
    background-color: ${(props: IProps) => (props.isValid ? "yellow" : "red")};
`

export default function Button01 (props){
    return (
        <MyButton type={props.type} isValid={props.isValid}>
         {props.name}
        </MyButton>
    )
}