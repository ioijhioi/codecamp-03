import { Tooltip } from "antd";
import {
  Wrapper,
  Wrapper1,
  Wrapper1_Head,
  Head_Left,
  Images,
  Information,
  Writer,
  CreatedAt,
  // Head_Right,
  Wrapper1_Body,
  Title,
  Body_Images,
  Contents,
  Wrapper1_Foot,
  Button,
  Youtube,
  LikeIcon,
  DislikeIcon,
  LikeWrapper,
  IconWrapper,
  LikeCount,
  DislikeCount,
} from "./BoardDetail.styles";

export default function BoardDetailUI(props) {
  return (
    <Wrapper>
      <Wrapper1>
        <Wrapper1_Head>
          <Head_Left>
            <Images src="/images/vector.png" />
            <Information>
              <Writer>{props.data?.fetchBoard.writer}</Writer>
              <CreatedAt>{props.data?.fetchBoard.createdAt}</CreatedAt>
            </Information>
          </Head_Left>
          {/* <Head_Right>
                        <div></div>
                        <div></div>
                    </Head_Right> */}
        </Wrapper1_Head>
        <Wrapper1_Body>
          <Title>{props.data?.fetchBoard.title}</Title>
          <Body_Images src="/images/image.png" />
          <Contents>{props.data?.fetchBoard.contents}</Contents>
          <Youtube
            url={props.data?.fetchBoard.youtubeUrl}
            width="486px"
            height="240px"
          />
          <LikeWrapper>
            <IconWrapper>
              <LikeIcon onClick={props.onClickLike} />
              <LikeCount>{props.data?.fetchBoard.likeCount}</LikeCount>
            </IconWrapper>
            <IconWrapper>
              <DislikeIcon onClick={props.onClickDislike} />
              <DislikeCount>{props.data?.fetchBoard.dislikeCount}</DislikeCount>
            </IconWrapper>
          </LikeWrapper>
        </Wrapper1_Body>
        <Wrapper1_Foot>
          <Button onClick={props.onClickMoveToList}>목록으로</Button>
          <Button onClick={props.onClickMoveToEdit}>수정하기</Button>
          <Button onClick={props.onClickDelete}>삭제하기</Button>
        </Wrapper1_Foot>
      </Wrapper1>
    </Wrapper>
  );
}
