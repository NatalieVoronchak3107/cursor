const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій",
"Світлана"];
const topics = ["Диференційне рівняння", "Теорія автоматів",
"Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

/* 01. Розділіть студентів на пари(хлопець + дівчина) для работи над
проєктом. У вас повинен вийти вкладений масив з парами студентів:
[["Олександр", "Олена"], [..], [...]]; */

const maleStudents = [];
const femaleStudents = [];

students.forEach((student) => {
  if (student.endsWith("а")) {
    femaleStudents.push(student);
  } else {
    maleStudents.push(student);
  }
});

const pairs = [];
const length = Math.min(maleStudents.length, femaleStudents.length);
for (let i = 0; i < length; i++) {
  pairs.push([maleStudents[i], femaleStudents[i]]);
}

console.log(pairs);

/* 02. Зіставте пари з попереднього завдання та теми проєктів, над
якими студенти будуть працювати.
Повинен вийти вкладений масив виду: [["Олександр і Олена",
"Теорія автоматів"], [...], [...]] */

const pairsWithTopics = [];
pairs.forEach((pair, index) => {
  const topic = topics[index % topics.length];
  pairsWithTopics.push([pair.join(" і "), topic]);
});

console.log(pairsWithTopics);

/* 03. Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...],
[...]] */

const studentMarks = [];
students.forEach((student, index) => {
  studentMarks.push([student, marks[index]]);
});

console.log(studentMarks);

/* 04. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт
(тут функція буде не чистою, але не повинна мутувати массив):
[["Олександр і Олена", "Теорія автоматів", 5], [...], [...]] */

const pairsWithTopicsAndMarks = [];
for (let i = 0; i < pairs.length; i++) {
  const randomMark = Math.floor(Math.random() * 5) + 1;
  const pairWithMark = [pairs[i].join(" і "), topics[i], randomMark];
  pairsWithTopicsAndMarks.push(pairWithMark);
}

console.log(pairsWithTopicsAndMarks);

/* const pairsTheme = getThemes(pairs, themes);
const studentMarks = getMarks(students, marks);
const pairsMarks = getPairsMarks(pairs, themes);


console.log(pairsTheme);
console.log(studentMarks);
console.log(pairsMarks);
*/