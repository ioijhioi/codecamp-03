// https://programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
    const team = [];
    
    // 신청한 예산을 오름차순으로 정렬
    d.sort ((a, b) => a - b);
    
    // 부서들이 신청한 금액의 총 합
    let sum = 0;
    for ( let i = 0; i < d.length; i++) {
        sum += d [i];
       
        if ( sum <= budget) {
            team.push (d[i])
        }
    }
    
    return team.length
}

function solution(d, budget) {
    const result = d.sort((a, b) => a - b )
                    .filter( price => {
                        // 총 예산에서 해당 지원금을 삭감
                        budget -= price;
                        console.log(budget, price)
                        // 예산이 0 이상일 경우에만 return
                        if( budget >= 0 ) {
                            return price;
                        }
                    })
    return result.length;
}