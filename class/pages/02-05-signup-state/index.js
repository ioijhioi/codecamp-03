import {useState, } from 'react'
import {ErrorMesage} from 'react'

export default function SignupStatePage (){
    const [email, setEmail] = useState ("")
    const [emailError, setEmailError] = useState("")

    const [password1, setPassword1] = useState ("")
    const [password2, setPassword2] = useState ("")

    const [PasswordError, setPasswordError] = useState ("")

    
    
    function onChangeEmail(event){
        setEmail(event.target.value)
    }

    function onChangePassword1(event){
        setPassword1(event.target.value)
    }
    
    function onChangePassword2(event){
        setPassword2(event.target.value)
    }

    function onClickSignup(){
        // console.log('email :', email)
        // console.log('password1:', password1)
        // console.log('passoword2:', password2)

        if(!email. includes("@")){
            setEmailError("@가 없습니다")
            // alert("@가 없습니다")
        }

        if(password1 !== password2){
            // alert("비밀번호1과 비밀번호2가 다릅니다!")
            setPasswordError("비밀번호가 다릅니다")
        }
    }
    
export const ErrorMasage = styled.div`
    color:red;
`    
    return (
        <div>
            이메일: <input type="text" onChange={onChangeEmail}/><br/>
            <ErrorMesage>{emailError}</ErrorMesage>
            비밀번호: <input type="password" onChange={onChangePassword1}/><br/>
            비밀번호확인: <input type="password" onChange={onChangePassword2}/><br/>
            <ErrorMesage>{PasswordError}</ErrorMesage>
            <button onClick={onClickSignup}>회원가입하기</button>
        </div>

    )

}