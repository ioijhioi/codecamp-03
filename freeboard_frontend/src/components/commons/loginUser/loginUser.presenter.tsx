
import {
    Wrapper,
    Header,
    Body,
    Login,
    Email,
    Password,
    RadioButton,
    RadioLabel,
    LoginButton,
    Footer,
    LoginItem,
} from "./loginUser.styles"

export default function LoginUserPageUI () {

    return (
        <Wrapper>
            <Header>
                로그인페이지
            </Header>
            <Body>
                <Login>
                    <Email></Email>
                    <Password></Password>
                    <RadioButton></RadioButton>
                    <RadioLabel></RadioLabel>
                    <LoginButton></LoginButton>
                </Login>
            </Body>
            <Footer>
                <LoginItem></LoginItem>
                <LoginItem></LoginItem>
                <LoginItem></LoginItem>
            </Footer>
        </Wrapper>
    )
}