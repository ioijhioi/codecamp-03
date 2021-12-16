import styled from '@emotion/styled'

export const Wrapper = styled.div`
    /* position: absolute; */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: relative;
    display:flex;
    /* justify-content:space-between; */
`
export const LandingPageWrapper = styled.img`
    width: 100%;
    
`

export const GoToWrapper =styled.div`    
`
export const GoToEnter = styled.button`
    /* vertical-align: middle; */
    position: absolute;
    top: 60%;
    left: 35%;
    border: none;
    /* transform: translate ( -50%, -40%); */
    background-color: transparent;
    cursor: pointer;

    :hover {
    color: white;
    }
`
export const GoToFont = styled.text`
    font-size: 20px;
    color:white;
`

export const GoToLoginPage = styled.button`
    vertical-align: middle;
    position: absolute;
    top: 60%;
    left: 55%;
    /* transform: translate ( -50%, -40%); */
    background-color: transparent;
    border: none;
    cursor: pointer;

    :hover {
    color: white;
  }
`