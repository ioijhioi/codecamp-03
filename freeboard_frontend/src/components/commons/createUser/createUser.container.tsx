import CreateUserPageUI from './createUser.presenter'
import {CREATE_USER} from "./createUser.queries"
import { useMutation } from '@apollo/client'
import { useState } from 'react'
import {useRouter} from "next/router"


export default function CreateUserPage (){
    const router = useRouter ();
    const [email, setEmail] = useState("");
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    
    const [createUser] = useMutation(CREATE_USER)

    function onChangeEmail(event){
        setEmail(event.target.value);
        if (event.target.value !== ""){
            setEmailError("");
        }
    }

    function onChangeWriter (event) {
        setWriter(event.target.value);
        if (event.target.value !== "") {
            setWriterError("");
        }
    }

    function onChangePassword (event){
        setPassword(event.target.value);
        if (event.target.value !== "") {
            setPasswordError("");
        }
    }

    async function onClickSubmit (){
        if (email === "") {
            setEmailError("이메일은 필수 입력입니다.")
        }
        if (writer === "") {
            setWriterError("이름은 필수 입력입니다.")
        }
        if (password === "") {
            setPasswordError("비밀번호는 필수 입력입니다.")
        }

        if ( email !== "" && writer !== "" && password !== "") {
            try {
                const result = await createUser({
                    variables: {
                        createUserInput: {
                            email,
                            name:writer,
                            password,
                        },
                    },
                })

                console.log(result.data.createUser._id)
                router.push(`/boards/${result.data.createUser._id}`);
                alert("로그인을 했습니다")
            } catch (error){
                console.log("error")
            }

        }


    }
    return (
        <CreateUserPageUI 
            onChangeEmail={onChangeEmail}
            onChangeWriter={onChangeWriter}
            onClickSubmit={onClickSubmit}
            onChangePassword={onChangePassword}
            emailError={emailError}
            writerError={writerError}
            passwordError={passwordError}
        />
    )
}