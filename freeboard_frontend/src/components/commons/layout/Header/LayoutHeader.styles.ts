import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1130px;
  height: 100%;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  

  font-family: "my-font";
  /* background-color: blue; */
`;

// export const Header = styled.div`
//   width: 250px;
//   display:flex;
//   font-family: "my-font";
// `
export const Button = styled.div`
  width: 200px;
  height: 60px;
  cursor: pointer;
  display: flex;
`

export const HeaderSearch = styled.input`
  width: 350px;
  height:40px;
  cursor: pointer;
  margin-top: 13px;
  border-radius: 10px;
`

export const LogoBox = styled.img`
  width: 250px;
  height: 60px;
  
  cursor: pointer;
 
`
export const LoginInformation = styled.div`
  width: 250px;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: skyblue; */
  justify-content: flex-end;
`

export const LoginButton = styled.div`
  margin: 10px;
  color: #5729ff;
  cursor: pointer;
  display: flex;
  align-items:flex-end;
`

export const CreateButton = styled.div`
  margin: 10px;
  color: #5729ff;
  cursor: pointer;
  display: flex;
  align-items:flex-end;
`

export const MyPicture = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 20px;
  cursor: pointer;
  border-radius: 50%;
  :hover {
    height: 52px;
    width: 52px;
  }
`
export const ADVBox = styled.div`
    width: 196px;
    position: sticky;
    bottom: 50px;
    left: 3000px;
    background-color: blue;
`
