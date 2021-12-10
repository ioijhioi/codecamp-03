import {
    Wrapper,
    LandingPageWrapper,
    GoToWrapper,
    GoToEnter,
    GoToLoginPage,
} from "./home.styles"

export default function HomeUI (props) {

    return (
        <Wrapper>
            <LandingPageWrapper src="/images/layout/anywhere.jpg"/>
            <GoToWrapper>
                <GoToEnter onClick={props.onClickMoveToMainpage}>캠핑가기</GoToEnter>
                <GoToLoginPage onClick= {props.onClickMoveToLoginPage}>로그인</GoToLoginPage>
            </GoToWrapper>
        </Wrapper>
    )
}