const swap_nums = (num1, num2) => {
	let temp = num1
	num1 = num2
	num2 = temp

	return { num1, num2 }
}

console.log(swap_nums(6, 3))