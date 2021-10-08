import styled from '@emotion/styled'

interface IProps {
    isValid: boolean;
}
const Submit = styled.button`
    background-color: ${(props: IProps) => (props.isValid ? "yellow" : "red")};
`

export default function SubmitButton (props){
    return <Submit isValid={props.isValid}>{props.name}</Submit>
    
}