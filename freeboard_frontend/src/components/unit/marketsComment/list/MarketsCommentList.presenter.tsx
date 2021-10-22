import ProductCommentListUI from "./MarketsCommentList.presenteritem"
import InfiniteScroll from "react-infinite-scroller"

export default function MarketCommentListUI(props) {
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchUseditemQuestions.map((el) => (
        <ProductCommentListUI
          key={el._id}
          el={el}
          onClickDelete={props.onClickDelete}
        />
      ))}
    </InfiniteScroll>
  )

}