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
        <Button onClick={props.onClickMoveToMainPage}>
          <LogoBox src="/images/layout/ANYWHERE.png"/>
        </Button>
      </Header>

    </Wrapper>
  )
}
