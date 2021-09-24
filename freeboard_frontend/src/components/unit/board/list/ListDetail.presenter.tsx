import {
  Wrapper,
  TopWrapper,
  TopHeader,
  TopBody,
  BestBox,
  BottonWrapper,
  BottonHeader,
  InputBottonWrapper,
  Search,
  BottonBody,
  Information,
  Contents,
  ColumnHeaderBasic,
  ColumnHeaderTitle,
  Row,
  BottonFoot,
  PencilIcon,
  Button,
} from "./ListDetail.styles";
import Paginations01 from "../../../commons/Paginations/01/Pagination01.container"

export default function ListDetailUI(props) {
  return (
    <Wrapper>
      <TopWrapper>
        <TopHeader>베스트 게시글</TopHeader>
        <TopBody>
          <BestBox>tkdwk</BestBox>
          <div></div>
          <div></div>
          <div></div>
        </TopBody>
      </TopWrapper>
      <BottonWrapper>
        <BottonHeader>
          <InputBottonWrapper>
            <Search></Search>
          </InputBottonWrapper>
        </BottonHeader>
        <BottonBody>
          <Information></Information>
          <Contents>
            <Row>
              <ColumnHeaderBasic>번호</ColumnHeaderBasic>
              <ColumnHeaderTitle>제목</ColumnHeaderTitle>
              <ColumnHeaderBasic>작성자</ColumnHeaderBasic>
              <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
            </Row>
            {props.data?.fetchBoards.map((el, index) => (
              <Row key={el._id}>
                <ColumnHeaderBasic>{10 - index}</ColumnHeaderBasic>
                <ColumnHeaderTitle
                  id={el._id}
                  onClick={props.onClickMoveToBoardDetail}
                >
                  {el.title}
                </ColumnHeaderTitle>
                <ColumnHeaderBasic>{el.writer}</ColumnHeaderBasic>
                <ColumnHeaderBasic>{el.createdAt}</ColumnHeaderBasic>
              </Row>
            ))}
          </Contents>
        </BottonBody>
        <BottonFoot>
          <Paginations01
            refetch={props.refetch}
            count={props.count}
            startPage={props.startPage}
            setStartPage={props.setStartPage}
          />
          <Button onClick={props.onClickMoveToBoardNew}>
            <PencilIcon src="/images/board/list/write.png" />
            게시물 등록하기
          </Button>
        </BottonFoot>
      </BottonWrapper>
    </Wrapper>
  );
}
