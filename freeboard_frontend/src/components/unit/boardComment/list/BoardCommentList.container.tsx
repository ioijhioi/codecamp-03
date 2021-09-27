import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  Query,
  QueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types"
import BoardCommentListUI from "./BoardCommentList.presenter";
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";

export default function BoardCommentList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<Query, "fetchBoardComments">,
    QueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  function onLoadMore() {
    if (!data) return;

    fetchMore ({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult}) =>{
        return {
          fetchBoardComments: [
              ...prev.fetchBoardComments,
              ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  }

  return <BoardCommentListUI data={data} onLoadMore={onLoadMore}/>;
}
