// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
let sum = 0;
let start = 1;
let n = 20;
let current = start;
while (current <= n) {
	sum += current;
	current++
}
console.log(sum);
