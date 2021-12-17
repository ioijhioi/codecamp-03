import { useState } from "react"
import styled from "@emotion/styled"
import { useUserAgent } from 'next-useragent'

const Wrapper = styled.div`
    display: none;

    @media screen and ( min-width: 901px) {
        display:block;
        width: 100%;
    }
`

export default function IframeWebPage(props) {
  const [IframeHeight, setIframeHeight] = useState("0px")
  let ua;
  if (props.uaString) {
    ua = useUserAgent(props.uaString)
  } else {
    ua = useUserAgent(window.navigator.userAgent)
  }
  
    window.addEventListener(
        "message",
        (e) => {
          console.log("About US e.data   ", e.data.childHeight);
          if(typeof e.data.childHeight !== "undefined"){
            const setHeight = e.data.childHeight + 300;
            setIframeHeight(setHeight + "px");
            // document.getElementById('mIframe').contentWindow.document.body.scrollHeight;
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