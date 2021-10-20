import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 1200px;
    
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    align-items:center;
    padding-top: 50px;
`
export const Header = styled.div`
    display: flex;
    align-items: center;
    /* background-color: green; */
    font-size: 30px;
    
`

export const Body = styled.div`
    width: 800px;
    height: 280px;
    display: flex;
    align-items: center;
    flex-direction: column;
    /* background-color: red; */
`
export const Login = styled.div `
  display: flex;
  flex-direction: column;
  
`

export const Email = styled.input `
  width: 384px;
  height: 64px;
  
  border: 1px solid  #FFFFFF;
  box-sizing: border-box;
  border-radius: 16px;
  margin-top: 10px;
  background-color:whitesmoke;
`
export const Password = styled.input `
  width: 384px;
  height: 64px;
  
  border: 1px solid  #FFFFFF;
  box-sizing: border-box;
  border-radius: 16px;
  margin-top: 10px;
  background-color:whitesmoke;
`

export const OptionWrapper= styled.div`
  padding-top: 10px;
  margin-top: 10px;
`
export const RadioButton = styled.input`
  cursor: pointer;
  
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  /* font-weight: 500; */
  cursor: pointer;
`;

export const LoginButton = styled.button`
  width: 384px;
  height: 64px;
  
  border: 1px solid  #FFFFFF;
  box-sizing: border-box;
  border-radius: 16px;
  margin-top: 10px;
    
`;
export const Footer = styled.div`
  border-top: 2px solid  #bdbdbd;
  width: 384px;
  display: flex;
  align-items: center;
  /* background-color: red; */
  
`

export const LoginItem = styled.div`
      
    cursor: pointer;
    
    font-size:14px;
    display: flex;
    align-items: center;
    text-align: center;

    :hover {
        color: orange;
  }
`