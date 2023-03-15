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
