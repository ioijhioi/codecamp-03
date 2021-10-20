import { 
  Wrapper, 
  // Header,
  Button,
  HeaderSearch,
  LogoBox,
  LoginInformation,
  LoginButton,
  CreateButton,
  // ADVBox,
} from "./LayoutHeader.styles";


export default function LayoutHeaderUI(props) {
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
          <LoginButton onClick={props.onClickMoveToLoginPage}>로그인 </LoginButton>
          <>|</>
          <CreateButton onClick={props.onClickMoveToCreateUserPage}>회원가입</CreateButton>
        </LoginInformation>
        {/* <ADVBox/> */}

      

    </Wrapper>
  )
}
