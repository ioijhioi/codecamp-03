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
  
  Wrapper,
  Writer,
  WriterWrapper,
  Youtube,
  Zipcode,
  ZipcodeWrapper,
  ErrorMessage,
} from "./BoardWrite.styles";
import {Modal} from "antd"
import DaumPostcode from 'react-daum-postcode';
import Uploads01 from "../../../commons/uploads/01/Uploads01.container"

export default function BoardWriteUI(props) {
  return (
    <>
      {props.isOpen && (
        <Modal visible={true}>
          <DaumPostcode onComplete={props.onCompleteAddressSearch} autoClose />

        </Modal>
      )}  
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
              readOnly={Boolean(props.data?.fetchBoard.writer)}
              defaultValue={props.data?.fetchBoard.writer}
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
            <Zipcode name="zipcode" placeholder="07250" readOnly
                value={
                  props.zipcode || props.data?.fetchBoard.boardAddress?.zipcode
                } />
            <SearchButton onClick={props.onClickAddressSearch}>우편번호 검색</SearchButton>
          </ZipcodeWrapper>
          <Address 
            readOnly
            value={
              props.address || props.data?.fetchBoard.boardAddress?.address
            }
          />
          <Address 
            onChange={props.onChangeAddressDetail}
            defaultValue={props.data?.fetchBoard.boardAddress?.addressDetail}
          />
          {/* <ErrorMessage>{zipcodeError}</ErrorMessage> */}
        </InputWrapper>
        <InputWrapper>
          <Label>유튜브</Label>
          <Youtube name="myyoutube" 
                    placeholder="링크를 복사해주세요." 
                    onChange={props.onChangeYoutubeUrl} 
                    defaultValue={props.data?.fetchBoard.youtubeUrl} />
          {/* <ErrorMessage>{youtubeError}</ErrorMessage> */}
        </InputWrapper>
        <ImageWrapper>
          <Label>사진첨부</Label>
          {props.fileUrls.map((el, index) => (
            <Uploads01
              key={`${el}_${index}`}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
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
    </>
  );
}
