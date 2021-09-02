import { gql, useMutation} from '@apollo/client'



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

const CREATE_BOARD = gql`    
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput : $createBoardInput)
        {
          _id
        }
    }
`

export default function BoardsNewPage() {
  
  const [createBoard] = useMutation(CREATE_BOARD)
  const [mywriter, setWriter] = useState ("")
  const [mywriterError, setWriterError] = useState ("")

  const [mypassword, setPassword] = useState ("")
  const [mypasswordError, setPasswordError] = useState ("")

  const [mytitle, setTitle] = useState ("")
  const [mytitleError, setTitleError] = useState("")

  const [mycontents, setContent ] = useState ("")
  const [mycontentError, setContentError] = useState ("")

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
    if(event. target. value !==""){
      setPasswordError("")
    }
  }

  function onChangeTitle(event){
    setTitle(event.target.value)
    if(event.target.value !== ""){
      setTitleError("")
    }
  }

  function onChangeContent(event){
    setContent(event.target.value)
    if(event.target.value !== ""){
      setContentError("")
    }
  }

  // function onChangeZipcode(event){
  //   setZipcdoe(event.target.value)
  // }
  
  // function onChangeYoutube(event){
  //   setYoutube(event.target.value)
  // }


  async function onClickSignup(){

    if(mywriter ===("")){
      setWriterError("이름이 없습니다")
    }

    if(mypassword === ("")){
      setPasswordError("비밀번호가 없습니다")
    }

    if(mytitle === ("")){
      setTitleError("제목이 없습니다")
    }

    if(mycontents === ("")){
      setContentError("내용이 없습니다")
    }

    if(mywriter !== "" && mypassword !== "" && mytitle !== "" &&mycontents !== ""){
      alert('게시물을 등록합니다')
    }

    // if(zipcode === ("")){
    //   setZipcodeError("주소가 없습니다")

    // }

    // // if(youtube === ("")){
    // //   setYoutubeError("링크가 없습니다")

    // }
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: mywriter,
          password: mypassword,
          title: mytitle,
          contents: mycontents,
          // youtubeUrl: myyoutube       
        }
      }
    })
    console.log(result.data.createBoard._id)
  
  }
  
  
  
  return (
    <Wrapper>
      <Title>게시판 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer name="mywriter" type="text" placeholder="이름을 적어주세요." onChange={onChangeWriter} />
            <ErrorMessage>{mywriterError}</ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."onChange={onChangePassword} />
              <ErrorMessage>{mypasswordError}</ErrorMessage>
          
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject name="mytitle" type="text" placeholder="제목을 작성해주세요." onChange={onChangeTitle} />
          <ErrorMessage>{mytitleError}</ErrorMessage>
        
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents name="mycontents" placeholder="내용을 작성해주세요." onChange={onChangeContent} />
          <ErrorMessage>{mycontentError}</ErrorMessage>
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
        <Youtube name="myyoutube" placeholder="링크를 복사해주세요."  />
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
