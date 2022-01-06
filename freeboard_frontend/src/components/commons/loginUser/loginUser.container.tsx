import { useRouter } from 'next/router'
import LoginUserPageUI from './loginUser.presenter'
import { useContext, useState } from 'react'
import { useMutation} from '@apollo/client'
import {LOGIN_USER} from './loginUser.queries'
import { GlobalContext} from '../../../../pages/_app'



export default function LoginUser () {
    const router = useRouter()
    const { setAccessToken} = useContext(GlobalContext)
    
    const [myEmail, setMyEmail] = useState("")
    const [myPassword, setMyPassword] =useState("")

    const [loginUser] = useMutation(LOGIN_USER)

    function onChangeEmail(event){
        setMyEmail(event.target.value)
    }

    function onChangePassword(event){
        setMyPassword(event.target.value)

    }
    function onClickMoveToCreateUserPage (){
        router.push("/createUser")
      }

    async function onClickLogin(){
        const result =  await loginUser({
            variables: {
                email: myEmail,
                password: myPassword,
            },
        });
        console.log(result.data?.loginUser.accessToken);
        localStorage.setItem("accessToken", result.data?.loginUser.accessToken)
        setAccessToken(result.data?.loginUser.accessToken)
        router.push('/boards')
    }


    return (
        <LoginUserPageUI 
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
            onClickLogin={onClickLogin}
            onClickMoveToCreateUserPage={onClickMoveToCreateUserPage}
        />
    )
}