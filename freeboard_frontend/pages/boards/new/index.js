import { useState } from 'react';
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
} from "../../../styles/BoardsNew";

export default function BoardsNewPage() {
  
  const [writer, setWriter] = useState ("")
  const [writerError, setWriterError] = useState ("")

  const [password, setPassword] = useState ("")
  const [passwordError, setPasswordError] = useState ("")

  const [title, setTitle] = useState ("")
  const [titleError, setTitleError] = useState("")

  const [content, setContent ] = useState ("")
  const [contentError, setContentError] = useState ("")

  // const [zipcode, setZipcdoe] = useState ("")
  // const [zipcodeError, setZipcodeError] = useState ("")

  // const [youtube, setYoutube] = useState ("")
  // const [youtubeError, setYoutubeError] = useState ("")
  
  function onChangeWriter(event){
    setWriter(event.target.value)
    if(event.target.value !== ""){
      setWriterError("")
    }
  }

  function onChangePassword(event){
    setPassword(event.target.value)
  }

  function onChangeTitle(event){
    setTitle(event.target.value)
  }

  function onChangeContent(event){
    setContent(event.target.value)
  }

  // function onChangeZipcode(event){
  //   setZipcdoe(event.target.value)
  // }
  
  // function onChangeYoutube(event){
  //   setYoutube(event.target.value)
  // }


  function onClickSignup(){

    if(writer ===("")){
      setWriterError("이름이 없습니다")
    }

    if(password === ("")){
      setPasswordError("비밀번호가 없습니다")
    }

    if(title === ("")){
      setTitleError("제목이 없습니다")
    }

    if(content === ("")){
      setContentError("내용이 없습니다")
    }

    // if(zipcode === ("")){
    //   setZipcodeError("주소가 없습니다")

    // }

    // // if(youtube === ("")){
    // //   setYoutubeError("링크가 없습니다")

    // }
  }
  
  
  
  return (
    <Wrapper>
      <Title>게시판 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer name="writer" type="text" placeholder="이름을 적어주세요." onChange={onChangeWriter} />
            <ErrorMessage>{writerError}</ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."onChange={onChangePassword} />
              <ErrorMessage>{passwordError}</ErrorMessage>
          
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject name="title" type="text" placeholder="제목을 작성해주세요." onChange={onChangeTitle} />
          <ErrorMessage>{titleError}</ErrorMessage>
        
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents name="contents" placeholder="내용을 작성해주세요." onChange={onChangeContent} />
          <ErrorMessage>{contentError}</ErrorMessage>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode name="zipcode" placeholder="07250"   />
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        <Address />
        <Address />
          {/* <ErrorMessage>{zipcodeError}</ErrorMessage> */}
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube name="youtube" placeholder="링크를 복사해주세요."  />
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
        <SubmitButton onClick={onClickSignup}>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
