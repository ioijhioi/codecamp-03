import styled from "@emotion/styled";
import ReactPlayer from "react-player";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
  /* display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center; */
`;

export const Wrapper1 = styled.div`
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  border: solid 1px black;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
`;

export const Wrapper1_Head = styled.div`
  width: 100%;
  /* height: 160px; */

  border: solid 1px black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Head_Left = styled.div`
  /* border: 1px solid black;
    width : 498px;
    height: 60px;
    
    display:flex;
    flex-direction: row;
    align-items: flex-start; */
  display: flex;
  flex-direction: row;
`;

export const Images = styled.img`
  margin-right: 10px;
`;

// export const Head_Right = styled.div`
//     width : 498px;
//     height: 60px;
//     border: solid 1px red;
// `
export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Writer = styled.div``;

export const CreatedAt = styled.div``;

export const Wrapper1_Body = styled.div`
  width: 996px;
  height: 1200px;
  /* background-color: skyblue; */
`;

export const Title = styled.h1`
  /* font-family: 'Noto Sans CJK KR';
    src: url('https://noonnu.cc/font_page/34');
    font-weight: normal;
    font-style: normal; */
  padding-top: 80px;
`;

export const Body_Images = styled.img``;

export const Wrapper1_Foot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const Contents = styled.div`
  width: 996px;
  height: 96px;
  padding-top: 40px;
  padding-bottom: 120px;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;

  :hover {
    background-color: gold;
    border-color: white;
  }
`;

export const Youtube = styled(ReactPlayer)`
  margin: auto;
`;

export const LikeWrapper = styled.div`
  padding-top: 160px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  text-align: center;
`;

export const LikeIcon = styled(LikeOutlined)`
  font-size: 24px;
  color: #ffd600;
  margin: 0px 20px;
  cursor: pointer;
`;

export const DislikeIcon = styled(DislikeOutlined)`
  font-size: 24px;
  color: #828282;
  margin: 0px 20px;
  cursor: pointer;
`;

export const LikeCount = styled.div`
  color: #ffd600;
`;

export const DislikeCount = styled.div`
  color: #828282;
`;
