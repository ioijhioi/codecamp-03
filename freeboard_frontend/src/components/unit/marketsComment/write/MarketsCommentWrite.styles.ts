import styled from '@emotion/styled';
import {Rate} from "antd";


export const Wrapper = styled.div`
    width: 1200px;
    background-color: green;
`

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const Header = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
  border: 1px solid lightgray;
  margin-right: 20px;
`;

export const Star = styled(Rate)``;

export const ContentWrapper = styled.div`
  border: 1px solid lightgray;
`;

export const Content = styled.textarea`
  width: 100%;
  min-height: 108px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid lightgray;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentLength = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: gray;
`;

export const Button = styled.div`
  width: 91px;
  height: 51px;
  background-color: yellow;
  color: black;
  cursor: pointer;
  box-shadow: 0px 0px 5px gray;
`;

export const CommentIcon = styled.img``