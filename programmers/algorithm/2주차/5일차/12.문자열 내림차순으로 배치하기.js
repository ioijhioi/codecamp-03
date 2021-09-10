// 문제 설명
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// 제한 사항
// str은 길이 1 이상인 문자열입니다.


// 입출력 예
// s	return
// "Zbcdefg"	"gfedcbZ"

// 문제풀이1

// function solution(s) {
//     let answer = '';
//     //sort(정렬) 를 사용하기 위해 배열로 저장해주는 변수
//     const arr = [];
    
//     for( let i = 0; i <s.length; i++){
//         arr.push(s[i]);
//     }

//     arr.sort((a, b) =>{    <----2번째방법
//         //배열을 내림차순으로 정렬하는 식
//         return a > b ? -1 : 1
//     })
    
//     return arr.join("");
// }



// 문제풀이2

// function solution(s) {
//     let answer = '';
//     //sort(정렬) 를 사용하기 위해 배열로 저장해주는 변수
//     const arr = [];
    
//     for( let i = 0; i <s.length; i++){
//         arr.push(s[i]);
//     }

//     arr.sort().reverse();  <----1번째방법
    
//     return arr.join("");
// }

//문제풀이 메서드

