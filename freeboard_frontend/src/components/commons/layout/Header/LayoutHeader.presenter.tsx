import { 
  Wrapper, 
  Header,
  Button,
  LogoBox,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUI(props) {
  return (
    <Wrapper>
      <Header>
        <Button>
          <LogoBox src="/images/layout/MyPost(1).png" onClick={props.onClickMoveToMainPage}/>
        </Button>
      </Header>

    </Wrapper>
  )
}
