import {
  Wrapper,
  Top_Wrapper,
  Top_Header,
  Top_Body,
  BestBox,
  Botton_Wrapper,
  Botton_Header,
  Input_Botton_Wrapper,
  Search,
  Botton_Body,
  Information,
  Contents,
  ColumnHeaderBasic,
  ColumnHeaderTitle,
  Row,
  Botton_Foot,
  PencilIcon,
  Button,
} from "./ListDetail.styles";

export default function ListDetailUI(props) {
  return (
    <Wrapper>
      <Top_Wrapper>
        <Top_Header>베스트 게시글</Top_Header>
        <Top_Body>
          <BestBox>tkdwk</BestBox>
          <div></div>
          <div></div>
          <div></div>
        </Top_Body>
      </Top_Wrapper>
      <Botton_Wrapper>
        <Botton_Header>
          <Input_Botton_Wrapper>
            <Search></Search>
          </Input_Botton_Wrapper>
        </Botton_Header>
        <Botton_Body>
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
        </Botton_Body>
        <Botton_Foot>
          <Button onClick={props.onClickMoveToBoardNew}>
            <PencilIcon src="/images/board/list/write.png" />
            게시물 등록하기
          </Button>
        </Botton_Foot>
      </Botton_Wrapper>
    </Wrapper>
  );
}
