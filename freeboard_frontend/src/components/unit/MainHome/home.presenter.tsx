import {
    Wrapper,
    GoToPage,
} from "./home.styles"

export default function HomeUI (props) {

    return (
        <Wrapper>
            <GoToPage onClick= {props.onClickMoveToLoginPage}>로그인</GoToPage>
        </Wrapper>
    )
}