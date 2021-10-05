import { useRouter } from 'next/router';
import LayoutHeaderUI from "./LayoutHeader.presenter";



export default function LayoutHeader() {
  const router = useRouter();

  // function onClickMoveToMainMenu ( ) {
  //   router.push("")
  // }
  

  function onClickMoveToLoginPage () {
    router.push("/loginUser")
  }
  
  function onClickMoveToCreateUserPage (){
    router.push("/createUser")
  }
  
  return <LayoutHeaderUI
          // onClickMoveToMainMenu={onClickMoveToMainMenu}
          onClickMoveToLoginPage={onClickMoveToLoginPage}
          onClickMoveToCreateUserPage={onClickMoveToCreateUserPage}
         
        />
  
}
