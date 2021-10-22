import {
    Wrapper,
    Line,
    CommentHeader,
    AskIcon,
    Ask,
    ContentWrapper,
    Content,
    BottomWrapper,
    ContentLength,
    Button,
    
} from "./MarketsCommentWrite.styles"

export default function MarketsCommentUI (props){

    return (
        <Wrapper>
            <Line/>
            <CommentHeader>
                {!props.isEdit && (
                    <>
                        <AskIcon src="/images/comment/askicon.png"/>
                        <Ask>문의하기</Ask>
                    </>
                )}
                {/* {props.isEdit && <Ask>{props.el.user.name}</Ask>} */}
            </CommentHeader>
            <ContentWrapper>
                <Content
                    // ref={props.inputRef}
                    // type="text"
                    placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                    // defaultValue={props.el?.contents}
                    onChange={props.onChangeCommentContents}
                />
                <BottomWrapper>
                    <ContentLength>0/100</ContentLength>
                    {!props.isEdit ? (
                        <Button onClick={props.onClickQuestion}>
                            문의하기
                        </Button>
                    ) : (
                        <Button 
                            id={props.el._id}
                            onClick={props.onClickQuestionEdit}
                        >
                            수정하기
                        </Button>
                    )}
                    </BottomWrapper>
            </ContentWrapper>
        </Wrapper>
      );
}