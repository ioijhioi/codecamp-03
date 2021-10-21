import {
    Wrapper,
    Line,
    CommentHeader,
    AskIcon,
    Ask,
    ContentWrapper,
    // Content,
    // BottomWrapper,
    // ContentLength,
    // Button,
    
} from "./MarketsCommentWrite.styles"

export default function MarketsCommentUI (){

    return (
        <Wrapper>
            <Line/>
            <CommentHeader>
                <AskIcon src="/images/comment/askicon.png"/>
                <Ask>
                    문의하기
                </Ask>
            </CommentHeader>
            <ContentWrapper>
                {/* <Content>

                </Content>
                <BottomWrapper>
                    <ContentLength></ContentLength>
                    <Button>

                    </Button>
                </BottomWrapper> */}
            </ContentWrapper>
        </Wrapper>
      );
}