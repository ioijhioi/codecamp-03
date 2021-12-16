import {
    Wrapper,
    LandingPageWrapper,
    GoToWrapper,
    GoToEnter,
    GoToFont,
    GoToLoginPage,
} from "./home.styles"

export default function HomeUI (props) {

    return (
        <Wrapper>
            <LandingPageWrapper src="/images/layout/anywhere.jpg"/>
            <GoToWrapper>
                <GoToEnter onClick={props.onClickMoveToMainpage}>
                    <GoToFont>
                        캠핑가기
                    </GoToFont>
                </GoToEnter>
                <GoToLoginPage onClick= {props.onClickMoveToLoginPage}>
                    <GoToFont>
                        로그인하기
                    </GoToFont></GoToLoginPage>
            </GoToWrapper>
        </Wrapper>
    )
}