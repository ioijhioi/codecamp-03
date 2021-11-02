import { 
  Wrapper, 
  // Header,
  Button,
  HeaderSearch,
  LogoBox,
  LoginInformation,
  LoginButton,
  CreateButton,
  MyPicture,
  // ADVBox,
} from "./LayoutHeader.styles";


export default function LayoutHeaderUI(props: any) {
  return (
    <Wrapper>
      
        <Button>
          <LogoBox src="/images/layout/logo.png/"/>
        </Button>
        <HeaderSearch
          type="text"
          placeholder="검색하기"
        />
        <LoginInformation>
          {!props.accessToken && (
            <>
              <LoginButton onClick={props.onClickMoveToLoginPage}>LOGIN </LoginButton>
              <>|</>
              <CreateButton onClick={props.onClickMoveToCreateUserPage}>회원가입</CreateButton>
            </>
          )}
          {props.accessToken && (
            <>
              <MyPicture
                src={
                  props.data?.fetchUserLoggedIn.picutre
                    ? `http://storage.googleapis.com/${props.data?.fetchUserLoggedIn.picture}`
                    : "/images/layout/mypicture.png"
                }
                onClick={props.onClickMoveToMyPage}
              />
              <LoginButton onClick={props.onClickMoveToLogout}>LOGOUT </LoginButton>
            </>
          )}
        </LoginInformation>
        {/* <ADVBox/> */}

      

    </Wrapper>
  )
}
