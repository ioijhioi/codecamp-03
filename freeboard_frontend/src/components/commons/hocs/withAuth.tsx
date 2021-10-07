import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../../../pages/_app';
import { useRouter } from 'next/router';

export const withAuth = (Component) => (props) => {
    const router = useRouter ();
    const {accessToken} = useContext(GlobalContext);

    useEffect (() => {
        const accessToken = localStorage.getItem("accessToken");
        if ( !accessToken) {
            alert("로그인이 필요합니다.")
            router.push("/loginuser")
        }
    }, []);

    return <Component {...props} />;

}