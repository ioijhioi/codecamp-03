import styled from '@emotion/styled'

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: relative;
    display:flex;
    justify-content:space-between;
    /* display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 15% auto 20%;
    grid-template-areas:
        "head"
        "body"
        "footer";
    
    @media (max-width: 375px) {
        grid-template-rows: 12% auto 20%;
    } */
`
export const LandingPageWrapper = styled.img`
    width: 100%;
    /* vertical-align: middle; */
    /* position: absolute; */
`

export const GoToWrapper =styled.div`
    /* width: 100%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    background-color: blue; */
    /* vertical-align: middle;
    position: absolute; */
    /* top: 50%;
    left: 40%;
    transform: translate ( -50%, -40%); */
    
`
export const GoToEnter = styled.button`
    /* display: inline-block; */
    vertical-align: middle;
    position: absolute;
    top: 60%;
    left: 35%;
    /* bottom: 10%; */
    transform: translate ( -50%, -40%);
    background-color: transparent;

`

export const GoToLoginPage = styled.button`
    vertical-align: middle;
    position: absolute;
    top: 60%;
    left: 55%;
    transform: translate ( -50%, -40%);
    background-color: transparent;
`