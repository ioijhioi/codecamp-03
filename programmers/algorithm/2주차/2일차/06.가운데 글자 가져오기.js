// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.


// 입출력 예
// s	return
// "abcde"	"c"
// "qwer"	"we"


function solution(s) {
    // half 가운데에 있는 글자의 인덱스 값을 저장
    const half = Math.floor(s.length /2) ;
    
    // 삼항 연산자
    return s.length % 2 ===0
        ? s[half -1] + s[half]
        : s[half]
    
//     if( s.length % 2 === 0){
        
//         return s[half -1] s[half]
//     } else {
    
    
//         return s[half];
//     }
}