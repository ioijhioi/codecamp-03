import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import {  useState } from 'react';
import {
    FETCH_USED_ITEM_QUESTIONS,
    // UPDATE_USED_ITEM_QUESTION,
} from "../list/MarketsCommentList.queries"
import MarketsCommentUI from "./MarketsCommentWrite.presenter"
import {CREATE_USED_ITEM_QUESTION} from "./MarketsCommentWrite.queries"

export default function MarketsComment (props){

    const [contents, setContents] = useState("");
    const router = useRouter();
    // const inputRef = useRef<HTMLInputElement>()

    // const {data} = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    //     variables: { useditemId: router.query.useditemId},
    // })
    // console.log(data)

    const [createUseditemQuestion]= useMutation(CREATE_USED_ITEM_QUESTION);
    // const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);

    function onChangeCommentContents(event) {
        setContents(event.target.value);
    }
    
    async function onClickQuestion() {
      console.log("123", router.query.useditemId)
      try {
        await createUseditemQuestion({
          variables: {
              useditemId: router.query.useditemId,
              createUseditemQuestionInput: {
                  contents
              },
            },
            refetchQueries: [
              {
                query: FETCH_USED_ITEM_QUESTIONS,
                variables: { useditemId: router.query.useditemId },
              },
            ],
        });
        alert("댓글을 등록합니다");
      } catch (error) {
        alert(error.message);
      }
    }

    // function onClickQuestionEdit(event) {
    //     // useEffect(() => {
    //     //   setContents(props.el.contents);
    //     // });
    
    //     updateUseditemQuestion({
    //       variables: {
    //         updateUseditemQuestionInput: {
    //           contents,
    //         },
    //         useditemQuestionId: event.target.id,
    //       },
    //       refetchQueries: [
    //         {
    //           query: FETCH_USED_ITEM_QUESTIONS,
    //           variables: { useditemId: router.query.useditemId },
    //         },
    //       ],
    //     });
    //     props.setIsEdit(false);
    //   }
    return (
        <MarketsCommentUI
            onChangeCommentContents={onChangeCommentContents}
            onClickQuestion={onClickQuestion}
            // inputRef={inputRef}
            isEdit={props.isEdit}
            el={props.el}
            // onClickQuestionEdit={onClickQuestionEdit}
        />
    )
}