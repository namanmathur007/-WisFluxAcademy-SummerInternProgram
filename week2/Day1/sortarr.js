const sortArray = (arr) => {
	let ascending = new Int32Array(arr).sort()
	let descending = new Int32Array(arr).sort().reverse()
	return {
		"ascending": Array.from(ascending),
		"descending": Array.from(descending)
	}
}

console.log(sortArray([1, 25, 14, 98])) 