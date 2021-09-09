
export default function TypeScriptPage(){

    // 문자타입 - 타입추론
    let aaa: string = "안녕하세요"
    
    aaa= 3

    // 문자타입
    let bbb: string;

    bbb ="반갑습니다"
    bbb = 123

    // 숫자 타입
    let ccc: number = 5

    ccc = "333"

    //배열 타입

    let ddd:number[] =[1, 2, 3, 4, 5, 6]
    let eee:(number | string) [] = ["1", 2, 3, 4, 5, 6] //타입스크립트에서는 ||가 아니고 | 하나,  배열안에 들어가는게 숫자또는 문자열
    let fff: (number[] | string [] ) = [1, 2, 3, 4, 5, 6]//배열안에 들어가는게 숫자만이거나 문자열만

    //객체 타입
    interface Iprofile {
        school: string
        age: number
    }

    let profile: Iprofile = {
        school: "다람쥐 초등학교",
        age: 13
    }

    profile.age = "bbb"

    
    return <div>타입스크립트 페이지입니다</div>

}