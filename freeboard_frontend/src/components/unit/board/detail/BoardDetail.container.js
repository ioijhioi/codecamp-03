import {useRouter} from 'next/router'
import { useQuery, useMutation } from '@apollo/client'
import BoardDetailUI from './BoardDetail.presenter'
import {FETCH_BOARD, DELETE_BOARD} from "./BoardDetail.queries"

export default function  BoardDeatil() {
    const router = useRouter();
    const [deleteBoard] = useMutation(DELETE_BOARD);

    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.boardId },
    });
    console.log(data, router)

    function onClickMoveToList() {
        router.push("/boards");
    }

    function onClickMoveToEdit() {
        router.push(`/boards/${router.query.boardId}/edit`);  
        //router.push(`/boardEdit/${router.query.boardId}/edit`) <---게시판 수정하기
    }

    async function onClickDelete() {
        try {
            await deleteBoard({ variables: { boardId: router.query.boardId } });
            alert("게시물이 삭제되었습니다.");
            router.push("/boards");
        } catch (error) {
            alert(error.message);
        }
    }


    return (
        <BoardDetailUI 
            data={data}
            onClickMoveToList={onClickMoveToList}
            onClickMoveToEdit={onClickMoveToEdit}
            onClickDelete={onClickDelete}
        />
    );
}