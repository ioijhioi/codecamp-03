import { 
  Wrapper, 
  Header,
  Button,
  LogoBox,
  LoginInformation,
  LoginButton,
  // CreateButton,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUI(props) {
  return (
    <Wrapper>
      <Header>
        <Button>
          <LogoBox onClick={props.onClickMoveToMainMenu}/>
        </Button>
      <LoginInformation>
          <LoginButton onClick={props.onClickMoveToLoginPage}>로그인</LoginButton>
          {/* <CreateButton onClick={props.onClickMoveToMainMenu}>회원가입</CreateButton> */}
      </LoginInformation>
      </Header>

    </Wrapper>
  )
}
