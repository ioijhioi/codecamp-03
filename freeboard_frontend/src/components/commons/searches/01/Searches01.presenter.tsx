import {
    Wrapper,
    Research,
    ResearchButton,
} from "./Searches01.styles"

export default function Searches01UI(){


    return(
        <Wrapper>
            <Research type="text" 
                    placeholder="π μ λͺ©μ κ²μν΄μ£ΌμΈμ"/>
                    {/* onChange={onChangeSearch}/> */}
            
            
            <ResearchButton>κ²μνκΈ°</ResearchButton>
        </Wrapper>
    )
}