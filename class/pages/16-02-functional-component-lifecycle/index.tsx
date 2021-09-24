import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'

export default function FunctionalComponentLifecycle (){
    const router = useRouter();
    const [ count, setCount] = useState(0)
    const inputRef = useRef<HTMLInputElement>()

        // componentDidMount 와 동일
        useEffect (() => {
            console.log("컴포넌트 마운트 완료!! ")
            inputRef.current.focus()

        // componentDidUnmount 와 동일
            return () => {
                console.log("잘가요~~")
            }
        }, []);
        
        // componentDidUpdate 와 동일
        useEffect (() => {
            console.log("컴포넌트 수정완료!!")
        }, );
        // []안에 count만 변경이 되었을때만 수정완료가 실행

        // setState와 useEffect
        // useEffect(() => {
        //     setCount((prev) => prev + 1)
        // }, []);
        // setCount를 가급적 안써주는게 좋다

        // setState와 useEffect의 dependency-array
        // useEffect(() => {
        //     setCount((prev) => prev + 1)
        // }, [count]);
        // count를 써주면 무한루프에 빠진다

       
        function onClickCount(){
            setCount((prev) => prev + 1)
        }
        function onClickMove(){
            router.push("/")
        }

    return (
        <>
            현재카운트: {count}
            <button onClick={onClickCount}>카운트 증가!!</button>
            <button onClick={onClickMove}>페이지 이동</button>
            <input  type = "text" ref={inputRef}/>
        </>
    )

}