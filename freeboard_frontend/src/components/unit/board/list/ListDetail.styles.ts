import styled from "@emotion/styled";

export const Wrapper = styled.div`
  //background-color:
  width: 1200px;
  margin: 100px;
`;

export const TopWrapper = styled.div`
  /* background-color: red; */
`;
export const TopHeader = styled.div`
  background-color: #14539a;
  text-align: center;
  font-size: 36px;
`;

export const TopBody = styled.div`
  /* background-color: red; */
`;

export const BestBox = styled.div`
  background-color: yellow;
  width: 287px;
  height: 257px;
`;

export const BottonWrapper = styled.div`
  /* background-color: red; */
`;
export const BottonHeader = styled.div`
  /* background-color: red; */
`;

export const InputBottonWrapper = styled.div`
  width: 776px;
  height: 52px;
  display:flex;
  flex-direction: row;
  justify-content: center;
`;
export const Search = styled.input`
  background-color: #F2F2F2;
  width: 776px;
  height: 52px;
  
`;

export const SearchButton = styled.div`
  
  padding: 14px 16px;
  background-color: gray;
  width: 120px;
`

export const BottonBody = styled.div`
  /* background-color: red; */
`;

export const Information = styled.div`
  /* background-color: red; */
`;

export const Contents = styled.div`
  /* background-color: red; */
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
`;

interface Props {
  isMatched: boolean;
}
export const Myword = styled.span`
  color: ${((props: Props) => (props.isMatched ? "red" : "black"))};
`

// const Page = styled.span`
//     padding: 0px 10px;
//     cursor: pointer;
// `
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;

  :hover {
    color: blue;
  }
`;

// export const Column = styled.div`
//     background-color: white;
// `
export const BottonFoot = styled.div`
  /* background-color: red; */
`;

export const PencilIcon = styled.img``;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;
