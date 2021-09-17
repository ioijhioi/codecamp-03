import BoardDetail from "../../../src/components/unit/board/detail/BoardDetail.container";
import BoardCommentWrite from "../../../src/components/unit/boardComment/wirte/BoardCommentWrite.container";
import BoardCommentList from "../../../src/components/unit/boardComment/list/BoardCommentList.container";

export default function BoardDetailPage() {
  return (
    <>
      <BoardDetail />;
      <BoardCommentWrite />;
      <BoardCommentList />;
    </>
  );
}
