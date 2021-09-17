import { useRouter } from "next/router";
import LayoutNavigationUI from "./LayoutNavigation.presenter";
import { MouseEvent } from "react";

export default function LayoutNavigation() {
  const router = useRouter();

  function onClickMenu(event) {
    router.push(event.target.id);
  }

  return <LayoutNavigationUI onClickMenu={onClickMenu} />;
}
