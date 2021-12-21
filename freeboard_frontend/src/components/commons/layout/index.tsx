import styled from "@emotion/styled";

import LayoutHeader from "./Header/LayoutHeader.container";
import LayoutBanner from "./Banner/LayoutBanner.container";
import LayoutNavigation from "./Navigation/LayoutNavigation.container";
import LayoutFooter from "./Footer/LayoutFooter.container"

const SidebarWrapper = styled.div`
  display:flex;
  /* flex-direction: row; */
  height: 100%;
  align-items:center;
  /* background-color: blue; */
`
const Body = styled.div`
  /* height: 100%;
  display: flex;
  flex-direction: column; */
  /* background-color: red; */
`;

export default function Layout(props) {
  return (
    <>
      <LayoutHeader />
      <LayoutNavigation />
      <LayoutBanner />
      <SidebarWrapper>
        <Body>{props.children}</Body>
      </SidebarWrapper>
      <LayoutFooter />
    </>
  );
}
