import { useRouter } from 'next/router';
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { useContext, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import {FETCH_USER_LOGGED_IN} from "./LayoutHeadr.queries"
import {GlobalContext} from "../../../../../pages/_app"

export default function LayoutHeader() {
  const router = useRouter();
  const {accessToken, setUerInfo} = useContext(GlobalContext)
  const {data} = useQuery(FETCH_USER_LOGGED_IN)

  // function onClickMoveToHome ( ) {
  //   router.push("")
  // }
  
  useEffect (() => {
    if (accessToken) return;

    setUerInfo({
      email: data?.fetchUserLoggedIn.email,
      name: data?.fetchUserLoggedIn.name,
      picture: data?.fetchUserLoggedIn.picture,
    })

  }, [data]);

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
          data={data}
          accessToken={accessToken}
        />
  
}
