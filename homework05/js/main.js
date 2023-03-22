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
    }
    
console.log(getRandomArray(15,1,100));

/* 3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне
всіх переданих в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4 */

const getAverage = (...numbers) => {
    const integerNumbers = numbers.filter(number => Number.isInteger(number));
    const sum = integerNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = (integerNumbers.length > 0) ? sum / integerNumbers.length : 0;
    return average;
}

console.log(getAverage(7, 7, 5.8, 8.2, 7.7));

/* 4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих
в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23
Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3 */

/* 5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа
передані як аргументи функції.
Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5] */

/* 6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість
чисел більших
Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3 */


/* 7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи
в масиві та залишить тільки ті, які діляться на ціло на 5
Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55] */

/* 8. Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2)
замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно
розбити масив на слова за допомогою функції .split(" "), після чого масив
необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте
можливість розширювати cписок цих слів у майбутньому.
Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing
kidding?"
Приклад: replaceBadWords("Holy shit!") -> "Holy ***!"
Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!" */

/* 9. Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні
склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди
видаляються. Рядок приводится до нижнього регістру.
Приклад: divideByThree("Commander) -> ["com", "man", "der"]
Приклад: divideByThree("live") -> ["liv", "e"] */

/*10. Створіть функцію generateCombinations(word), яка видасть всі можливі
перестановки(унікальні, без повторень) букв в слові. Для тестів не передавайте
слова в яких більше 10 букв. Краще взагалі обмежити работу функції 10
буквами.
Приклад: generateCombinations("man") -> ["man", "mna", "amn", "anm", "nam",
"nma"]
Приклад: generateCombinations("ol") -> ["ol", "lo"] */