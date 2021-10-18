import { 
  Wrapper, 
  // Header,
  Button,
  LogoBox,
  LoginInformation,
  LoginButton,
  CreateButton,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUI(props) {
  return (
    <Wrapper>
      
        <Button>
          <LogoBox src="/images/layout/logo.png/"/>
        </Button>
        <LoginInformation>
          <LoginButton onClick={props.onClickMoveToLoginPage}>로그인</LoginButton>
          <CreateButton onClick={props.onClickMoveToCreateUserPage}>회원가입</CreateButton>
      </LoginInformation>
      

    </Wrapper>
  )
}
