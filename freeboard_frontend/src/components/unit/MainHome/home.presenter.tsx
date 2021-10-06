import {
    Wrapper,
    GoToEnter,
    GoToLoginPage,
} from "./home.styles"

export default function HomeUI (props) {

    return (
        <Wrapper>
            <GoToEnter onClick={props.onClickMoveToMainpage}>입장하기</GoToEnter>
            <GoToLoginPage onClick= {props.onClickMoveToLoginPage}>로그인</GoToLoginPage>
        </Wrapper>
    )
}