function bigNum(str) {
	let max = 0;
	for (let i = 0; i <= str.length; i++) {
		if (Number(str[i]) >= max) {
			max = Number(str[i])
		}
	}
	console.log(max)
	
}