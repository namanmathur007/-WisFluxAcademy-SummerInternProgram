const swap_nums = (a, b) => {
	let temp = a
	a = b
	b = temp

	return { a, b }
}

console.log(swap_nums(6, 3))