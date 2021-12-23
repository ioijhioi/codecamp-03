import {
    Wrapper,
    LeftFooter,
    MyName,
    Link,
    CenterFooter,
    RightFooter,
} from "./LayoutFooter.styles"



export default function LayoutFooterUI () {
    return(
        <Wrapper>
            <LeftFooter>
                <MyName>anywHERE</MyName>
                <Link>
                    GitHub: <br/>https://github.com/ioijhioi/codecamp-03.git
                </Link>
                
                <Link>
                    Mail: <br/> jhlcoder@gmail.com
                </Link>
            </LeftFooter>
            <CenterFooter>
                   CopyRight @anywHERE . All Rights Reserved.
            </CenterFooter>
            <RightFooter>
                ----------------------------------    
            </RightFooter>
        </Wrapper>
    )
}