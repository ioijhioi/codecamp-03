import { useQuery } from "@apollo/client";
import ListDetailUI from "./ListDetail.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./ListDetail.queries";
import { useRouter } from "next/router";
import { useState } from 'react';
import {
  Query,
  QueryFetchBoardsArgs,
  QueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types"

export default function ListDetail() {
  
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery<
    Pick<Query, "fetchBoards">,
    QueryFetchBoardsArgs
  >(FETCH_BOARDS, { variables: { page: startPage } });
  const { data: dataBoardsCount } = useQuery<
    Pick<Query, "fetchBoardsCount">,
    QueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  function onClickMoveToBoardNew() {
    router.push("/boards/new");
  }

  function onClickMoveToBoardDetail(event) {
    router.push(`/boards/${event.target.id}`);
  }

  return (
    <ListDetailUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      refetch={refetch}
      startPage={startPage}
      setStartPage={setStartPage}
      count={dataBoardsCount?.fetchBoardsCount}
    />
  );
}
