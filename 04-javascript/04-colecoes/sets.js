const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(array) {
	let mySet = new Set(array);
	return [...mySet];
}


console.log(valoresUnicos(meuArray));