import styled from "@emotion/styled";
// import LayoutFooter from "./footer/LayoutFooter.container";
// import { useRouter } from "next/router";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutBanner from "./Banner/LayoutBanner.container";
import LayoutNavigation from "./Navigation/LayoutNavigation.container";

const Wrapper = styled.div``;

// const Header = styled.div`
//   background-color: red;
//   height: 200px;
// `;

const Body = styled.div``;

const Footer = styled.div`
  background-color: blue;
  height: 100px;
`;

// const Banner = styled.div`
//   background-color: plum;
//   height: 300px;
// `;

// const Navigator = styled.div`
//   background-color: orange;
//   height: 100px;
// `;

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Sidebar = styled.div`
  background-color: skyblue;
  width: 300px;
  /* height: 500px; */
`;

// const HIDDEN_FOOTER = ["/13-01-layout-hidden"];

export default function Layout(props) {
  // const router = useRouter();
  // const isHiddenFooter = HIDDEN_FOOTER.includes(router.pathname);

  return (
    <Wrapper>
      {/* <Header>여기는 헤더 영역입니다</Header> */}
      <LayoutHeader />
      <LayoutBanner />
      {/* <Banner>배너영역</Banner> */}
      <LayoutNavigation />
      {/* <Navigator>네비게이션 영역</Navigator> */}
      <SidebarWrapper>
        <Sidebar>사이드바 영역</Sidebar>
        <Body>{props.children}</Body>
      </SidebarWrapper>
      {/* {!isHiddenFooter && <LayoutFooter />} */}
      <Footer>여기는 푸터 영역입니다</Footer>
    </Wrapper>
  );
}
