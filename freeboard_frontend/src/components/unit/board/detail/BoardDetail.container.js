import {useRouter} from 'next/router'
import { useQuery } from '@apollo/client'
import BoardDetailUI from './BoardDetail.presenter'
import {FETCH_BOARD} from "./BoardDetail.queries"

export default function  BoardDeatil() {
    const router = useRouter();

    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.ssibal }
    });
    console.log(data, router)

    return (
        <BoardDetailUI data={data} />
    );
}