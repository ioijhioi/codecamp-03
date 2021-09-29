import BoardCommentListUIItem from "./BoardCommentList.presenterItem";
import InfiniteScroll from "react-infinite-scroller";

export default function BoardCommentListUI(props) {
  // if (!props.data?.fetchBoardComments.length) return <></>
  return (
    <InfiniteScroll loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchBoardComments.map(el => (
        <BoardCommentListUIItem key={el._id} el={el} />
      ))}
    </InfiniteScroll>
  );
}
