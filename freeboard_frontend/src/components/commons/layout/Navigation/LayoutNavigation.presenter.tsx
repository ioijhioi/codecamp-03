import { MenuItem, Wrapper } from "./LayoutNavigation.styles";
import { ILayoutNavigationUIProps } from "./LayoutNavigation.types";

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {
  return (
    <Wrapper>
      <MenuItem id="/maps" onClick={props.onClickMenu}>
        🏖Camping Map
      </MenuItem>
      <>|</>
      <MenuItem id="/boards" onClick={props.onClickMenu}>
        🙋‍♂️Freeboard
      </MenuItem>
      <>|</>
      <MenuItem id="/markets" onClick={props.onClickMenu}>
        🎁Campingproduct
      </MenuItem>
      <>|</>
      <MenuItem id="/mypages" onClick={props.onClickMenu}>
        📃My page
      </MenuItem>
    </Wrapper>
  );
}
