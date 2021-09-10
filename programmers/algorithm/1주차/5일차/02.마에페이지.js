const myShopping = [ //<-----배열형태//
    { category: "과일", price: 12000　},
    { category: "의류", price:10000　 },
    { category: "의류", price: 20000　},
    { category: "장난감", price: 9000 },
    { category: "과일", price: 5000　 },
    { category: "의류", price: 10000  },
    { category: "과일", price: 8000　　},
    { category: "의류", price: 7000　　},
    { category: "장난감", price: 5000  },
    { category: "의류", price: 10000　 },
]
// //
// //
// //
// // === 의류를 구매한 횟수는 총 5
// console.log("의류를 구매한 횟수는 총 " + count + "회 금액은" + price + "원이며 등급은" + grade + "입니다."
	
// )

let count = 0;
let price = 0;
let tier = "";
const myShopping = [
    { category: "과일", price: 12000　},
    { category: "의류", price:10000　 },
    { category: "의류", price: 20000　},
    { category: "장난감", price: 9000 },
    { category: "과일", price: 5000　 },
    { category: "의류", price: 10000  },
    { category: "과일", price: 8000　　},
    { category: "의류", price: 7000　　},
    { category: "장난감", price: 5000  },
    { category: "의류", price: 10000　 },
]

let count 

for (let i =0; i < myshopping.length; i = i + 1 ) {
    if(myShopping[i].category === '의류'){
        count = count + 1;
        price = price + myShoppung[i].price;
    
        if(count >= 0 && count <= 2){
            tier = 'bronze';
        } else if ( count >= 3 && count <= 4){
            tier = 'sliver';
        } else if (count >= 5){
            tier = 'gold';
        }
    }
    console.log("의류를 구매한 횟수는 총 " + count + "회 금액은" + price + "원이며 등급은" + tier + "입니다." )
}