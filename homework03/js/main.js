/* 01.Створити функцію getMaxDigit(number), яка отримує будь-яке
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

/* 02.Створити функцію, яка форматує ім'я, роблячи першу букву
великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);*/

function capitalizeName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log(capitalizeName("naTaliia"));

/* 03.Створити функцію, яка визначає ступінь числа, не
використовуючи Math.pow та **. Використовуйте цикл */

function getPow(number, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= number;
  }
  return result;
}

console.log(getPow(5, 2));

/* 04.Створити функцію, яка вираховує суму, що залишається після
оплати податку від зарабітньої плати. (Податок = 18% + 1.5% ->
19.5%). Приклад: 1000 -> 805 */

function calculateNetSalary(grossSalary) {
  const taxRate = 0.195;
  const tax = grossSalary * taxRate;
  const netSalary = grossSalary - tax;
  return netSalary;
}

console.log(calculateNetSalary(1000));

/* 05.Створити функцію, яка повертає випадкове ціле число в
діапазоні від N до M.
Приклад: getRandomNumber(1, 10) -> 5 */

function getRandomNumber(n, m) {
  return Math.floor(Math.random() * (m - n + 1)) + n;
}

console.log(getRandomNumber(1, 10));

/* 06.Створити функцію, яка рахує скільки разів певна буква
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

console.log(countLetter("а", "Асталавіста"));

/* 07.Створіть функцію, яка конвертує долари в гривні та навпаки в
залежності від наявності символа $ або UAH в рядку.
Приклад: convertCurrency("100$") -> 2500 грн. або
convertCurrency("2500UAH") -> 100$ */

function convertCurrency(string) {
  let exchangeRate = 25; //
  let amount = parseFloat(string);

  if (string.includes("$")) {
    amount *= exchangeRate;
    return amount.toFixed() + " грн.";
  } else if (string.includes("UAH")) {
    amount /= exchangeRate;
    return amount.toFixed() + "$";
  } else {
    return "Невідома валюта";
  }
}

console.log(convertCurrency("100$"));
console.log(convertCurrency("2500UAH"));

/* 08.Створіть функцію генерації випадкового паролю (тільки числа),
довжина встановлюється користувачем або по замовчуванню = 8
символам. Приклад: getRandomPassword(4) -> 1875, getRandomPassword() ->
87240124 */

function getRandomPassword(length = 7) {
  let password = "";
  const characters = "0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return password;
}

console.log(getRandomPassword(7));

/* 09.Створіть функцію JavaScript, яка видаляє всі букви з речення.
Приклад: deleteLetters('a', "blablabla") -> "blblbl" */

function deleteLetters(letter, string) {
  return string.split(letter).join("");
}

console.log(deleteLetters("a", "blablabla"));

/* 10.Створіть функцію, яка перевіряє, чи є слово паліндромом.
Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false,
isPalyndrom("Я несу гусеня") -> true */

function isPalindrome(string) {
    const cleanedStr = string.toLowerCase().replace(/[^a-zа-яё]/g, '');
    const reversed = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversed;
  }

  console.log(isPalindrome('мадам')); 
  console.log(isPalindrome('кокос')); 
  console.log(isPalindrome('Я несу гусеня'));

/* 11.Створіть функцію, яка видалить з речення букви, які
зустрічаються більше 1 разу.
Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") ->
"сктдеим" */

function deleteDuplicateLetter(string) {
    const letters = string.split('');
    const letterCounts = {};
    
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i].toLowerCase();
      letterCounts[letter] = (letterCounts[letter] || 0) + 1;
    }
  
    const output = letters.filter((letter) => {
      const lowercaseLetter = letter.toLowerCase();
      return letterCounts[lowercaseLetter] === 1;
    });
    
    return output.join('');
  }
  
  console.log(deleteDuplicateLetter("Бісквіт був дуже ніжним"));

document.writeln(`Function 01: ${getMaxDigit("7983")} <br>`); 
document.writeln(`Function 02: ${capitalizeName("naTaliia")} <br>`);
document.writeln(`Function 03: ${getPow(5, 2)} <br>`);                
document.writeln(`Function 04: ${calculateNetSalary(1000)} <br>`); 
document.writeln(`Function 05: ${getRandomNumber(1, 10)} <br>`);
document.writeln(`Function 06: ${countLetter("а", "Асталавіста")} <br>`);  
document.writeln(`Function 07: ${convertCurrency("100$")} <br>`); 
document.writeln(`Function 08: ${getRandomPassword(7)} <br>`);
document.writeln(`Function 09: ${deleteLetters("a", "blablabla")} <br>`);
document.writeln(`Function 10: ${isPalindrome('Я несу гусеня')} <br>`);
document.writeln(`Function 11: ${deleteDuplicateLetter("Бісквіт був дуже ніжним")} <br>`);
