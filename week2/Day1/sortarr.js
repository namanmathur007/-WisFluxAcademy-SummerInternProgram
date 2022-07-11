const sortArray = (arr) => {
	let as = new Int32Array(arr).sort()
	let de = new Int32Array(arr).sort().reverse()
	return {
		"as": Array.from(as),
		"de": Array.from(de)
	}
}

console.log(sortArray([1, 25, 14, 98])) 