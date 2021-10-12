

export default function BrowserStoragePage () {

    function onClickSaveCookie (){
        document.cookie = "aaa=철수";
    }

    function onClickSaveLocalStroage (){
        localStorage.setItem("bbb", "영희");
    }

    function onClickSaveSessionStorage (){
        sessionStorage.setItem("ccc", "훈이");

    }

    function onClickGetCookie (){
        // console.log("myCookie", document.cookie)

        // const email ="aaa@aaa.com"

        const temp = document.cookie
            .split ("; ")
            .filter((el) => el.startsWith(";"))[0];
        console.log(temp.split("=")[1])
    }

    function onClickGetLocalStorage (){
        const asdf =  localStorage.getItem("bbb")
        console.log('1번:',asdf)
    }
    function onClickGetSessionStorage (){
        const qwer = sessionStorage.getItem("ccc")
        console.log('2번:', qwer)
    }

    return (
        <>
            <button onClick={onClickSaveCookie}>쿠키에 저장하기</button>
            <button onClick={onClickSaveLocalStroage}>로컬 스토리지에 저장하기</button>
            <button onClick={onClickSaveSessionStorage}>세션 스토리지에 저장하기</button>
            ===========================================================================

            <button onClick={onClickGetCookie}>쿠키에 있는 값 가져오기</button>
            <button onClick={onClickGetLocalStorage}>로컬 스토리지에 있는 값 가져오기</button>
            <button onClick={onClickGetSessionStorage}>세션 스토리지에 있는 값 가져오기</button>
        </>
    )
}