import { Tooltip } from "antd";
import {
  Wrapper,
  Wrapper1,
  Wrapper1Head,
  HeadLeft,
  Images,
  Information,
  Writer,
  CreatedAt,
  Wrapper1Body,
  Title,
  BodyImages,
  Contents,
  Wrapper1Foot,
  Button,
  Youtube,
  LikeIcon,
  DislikeIcon,
  LikeWrapper,
  IconWrapper,
  LikeCount,
  DislikeCount,
  HeadRight,
  LocationIcon,
  Image,
} from "./BoardDetail.styles";



export default function BoardDetailUI(props) {
  return (
    <Wrapper>
      <Wrapper1>
        <Wrapper1Head>
          <HeadLeft>
            <Images src="/images/vector.png" />
            <Information>
              <Writer>{props.data?.fetchBoard.writer}</Writer>
              <CreatedAt>{props.data?.fetchBoard.createdAt.slice(0, 10)}</CreatedAt>
            </Information>
          </HeadLeft>
          <HeadRight>
            <div></div>
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
            >
              <LocationIcon/>
            </Tooltip>
          </HeadRight>
        </Wrapper1Head>
        <Wrapper1Body>
          <Title>{props.data?.fetchBoard.title}</Title>
          <BodyImages>
            {props.data?.fetchBoard.images
              ?.filter((el: string) => el !== "")
              .map((el: string) => (
                <Image key={el} src={`https://storage.googleapis.com/${el}`} />
              ))}
          </BodyImages>
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
        </Wrapper1Body>
        <Wrapper1Foot>
          <Button onClick={props.onClickMoveToList}>????????????</Button>
          <Button onClick={props.onClickMoveToEdit}>????????????</Button>
          <Button onClick={props.onClickDelete}>????????????</Button>
        </Wrapper1Foot>
      </Wrapper1>
    </Wrapper>
  );
}
