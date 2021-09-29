import { useRouter } from 'next/router';
import LayoutHeaderUI from "./LayoutHeader.presenter";



export default function LayoutHeader() {
  const router = useRouter();

  function onClickMoveToMainPage () {
    router.push("/boards")
  }


  return ( 
    <LayoutHeaderUI 
      onClickMoveToMainPage={onClickMoveToMainPage}
    />
  )
}
