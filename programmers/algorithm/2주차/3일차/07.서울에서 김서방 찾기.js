// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, 
// "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. 
// seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

// 제한 사항
// seoul은 길이 1 이상, 1000 이하인 배열입니다.
// seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
// "Kim"은 반드시 seoul 안에 포함되어 있습니다.


// 입출력 예
// seoul	return
// ["Jane", "Kim"]	"김서방은 1에 있다"

// function solution(seoul) {
//     for(let i = 0; i < seoul.length; i++){
//         if( seoul[i] === 'seoul') return '김서방은 $[1]에 있다.'
//     }
// }


// const solution=(seoul) => {
//     const answerIndex = seoul.findIndex(man => man === "Kim")
//     return '김서방은 ${answerIndex}에 있다';
// }

// #include <bits/stdc++.h>
// using namespace std;
// #define 문자열 string
// #define 함수 solution
// #define 배열 vector
// #define 반복 for
// #define 반복자 iterator
// #define 문자열로 to_string
// #define 시작 begin
// #define 끝 end
// #define 반환 return

// 문자열 함수(배열<문자열> 서울) {
//     for(배열<문자열>::반복자 반 = 서울.시작(); 반 != 서울.끝(); ++반)
//         if(*반 == "Kim")
//             반환 "김서방은 " + 문자열로(반 - 서울.시작()) + "에 있다";
// }

function solution(seoul) {

    let x = seoul.indexOf('Kim'); 
    //     //X는 Kim의 index 값으 담아주는 변수
//     let x = 0;
    
//     for( let i = 0; i < seoul.length; i++){
        
//         if(seoul[i] === 'kim'){
//             x= i;
            
//             //break는 반복문을 종료한다.
//             break;
//         }
//     }
    return '김서방은 ' + x + '에 있다';
}