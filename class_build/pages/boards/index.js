import Head from "next/head"

export default function BoardPage () {

    return (
        <>
            <Head>
                <meta property="og:title" content="나의 사이트 게시판페이지"/>  
                <meta property="og:description" content="환영합니다"/>  
                <meta 
                    property="og:image" 
                    content="https://placetech.net/wp-content/uploads/mitchell-luo-jz4ca36oJ_M-unsplash.jpg"/>  
            </Head>
            <div>게시판 입니다!</div>
        </>
    )    
}