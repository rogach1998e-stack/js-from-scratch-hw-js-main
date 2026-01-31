// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
let sum = 0;
let start = 1;
let end = 20;
let current = start;
while (current <= end) {
	sum += current;
	current++
}
console.log(sum);
