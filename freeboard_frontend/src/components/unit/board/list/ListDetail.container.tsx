import { useQuery } from "@apollo/client";
import ListDetailUI from "./ListDetail.presenter";
import { FETCH_BOARDS } from "./ListDetail.queries";
import { useRouter } from "next/router";

export default function ListDetail() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();

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
    />
  );
}
