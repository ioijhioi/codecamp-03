// import AnswerWrite from '../answerWrite/AnswerWrite.container';
// import AnswerList from '../answerList/AnswerList.container';
import {
    Wrapper,
    CommentMap,
    Row,
    CommentProfileImageBox,
    CommentProfileImage,
    MapBox,
    MapWriteRating,
    MapWriter,
    MapContents,
    EditBox,
    CommentEditButton,
    CommentDeleteButton,
    MapDate,
} from './MarketsCommentList.styles'
// import {useState} from "react"
import MarketsCommentWrite from "../write/MarketsCommentWrite.container"

export default function ProductCommentListUI(props) {
    // function onClickUpdate() {
    //     setIsQuestionEdit(true);
    //   }
    
    //   function onClickOpenAnswer() {
    //     serIsOpenAnswer(true);
    //   }
    
    return (
      <>
        {!props.isEdit ? (
          <Wrapper>
            <CommentMap>
              <Row>
                <CommentProfileImageBox>
                  <CommentProfileImage src="/images/profile.png" />
                </CommentProfileImageBox>
                <MapBox>
                  <MapWriteRating>
                    <MapWriter>{props.el?.user?.name}</MapWriter>
                  </MapWriteRating>
                  <MapContents>{props.el?.contents}</MapContents>
                </MapBox>
  
                <EditBox>
                  <CommentEditButton
                    src="/images/edit.png"
                    onClick={props.onClickEdit}
                  />
                  <CommentDeleteButton
                    id={props.el._id}
                    src="/images/delete.png"
                    onClick={props.onClickDelete}
                  />
                  <div id={props.el._id} onClick={props.onClickAnswer}>
                    <img src="/images/answer.png" />
                  </div>
                </EditBox>
              </Row>
              <MapDate>2020.20.20</MapDate>
            </CommentMap>
          </Wrapper>
        ) : (
          <MarketsCommentWrite
            isEdit={props.isEdit}
            el={props.el}
            setIsEdit={props.setIsEdit}
          />
        )}
  
        {/* {props.answersData?.fetchUseditemQuestionAnswers.map((el) => (
          <AnswerList el={el} el2={props.el} />
        ))}
  
        {props.isAnswer && (
          <AnswerWrite el={props.el} setIsAnswer={props.setIsAnswer} />
        )} */}
      </>
    );
  }