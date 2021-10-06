import { useRouter } from 'next/router';
import LayoutHeaderUI from "./LayoutHeader.presenter";



export default function LayoutHeader() {
  const router = useRouter();

  // function onClickMoveToHome ( ) {
  //   router.push("")
  // }
  

  function onClickMoveToLoginPage () {
    router.push("/loginUser")
  }
  
  function onClickMoveToCreateUserPage (){
    router.push("/createUser")
  }
  
  return <LayoutHeaderUI
          // onClickMoveToHome={onClickMoveToHome}
          onClickMoveToLoginPage={onClickMoveToLoginPage}
          onClickMoveToCreateUserPage={onClickMoveToCreateUserPage}
         
        />
  
}
