import { 
    Wrapper,
    Wrapper1, 
    Wrapper1_Head,
    Head_Left,
    Images,
    Information,
    Writer,
    CreatedAt,
    // Head_Right,
    Wrapper1_Body,
    Title,
    Body_Images,
    Contents,
    Wrapper1_Foot,


} from "./BoardDetail.styles";

export default function BoardDetailUI(props) {
    

    return (
        <Wrapper>
            <Wrapper1>
                <Wrapper1_Head>
                    <Head_Left>
                        <Images src= "/images/vector.png"/>
                        <Information>
                            <Writer>{props.data?.fetchBoard.writer}</Writer>
                            <CreatedAt>{props.data?.fetchBoard.createdAt}</CreatedAt>
                        </Information>
                    </Head_Left>
                    {/* <Head_Right>
                        <div></div>
                        <div></div>
                    </Head_Right> */}
                </Wrapper1_Head>
                <Wrapper1_Body>
                    <Title>{props.data?.fetchBoard.title}</Title>
                    <Body_Images src= "/images/image.png"/>
                    <Contents>{props.data?.fetchBoard.contents}</Contents>
                    
                </Wrapper1_Body>
                <Wrapper1_Foot>
                    <div>유튜브 링크입니다</div>
                    <div>좋아요,싫어요</div>
                </Wrapper1_Foot>
            </Wrapper1>


        </Wrapper>

    )
}