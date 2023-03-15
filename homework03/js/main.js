/*Створити функцію getMaxDigit(number), яка отримує будь-яке
число та виводить найбільшу цифру в цьому числі.*/

function getMaxDigit(number) {
  let maxDigit = 0;
  while (number > 0) {
    const digit = number % 10;
    if (digit > maxDigit) {
      maxDigit = digit;
    }
    number = Math.floor(number / 10);
  }
  return maxDigit;
}

console.log(getMaxDigit("7983"));

/*Створити функцію, яка форматує ім'я, роблячи першу букву
великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);*/

function capitalizeName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log(capitalizeName("naTaliia"));

/*Створити функцію, яка визначає ступінь числа, не
використовуючи Math.pow та **. Використовуйте цикл */

function getPow(number, exponent) {
    let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= number;
  }
  return result;
}
console.log(getPow(5,2));

/*Створити функцію, яка вираховує суму, що залишається після
оплати податку від зарабітньої плати. (Податок = 18% + 1.5% ->
19.5%). Приклад: 1000 -> 805 */

function calculateNetSalary(grossSalary) {
    const taxRate = 0.195;
    const tax = grossSalary * taxRate;
    const netSalary = grossSalary - tax;
    return netSalary;
  }
  
  console.log(calculateNetSalary(1000));

/* Створити функцію, яка повертає випадкове ціле число в
діапазоні від N до M.
Приклад: getRandomNumber(1, 10) -> 5 */

function getRandomNumber (n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
}

console.log(getRandomNumber(1, 10));

/* Створити функцію, яка рахує скільки разів певна буква
повторюється в слові.
Приклад: countLetter("а", "Асталавіста") -> 4 */

function countLetter(letter, word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i].toLowerCase() === letter.toLowerCase()) {
        count++;
      }
    }
    return count;
  }

console.log(countLetter("а","Асталавіста"))