import { useState } from "react"
import styled from '@emotion/styled'
import { useUserAgent } from 'next-useragent'

const Wrapper = styled.div`
    @media screen and ( min-width: 901px) {
        display:none;
    }
`

export default function IframeMobilePage(props) {
    const [IframeHeight, setIframeHeight] = useState("0px")
    let ua;
    if (props.uaString) {
      ua = useUserAgent(props.uaString)
    } else {
      ua = useUserAgent(window.navigator.userAgent)
    }
    console.log("ua ua  ", ua);
    
      window.addEventListener(
          "message",
          (e) => {
            if(typeof e.data.childHeight !== "undefined"){

              let setHeight = 0;
              if(ua.isDesktop) {
                setHeight = e.data.childHeight + 650;
              } else {
                setHeight = e.data.childHeight + 1;
              }
              setIframeHeight(setHeight + "px");
              
            }
          },
          false
        );
      
    return(
      <Wrapper>
        <iframe 
        id="mIframe"
        src="https://home.jayecorp.com" 
        sandbox="allow-same-origin allow-scripts allow-popups"
        width="100%"
        height={IframeHeight}
        frameBorder="0" 
        scrolling="no">
        </iframe>
      </Wrapper>
    )
}