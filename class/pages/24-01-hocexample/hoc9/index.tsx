const Container = () => {
  return (
    <>
      <div>컨테이너 입니다.</div>
      {withAuth(Presenter)({ aaa: "철수" })}
    </>
  );
};
// 컨테이너에서 프리젠터로 보내는 과정
function withAuth(Component) {
  return function 이름은상관없음(props) {
    return <Component {...props} />; // <<<<<<<----component는 presenter이다.
  };
}

const Presenter = (props) => {
  return <div>프리젠터 입니다. props: {props.aaa}</div>;
};

export default Container;

//
//                      function 이름은상관없음(props){
//                          return <Presenter {...props} />
//                      }
//
//
// (withAuth(Presenter))({aaa: "철수"})  ==>  (이름은상관없음)({aaa: "철수"})
//                        ^^위에는 props
//                                           ==>  <Presenter {...props} />
