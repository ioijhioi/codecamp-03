import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";

export default function BoardsNewPage(props) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [writer, setWriter] = useState("");
  const [mywriterError, setWriterError] = useState("");

  const [password, setPassword] = useState("");
  const [mypasswordError, setPasswordError] = useState("");

  const [title, setTitle] = useState("");
  const [mytitleError, setTitleError] = useState("");

  const [contents, setContent] = useState("");
  const [mycontentError, setContentError] = useState("");

  // const [zipcode, setZipcdoe] = useState ("")
  // const [zipcodeError, setZipcodeError] = useState ("")

  // const [youtube, setYoutube] = useState ("")
  // const [youtubeError, setYoutubeError] = useState ("")

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

  // function onChangeZipcode(event){
  //   setZipcdoe(event.target.value)
  // }

  // function onChangeYoutube(event){
  //   setYoutube(event.target.value)
  // }

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
              // youtubeUrl: myyoutube
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
    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: password,
          updateBoardInput: {
            title: title,
            contents: contents,
          },
        },
      });
      router.push(`/boards/${result.data.updateBoard._id}`);
    } catch (error) {
      // console.log(error)
      alert(error.message);
    }
  }

  return (
    <BoardWriteUI
      isActive={isActive}
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
    />
  );
}
