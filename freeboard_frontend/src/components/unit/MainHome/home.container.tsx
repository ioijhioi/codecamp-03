import HomeUI from './home.presenter'
import { useRouter } from 'next/router'

export default function Home () {
    const router = useRouter();

    function onClickMoveToLoginPage (){
        router.push("/loginUser")
    }

    return <HomeUI 
            onClickMoveToLoginPage={onClickMoveToLoginPage}
        />
    
}