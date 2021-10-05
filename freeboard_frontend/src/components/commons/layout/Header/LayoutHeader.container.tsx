import { useRouter } from 'next/router';
import LayoutHeaderUI from "./LayoutHeader.presenter";



export default function LayoutHeader() {
  const router = useRouter();

  function onClickMoveToMainMenu () {
    router.push(event.target.id)
  }
  

  

  return ( 
    <LayoutHeaderUI 
      onClickMoveToMainMenu={onClickMoveToMainMenu}
     
    />
  )
}
