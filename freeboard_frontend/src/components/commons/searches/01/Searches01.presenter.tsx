import {
    Wrapper,
    Research,
    ResearchButton,
} from "./Searches01.styles"

export default function Searches01UI(){


    return(
        <Wrapper>
            <Research type="text" 
                    placeholder="🔎 제목을 검색해주세요"/>
                    {/* onChange={onChangeSearch}/> */}
            
            
            <ResearchButton>검색하기</ResearchButton>
        </Wrapper>
    )
}