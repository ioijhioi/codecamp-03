import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";
import {IMyUpdateBoardInput} from "./BoardWrite.types"

export default function BoardsNewPage(props) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState([''])
  const fileRef = useRef<HTMLInputElement>()

  

  const [writer, setWriter] = useState("");
  const [mywriterError, setWriterError] = useState("");

  const [password, setPassword] = useState("");
  const [mypasswordError, setPasswordError] = useState("");

  const [title, setTitle] = useState("");
  const [mytitleError, setTitleError] = useState("");

  const [contents, setContent] = useState("");
  const [mycontentError, setContentError] = useState("");

  const [zipcode, setZipcode] = useState ("")
  // const [zipcodeError, setZipcodeError] = useState ("")
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  

  const [youtubeUrl, setYoutubeUrl] = useState ("")
  // const [youtubeError, setYoutubeError] = useState ("")

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE)

  function onChangeWriter(event) {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
    if (
      event.target.value !== "" &&
      password !== "" &&
      title !== "" &&
      contents !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }

    if (
      writer !== "" &&
      event.target.value !== "" &&
      title !== "" &&
      contents !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
    if (
      writer !== "" &&
      password !== "" &&
      event.target.value !== "" &&
      contents !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeContents(event) {
    setContent(event.target.value);
    if (event.target.value !== "") {
      setContentError("");
    }

    if (
      writer !== "" &&
      password !== "" &&
      title !== "" &&
      event.target.value !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  

  function onChangeYoutubeUrl(event){
    setYoutubeUrl(event.target.value)
  }

  function onClickAddressSearch() {
    setIsOpen(true);
  }
  function onChangeAddressDetail(event) {
    setAddressDetail(event.target.value);
  }

  function onCompleteAddressSearch(data: any) {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
  }

  async function onClickSignup() {
    if (writer === "") {
      setWriterError("이름이 없습니다");
    }

    if (password === "") {
      setPasswordError("비밀번호가 없습니다");
    }

    if (title === "") {
      setTitleError("제목이 없습니다");
    }

    if (contents === "") {
      setContentError("내용이 없습니다");
    }

    if (writer !== "" && password !== "" && title !== "" && contents !== "") {
      // if(zipcode === ("")){
      //   setZipcodeError("주소가 없습니다")

      // }

      // // if(youtube === ("")){
      // //   setYoutubeError("링크가 없습니다")

      // }

      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: password,
              title: title,
              contents: contents,
              youtubeUrl: youtubeUrl,
              boardAddress: {
                zipcode: zipcode,
                address: address,
                addressDetail: addressDetail,
              },
              images: [imageUrl]
            
            },
          },
        });

        console.log(result.data.createBoard._id);
        console.log(result);
        router.push(`/boards/${result.data.createBoard._id}`);
        // router.push('/boards/reqsd45wmwa') 원래 이건거
        alert("게시물을 등록합니다");
      } catch (error) {
        console.log("error");
      }
    }
  }

  async function onClickUpdate() {
    if (
      !title &&
      !contents &&
      !youtubeUrl &&
      !zipcode &&
      !address &&
      !addressDetail
    ) {
      alert("수정된 내용이 없습니다.");
      return;
    }
    const myUpdateboardInput: IMyUpdateBoardInput = {};
    if (title) myUpdateboardInput.title = title;
    if (contents) myUpdateboardInput.contents = contents;
    if (youtubeUrl) myUpdateboardInput.youtubeUrl = youtubeUrl;
    if (zipcode || address || addressDetail) {
      myUpdateboardInput.boardAddress = {};
      if (zipcode) myUpdateboardInput.boardAddress.zipcode = zipcode;
      if (address) myUpdateboardInput.boardAddress.address = address;
      if (addressDetail)
        myUpdateboardInput.boardAddress.addressDetail = addressDetail;
    }
    
    
    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: password,
          updateBoardInput: myUpdateboardInput,
        },
      });
      router.push(`/boards/${result.data.updateBoard._id}`);
    } catch (error) {
      // console.log(error)
      alert(error.message);
    }
  }
  // image파일업로드입니다.
  async function onChangeFile(event) {
    const myFile = event.target.files[0]
    if(!myFile){
      alert("파일이 없습니다")
      return;
    }
    if(myFile.size > 5 * 1024 * 1024) {
      alert("파일 용량이 너무 큽니다.(제한: 5MB)")
      return;
    }
    if(!myFile.type.includes("jpeg") && !myFile.type.includes("png")){
      alert("jpeg 또는 png만 업로드 가능합니다")
      return;
    }
    const result = await uploadFile({
      variables: {
          file: myFile,
      },
  })
  console.log(result.data.uploadFile.url)
  setImageUrl(result.data.uploadFile.url)
  }
function onClickDiv (){
  fileRef.current?.click()
}


  return (
    <BoardWriteUI
      isActive={isActive}
      isOpen={isOpen}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSignup={onClickSignup}
      mywriterError={mywriterError}
      mypasswordError={mypasswordError}
      mytitleError={mytitleError}
      mycontentError={mycontentError}
      isEdit={props.isEdit}
      onClickSignUp={onClickSignup}
      onClickUpdate={onClickUpdate}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      address={address}
      zipcode={zipcode}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onChangeFile={onChangeFile}
      onClickDiv={onClickDiv}
      fileRef={fileRef}
    />
  );
}
