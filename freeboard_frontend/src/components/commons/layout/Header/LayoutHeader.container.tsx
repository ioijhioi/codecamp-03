import { useRouter } from 'next/router';
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { useContext, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import {FETCH_USER_LOGGED_IN} from "./LayoutHeader.queries"
import {GlobalContext} from "../../../../../pages/_app"

export default function LayoutHeader() {
  const router = useRouter();
  const {accessToken, setUserInfo} = useContext(GlobalContext)
  const {data} = useQuery(FETCH_USER_LOGGED_IN)

  // function onClickMoveToHome ( ) {
  //   router.push("")
  // }
  
  useEffect (() => {
    if (accessToken) return;

    setUserInfo({
      email: data?.fetchUserLoggedIn.email,
      name: data?.fetchUserLoggedIn.name,
      picture: data?.fetchUserLoggedIn.picture,
    })

  }, [data]);

  function onClickMoveToLoginPage () {
    router.push("/loginUser")
  }

  function onClickMoveToLogout () {
    localStorage.clear();
    alert("로그아웃 되었습니다");
    location.reload();
  }
  
  function onClickMoveToCreateUserPage (){
    router.push("/createUser")
  }

  function onClickMoveToMyPage () {
    router.push("/mypages")
  }
  
  return <LayoutHeaderUI
          // onClickMoveToHome={onClickMoveToHome}
          onClickMoveToLoginPage={onClickMoveToLoginPage}
          onClickMoveToCreateUserPage={onClickMoveToCreateUserPage}
          onClickMoveToMyPage={onClickMoveToMyPage}
          onClickMoveToLogout={onClickMoveToLogout}
          data={data}
          accessToken={accessToken}
        />
  
}
