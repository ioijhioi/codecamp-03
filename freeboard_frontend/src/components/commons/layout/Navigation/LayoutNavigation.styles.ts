import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 50px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: black;
  border-top: 1px solid  #bdbdbd;
  /* border-bottom: 1px solid #bdbdbd; */
  padding: 0 30px;
  margin: 0 auto;
  width: 1130px;
 
`;

export const MenuItem = styled.div`
  margin: 0px 60px;
  cursor: pointer;
  /* :not(:first-child) {border-left: 1px dotted olive};   예외를 주어 변동적으로 css를 먹일수 있다.*/

  :hover {
    color: orange;
  }
`;
