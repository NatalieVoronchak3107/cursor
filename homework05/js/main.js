/* 1.Створіть функцію getRandomArray(length, min, max) – яка
повертає масив випадкових цілих чисел. У функції є параметри: length -
довжина масиву, min – мінімальне значення цілого числа, max – максимальне
значення цілого числа.
Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3,
2]*/

const getRandomArray = (length, min, max) => {
  const randomArray = [];
  for (let i = 0; i < length; i++) {
    const randomNumbers = Math.floor(Math.random(i) * (max - min + 1)) + min;
    randomArray.push(randomNumbers);
  }
  return randomArray;
};

console.log(getRandomArray(15, 1, 100));

/* 3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне
всіх переданих в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4 */

const getAverage = (...numbers) => {
  const integerNumbers = numbers.filter((number) => Number.isInteger(number));
  const sum = integerNumbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const average = integerNumbers.length > 0 ? sum / integerNumbers.length : 0;
  return average;
};

console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

/* 4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих
в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23
Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3 */

const getMedian = (...numbers) => {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  const numbersLength = sortedNumbers.length;
  const numbersMedian = Math.floor(numbersLength / 2);
  const result =
    numbersLength % 2 === 0
      ? (sortedNumbers[numbersMedian - 1] + sortedNumbers[numbersMedian]) / 2
      : sortedNumbers[numbersMedian];
  return result;
};

console.log(getMedian(1, 2, 3, 4, 5));

/* 5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа
передані як аргументи функції.
Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5] */

const filterEvenNumbers = (...numbers) => {
  const skipEvenNumbers = numbers.filter((number) => number % 2 !== 0);
  return skipEvenNumbers;
};

console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));

/* 6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість
чисел більших
Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3 */

const countPositiveNumbers = (...numbers) => {
  const positiveNumbers = numbers.filter((number) => number > 0).length;
  return positiveNumbers;
};

console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));

/* 7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи
в масиві та залишить тільки ті, які діляться на ціло на 5
Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55] */

const getDividedByFive = (...numbers) => {
  const devidedByFive = numbers.filter((number) => number % 5 === 0);
  return devidedByFive;
};

console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

/* 8. Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2)
замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно
розбити масив на слова за допомогою функції .split(" "), після чого масив
необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте
можливість розширювати cписок цих слів у майбутньому.
Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing
kidding?"
Приклад: replaceBadWords("Holy shit!") -> "Holy ***!"
Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!" */

const replaceBadWords = (string) => {
  const badWords = ["shit", "fuck"];
  const words = string.split(" ");
  const newWords = words.map((word) => {
    for (let i = 0; i < badWords.length; i++) {
      if (word.toLowerCase().includes(badWords[i])) {
        word = word.replaceAll(badWords[i], "*".repeat(badWords[i].length));
      }
    }
    return word;
  });
  return newWords.join(" ");
};

console.log(replaceBadWords("Are you fucking kidding?"));
console.log(replaceBadWords("Holy shit!"));
console.log(replaceBadWords("It's bullshit!"));

/* 9. Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні
склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди
видаляються. Рядок приводится до нижнього регістру.
Приклад: divideByThree("Commander) -> ["com", "man", "der"]
Приклад: divideByThree("live") -> ["liv", "e"] */

const divideByThree = (word) => {
  const result = [];
  const letters = word.toLowerCase().replace(/\s/g, "").split("");

  for (let i = 0; i < letters.length; i += 3) {
    const syllable = letters.slice(i, i + 3).join("");
    if (syllable.length === 3) {
      result.push(syllable);
    } else {
      result.push(letters.slice(i).join(""));
      break;
    }
  }
  return result;
};

console.log(divideByThree("Commander"));
console.log(divideByThree("live"));

/*10. Створіть функцію generateCombinations(word), яка видасть всі можливі
перестановки(унікальні, без повторень) букв в слові. Для тестів не передавайте
слова в яких більше 10 букв. Краще взагалі обмежити работу функції 10
буквами.
Приклад: generateCombinations("man") -> ["man", "mna", "amn", "anm", "nam",
"nma"]
Приклад: generateCombinations("ol") -> ["ol", "lo"] */

const generateCombinations = (word) => {
  if (word.length > 10) {
    return [];
  } else if (word.length < 1) {
    return [word];
  } else {
    const result = [];
    for (let i = 0; i < word.length; i++) {
      const currentChar = word[i];
      const remainingChars = word.slice(0, i) + word.slice(i + 1);
      const combinations = generateCombinations(remainingChars);
      for (let j = 0; j < combinations.length; j++) {
        result.push(currentChar + combinations[j]);
      }
    }
    return [...new Set(result)];
  }
};

console.log(generateCombinations("man"));
console.log(generateCombinations("ol"));
console.log(generateCombinations("awesomeness"));