
import {
    Wrapper,
    Top_Wrapper,
    Top_Header,
    Top_Body,
    Botton_Wrapper,
    Botton_Header,
    Search,
    Botton_Body,
    Information,
    Contents,
    Row,
    Column,
    Botton_Foot,

} from './ListDetail.styles'

export default function ListDetailUI(props){
    


    return (
        <Wrapper>
            <Top_Wrapper>
                <Top_Header>
                    베스트 게시글
                </Top_Header>
                <Top_Body>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </Top_Body>
            </Top_Wrapper>
            <Botton_Wrapper>
                <Botton_Header>
                    <Search>

                    </Search>
                </Botton_Header>
                <Botton_Body>
                    <Information>

                    </Information>
                    <Contents>
                        {props.data?.fetchBoards.map((el, index) =>(
                            <Row key={el._id} >
                                <Column>{index}</Column>
                                <Column>{el.title}</Column>
                                <Column>{el.writer}</Column>
                                <Column>{el.createAt}</Column>
                            
                            </Row>
                        ))}
                    </Contents>
                </Botton_Body>
                <Botton_Foot>

                </Botton_Foot>
            </Botton_Wrapper>
        </Wrapper>


    )






}