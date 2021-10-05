
import {
    Wrapper,
    Header,
    Body,
    InputWrapper,
    Label,
    Email,
    Writer,
    Password,
    SubmitButton,
    ErrorMessage,

} from "./createUser.styles"

export default function CreateUserPageUI (props) {

    return (
        <Wrapper>
            <Header>회원가입</Header>
            <Body>
                <InputWrapper>
                    <Label>이메일</Label>
                    <Email
                        name="myEmail"
                        type="email"
                        placeholder="이메일을 입력해주세요."
                        onChange={props.onChangeEmail}
                    />
                    <ErrorMessage>{props.myEmailError}</ErrorMessage>
                </InputWrapper>
                <InputWrapper>
                    <Label>이름</Label>
                    <Writer
                        name="myWriter"
                        type="text"
                        placeholder="이름을 입력해주세요."
                        onChange={props.onChangeWriter}
                    />
                    <ErrorMessage>{props.mywriterError}</ErrorMessage>
                </InputWrapper>
                <InputWrapper>
                    <Label>비밀번호</Label>
                    <Password 
                        name="password"
                        type="password"
                        placeholder="비밀번호를 입력해주세요."
                        onChange={props.onChangePassword}
                    />
                    <ErrorMessage>{props.mypasswordError}</ErrorMessage>
                </InputWrapper>
                <InputWrapper>
                    <Label>비밀번호 확인</Label>
                    <Password
                        name="password"
                        type="password"
                        placeholder="비밀번호를 입력해주세요."
                        // onChange={props.onChangePassword}
                    />
                </InputWrapper>
                <ErrorMessage>{props.mypasswordError}</ErrorMessage>
                <SubmitButton onClick={props.onClickSubmit}>
                    회원가입하기
                </SubmitButton>
            </Body>
        </Wrapper>
    )
}