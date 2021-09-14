import {
  Address,
  ButtonWrapper,
  CancelButton,
  Contents,
  ImageWrapper,
  InputWrapper,
  Label,
  OptionWrapper,
  Password,
  RadioButton,
  RadioLabel,
  SearchButton,
  Subject,
  SubmitButton,
  Title,
  UploadButton,
  Wrapper,
  Writer,
  WriterWrapper,
  Youtube,
  Zipcode,
  ZipcodeWrapper,
  ErrorMessage,
} from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <Wrapper>
      <Title>{props.isEdit ? "게시판 수정" : "게시판 등록"}</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer
            name="mywriter"
            type="text"
            placeholder="이름을 적어주세요."
            onChange={props.onChangeWriter}
          />
          <ErrorMessage>{props.mywriterError}</ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={props.onChangePassword}
          />
          <ErrorMessage>{props.mypasswordError}</ErrorMessage>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject
          name="mytitle"
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={props.onChangeTitle}
        />
        <ErrorMessage>{props.mytitleError}</ErrorMessage>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents
          name="mycontents"
          placeholder="내용을 작성해주세요."
          onChange={props.onChangeContents}
        />
        <ErrorMessage>{props.mycontentError}</ErrorMessage>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode name="zipcode" placeholder="07250" />
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        <Address />
        <Address />
        {/* <ErrorMessage>{zipcodeError}</ErrorMessage> */}
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube name="myyoutube" placeholder="링크를 복사해주세요." />
        {/* <ErrorMessage>{youtubeError}</ErrorMessage> */}
      </InputWrapper>
      <ImageWrapper>
        <Label>사진첨부</Label>
        <UploadButton>
          {/* <input
                type="file"
                style={{ display: "none" }}
                ref={fileRef}
                /> */}
          <div>+</div>
          <div>Upload</div>
        </UploadButton>
        <UploadButton>
          <div>+</div>
          <div>Upload</div>
        </UploadButton>
        <UploadButton>
          <div>+</div>
          <div>Upload</div>
        </UploadButton>
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인설정</Label>
        <RadioButton type="radio" id="youtube" name="radio-button" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <RadioButton type="radio" id="image" name="radio-button" />
        <RadioLabel htmlFor="image">사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        <CancelButton>취소하기</CancelButton>
        {!props.isEdit && (
          <SubmitButton
            onClick={props.onClickSignup}
            isActive={props.isActive}
            disabled={!props.isActive}
          >
            등록하기
          </SubmitButton>
        )}
        {props.isEdit && (
          <SubmitButton onClick={props.onClickUpdate} isActive={true}>
            수정하기
          </SubmitButton>
        )}
      </ButtonWrapper>
    </Wrapper>
  );
}
