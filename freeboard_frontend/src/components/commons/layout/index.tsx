import styled from "@emotion/styled";

import LayoutHeader from "./Header/LayoutHeader.container";
import LayoutBanner from "./Banner/LayoutBanner.container";
import LayoutNavigation from "./Navigation/LayoutNavigation.container";

const Body = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Layout(props) {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <Body>{props.children}</Body>
    </>
  );
}