import {
    Wrapper,
    Title,
    WriterWrapper,
    InputWrapper,
    Writer,
} from "./Comment.styles"; 

export default funtction CommentWriteUI(){
    return(
        <Wrapper>
            <Title>댓글</Title>
            <WriterWrapper>
                <InputWrapper>
                    <Writer
                        name="mywriter"
                        type="text"
                        placeholder="작성자"
                    />
                </InputWrapper>
                <InputWrapper>
                    <Password 
                        name="mypassword"
                        type="password"
                        placeholder="비밀번호"
                    />
                </InputWrapper>
            </WriterWrapper>
        
        </Wrapper>
    )


}