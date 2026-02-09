// Напишите функцию calculateAverage, которая принимает 2 числа и возвращает их среднее арифметическое

function calculateAverage(...numbers) {
	let total = 0;
	for (let num of numbers) {
		total += num;
	}
	let result = total / numbers.length;
	return result;
}
console.log(calculateAverage(1, 2));