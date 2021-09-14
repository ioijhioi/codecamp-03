import BoardDetail from "../../../src/components/unit/board/detail/BoardDetail.container";
import Comment from "../../../src/components/unit/boardComment/wirte/Comment.container";
import CommentList from "../../../src/components/unit/boardComment/list/CommentList.container";

export default function BoardDetailPage() {
  return (
    <>
      <BoardDetail />;
      <Comment />;
      <CommentList />;
    </>
  );
}
