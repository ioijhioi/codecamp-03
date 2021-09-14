import {
  Wrapper,
  Title,
  InputWrapper,
  Input,
  ContentsWrapper,
  Contents,
  BottomWrapper,
  ContentsLength,
  Button,
} from "./Comment.styles";

export default function CommentWriteUI(props) {
  return (
    <Wrapper>
      <Title>댓글</Title>
      <InputWrapper>
        <Input
          placeholder="작성자"
          readOnly={Boolean(props.data?.writer)}
          defaultValue={props.data?.writer}
          onchange={props.onChangeMyWriter}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          onchange={props.onChangeMyPassword}
        />
      </InputWrapper>
      <ContentsWrapper>
        <Contents
          defaultValue={props.data?.contents}
          onChange={props.onChangeMyContent}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <BottomWrapper>
          <ContentsLength>0/100</ContentsLength>
          <Button
            id={props.data?._id}
            onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </Button>
        </BottomWrapper>
      </ContentsWrapper>
    </Wrapper>
  );
}
