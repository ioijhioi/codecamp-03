// 문제 설명
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// 제한 조건
// n은 2이상 1000000이하의 자연수입니다.

// 입출력 예
// n	result
// 10	4
// 5	3

// 입출력 예 설명

// 입출력 예 #1
// 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

// 입출력 예 #2
// 1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환

// 문제풀이1
// function solution(n) {
    
//     // 소수인지 아닌지 판별하는 함수
//     function check (i){
        
//         for (let j = 2; j*j <= i; j++){
//             if (i % j === 0) return false
//         }
        
//         return true
//         // if(소수라면?) {
//         //    return true
//         // } else {
//         //    return false
//         // }
//     }
//     let count = 0;
//     for ( let i = 2; i <= n; i++){
//        if (check(i) === true) count = count + 1
//         // i - 2, if (check(i) === true) count = count +1
//     }
//     return count ;
    
// }

문제풀이2
function solution(n) {
    let answer = 0;
    
    // 2부터 n 까지의 숫자들을 담아주는 배열
    const numbers = [];
    for(let i = 2; i <= n; i++) {
        // numbers.push(i);
        numbers[i - 2] = i;
    }
    
    for(let i = 2; i * i <= n; i++) {
															  // l = l + i;
        for(let l = i * i; l <= n; l += i) {
            numbers[l - 2] = false;
        }
    }

		// 배열에서 false 값 (= 소수가 아닌 값)을 제거한다. 
    answer = numbers.filter( data => data !== false );

    return answer.length;
}

