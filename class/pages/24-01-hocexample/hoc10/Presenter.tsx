import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../_app";

function withAuth(Component) {
  return function 이름은상관없음(props) {
    const router = useRouter
    
    return <Component {...props} />;
  };
}

const withAuth = (index) => (event) => {
  // 검증로직, 셋팅로직

  index, event

  // return <Component {...props} />;
};

const Presenter = (props) => {
  return <div>프리젠터 입니다. props: {props.aaa}</div>;
};

export default withAuth(Presenter);