import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../../../pages/_app';
import { useRouter } from 'next/router';

export const withAuth = (Component) => (props) => {
    const router = useRouter ();
    const {accessToken} = useContext(GlobalContext);

    useEffect (() => {
        if ( !accessToken) {
            alert("로그인이 필요합니다.")
            router.push("/maps")
        }
    }, []);

    return <Component {...props} />;

}