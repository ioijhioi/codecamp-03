
import {
    Wrapper,
    Header,
    Body,
    Login,
    Email,
    Password,
    OptionWrapper,
    RadioButton,
    RadioLabel,
    LoginButton,
    Footer,
    LoginItem,
} from "./loginUser.styles"

export default function LoginUserPageUI (props) {

    return (
        <Wrapper>
            <Header>
                로그인페이지
            </Header>
            <Body>
                <Login>
                    <Email
                        name="myEmail"
                        type="text"
                        placeholder="이메일을 입력해주세요."
                        onChange={props.onChangeEmail}
                    />
                    <Password
                        name="myPassword"
                        type="password"
                        placeholder="비밀번호를 입력해주세요"
                        onChange={props.onChangePassword}
                    />
                <OptionWrapper>   
                    <RadioButton type="radio" name="radio-button"/>
                    <RadioLabel htmlFor="login">로그인 상태 유지</RadioLabel>
                </OptionWrapper>
                    <LoginButton onClick={props.onClickLogin}>로그인하기</LoginButton>
                </Login>
            </Body>
            <Footer>
                회원가입이 안되어 있나요?
                <LoginItem onClick={props.onClickMoveToCreateUserPage}>회원가입하기</LoginItem>
            </Footer>
        </Wrapper>
    )
}