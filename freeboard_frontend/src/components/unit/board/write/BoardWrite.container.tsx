import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";
import {IMyUpdateBoardInput} from "./BoardWrite.types"

export default function BoardsNewPage(props) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  

  

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
  const [files, setFiles ] = useState<(File | null )[]>([null, null, null]);

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
      setWriterError("????????? ????????????");
    }

    if (password === "") {
      setPasswordError("??????????????? ????????????");
    }

    if (title === "") {
      setTitleError("????????? ????????????");
    }

    if (contents === "") {
      setContentError("????????? ????????????");
    }

    if (writer !== "" && password !== "" && title !== "" && contents !== "") {
      // if(zipcode === ("")){
      //   setZipcodeError("????????? ????????????")

      // }

      // // if(youtube === ("")){
      // //   setYoutubeError("????????? ????????????")

      // }

      try {
        const uploadFiles = files 
          .filter((el) => el) 
          .map((el) => uploadFile({ variables: { file: el } }));
        const results = await Promise.all(uploadFiles);
        const myImages = results.map((el) => el.data.uploadFile.url);
        
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password: password,
              title: title,
              contents: contents,
              youtubeUrl: youtubeUrl,
              boardAddress: {
                zipcode: zipcode,
                address: address,
                addressDetail: addressDetail,
              },
              
              images: myImages,
            
            },
          },
        });

        console.log(result.data.createBoard._id);
        console.log(result);
        router.push(`/boards/${result.data.createBoard._id}`);
        // router.push('/boards/reqsd45wmwa') ?????? ?????????
        alert("???????????? ???????????????");
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
      alert("????????? ????????? ????????????.");
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
  // function onChangeFileUrls (fileUrl:string, index: number){
  //   const newFileUrls = [...fileUrls];
  //   newFileUrls[index] = fileUrl;
  //   setFileUrls(newFileUrls)
  function onChangeFiles(file: File, index: number) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
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
      onClickUpdate={onClickUpdate}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      address={address}
      zipcode={zipcode}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onChangeFiles={onChangeFiles}
      
    />
  );
}
