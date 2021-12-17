import {
  Wrapper,
  TopWrapper,
  Title,
  // TopHeader,
  // TopBody,
  // BestBox,
  BottonWrapper,
  BottonHeader,
  // InputBottonWrapper,
  Search,
  SearchButton,
  BottonBody,
  // Information,
  Contents,
  ColumnHeaderBasic,
  ColumnHeaderTitle,
  // Page,
  Myword,
  Row,
  BottonFoot,
  PencilIcon,
  Button,
} from "./ListDetail.styles";
import Paginations01 from '../../../commons/Paginations/01/Pagination01.container';
// import Searches01 from '../../../commons/searches/01/Searches01.presenter'
import {v4 as uuidv4} from 'uuid'

export default function ListDetailUI(props) {
  return (
    <Wrapper>
      <TopWrapper>
        <Title>
          자유게시판
        </Title>
      </TopWrapper>
      <BottonWrapper>
        <BottonHeader>
          {/* <InputBottonWrapper> */}
            <Search 
              type="text" 
              placeholder="제목을 검색해주세요"
              onChange={props.onChangeSearch}/>
            <SearchButton onClick={props.onClickSearch}>검색하기 </SearchButton>
          {/* </InputBottonWrapper> */}
        </BottonHeader>
        <BottonBody>
          {/* <Searches01 ></Searches01> */}
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
                  {el.title
                    .replaceAll(props.myKeyword, `$#@${props.myKeyword}$#@`)
                    .split("$#@")
                    .map ((el) => (
                        <Myword key={uuidv4()} isMatched={props.myKeyword === el} > 
                            {el} 
                        </Myword>)
                    )}
                </ColumnHeaderTitle>
                <ColumnHeaderBasic>{el.writer}</ColumnHeaderBasic>
                <ColumnHeaderBasic>{el.createdAt.slice(0, 10)}</ColumnHeaderBasic>
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
