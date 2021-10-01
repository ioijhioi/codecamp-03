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
  const [mySearch, setMySearch] = useState("");
  const [myKeyword, setMyKeyword] = useState("");
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  
  
  const { data, refetch } = useQuery<
    Pick<Query, "fetchBoards">,
    QueryFetchBoardsArgs
  >(FETCH_BOARDS, { variables: { page: startPage, search: mySearch } });
  const { data: dataBoardsCount } = useQuery<
    Pick<Query, "fetchBoardsCount">,
    QueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  function onClickMoveToBoardNew() {
    router.push("/boards/new");
  }

  function onClickMoveToBoardDetail(event:any) {
    router.push(`/boards/${event.target.id}`);
  }

  function onChangeSearch(event:any) {
    setMySearch(event.target.value);
  }

  function onClickSearch() {
    refetch({ search: mySearch, page: 1 });
    setMyKeyword(mySearch);
  }

  function onClickPage(event:any) {
    refetch({ search: myKeyword, page: Number(event.target.id) });
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
      mySearch={mySearch}
      myKeyword={myKeyword}
      onChangeSearch={onChangeSearch}
      onClickSearch={onClickSearch}
      onClickPage={onClickPage}
    />
  );
}
