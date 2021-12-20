import styled from "@emotion/styled";

import LayoutHeader from "./Header/LayoutHeader.container";
import LayoutBanner from "./Banner/LayoutBanner.container";
import LayoutNavigation from "./Navigation/LayoutNavigation.container";
import LayoutFooter from "./Footer/LayoutFooter.container"
import { Container } from '@material-ui/core';

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
      <LayoutNavigation />
      <LayoutBanner />
      <Container>
        <Body>{props.children}</Body>
      </Container>
      <LayoutFooter />
    </>
  );
}
