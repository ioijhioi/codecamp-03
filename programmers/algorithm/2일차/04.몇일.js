// 입력되는 달(month)에 따라 각 달에 몇 일이 있는지 보여주는 함수를 만들려고 합니다.

// 각 조건에 해당하는 알맞은 값을 입력해주세요.

// function days(month) {

// 	if ("조건1") {
// 		console.log("");
// 	}
// }

// 1월 : 31일
// 2월 : 28일
// 3월 : 31일
// 4월 : 30일
// 5월 : 31일
// 6월 : 30일
// 7월 : 31일
// 8월 : 31일
// 9월 : 30일
// 10월 : 31일
// 11월 : 30일
// 12월 : 31일

function days(month) {
    if (month ===2) {
        console.log("28");
    } else if (
        month === 1 ||
        month === 3 ||
        month === 5 ||
        month === 7 ||
        month === 8 ||
        month === 10||
        month === 12
    ) {
        console.log("31")
    } else {
        console.log("30")
    }
}

function days(month) {
    if (month === 1 || month ===3 || month === 5 || month === 7||
        month === 8 || month === 10){
        console.log("31")
    } else if (month ===2){
        console.log("28")
    } else if (month ===4 || month === 6 || month === 9 || month === 11
        ){
        console.log("30")
    }
}