import {useState} from "react"

export default function JoinStatePage (){

    const [token, setToken] = useState("000000")

    function getnumber() {
        const token1 = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
        setToken(token1)
    }
    
    
    return (
        <>
            <div>{token}</div>
            <button onClick={getnumber}>인증번호전송</button>
        </>
    )
}