import HomeUI from './home.presenter'
import { useRouter } from 'next/router'

export default function Home () {
    const router = useRouter();

    function onClickMoveToMainpage (){
        router.push("/maps")
    }

    function onClickMoveToLoginPage (){
        router.push("/loginUser")
    }

    return <HomeUI 
            onClickMoveToMainpage={onClickMoveToMainpage}
            onClickMoveToLoginPage={onClickMoveToLoginPage}
        />
    
}