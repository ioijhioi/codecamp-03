import { MenuItem, Wrapper } from "./LayoutNavigation.styles";
import { ILayoutNavigationUIProps } from "./LayoutNavigation.types";

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {
  return (
    <Wrapper>
      <MenuItem id="/maps" onClick={props.onClickMenu}>
        캠핑지도
      </MenuItem>
      {/* <>|</> */}
      <MenuItem id="/boards" onClick={props.onClickMenu}>
        자유게시판
      </MenuItem>
      {/* <>|</> */}
      <MenuItem id="/markets" onClick={props.onClickMenu}>
        중고마켓
      </MenuItem>
      {/* <>|</> */}
      <MenuItem id="/mypages" onClick={props.onClickMenu}>
        마이 페이지
      </MenuItem>
      <MenuItem id="/iframe" onClick={props.onClickMenu}>
        마이 페이지
      </MenuItem>
    </Wrapper>
  );
}
