const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const topics = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

/* 01. Розділіть студентів на пари(хлопець + дівчина) для работи над
проєктом. У вас повинен вийти вкладений масив з парами студентів:
[["Олександр", "Олена"], [..], [...]]; */

const divideIntoPairs = (students) => {
  const maleStudents = [];
  const femaleStudents = [];

  for (let i = 0; i < students.length; i++) {
    if (students[i].endsWith("а")) {
      femaleStudents.push(students[i]);
    } else {
      maleStudents.push(students[i]);
    }
  }

  const pairs = [];
  for (let i = 0; i < maleStudents.length; i++) {
    pairs.push([maleStudents[i], femaleStudents[i]]);
  }

  return pairs;
};

const studentPairs = divideIntoPairs(students);
console.log(studentPairs);

/* 02. Зіставте пари з попереднього завдання та теми проєктів, над
якими студенти будуть працювати.
Повинен вийти вкладений масив виду: [["Олександр і Олена",
"Теорія автоматів"], [...], [...]] */

const assignTopics = (studentPairs, topics) => {
  const assignedTopicsToPairs = [];

  for (let i = 0; i < studentPairs.length; i++) {
    assignedTopicsToPairs.push([studentPairs[i].join(" і "), topics[i]]);
  }

  return assignedTopicsToPairs;
};

const assignedTopicsToPairs = assignTopics(studentPairs, topics);
console.log(assignedTopicsToPairs);

/* 03. Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...],
[...]] */

const assignMarks = (students, marks) => {
  const studentMarks = [];

  for (let i = 0; i < students.length; i++) {
    studentMarks.push([students[i], marks[i]]);
  }

  return studentMarks;
};

const studentMarks = assignMarks(students, marks);
console.log(studentMarks);

/* 04. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт
(тут функція буде не чистою, але не повинна мутувати массив):
[["Олександр і Олена", "Теорія автоматів", 5], [...], [...]] */

const assignRandomMark = (assignedTopicsToPairs) => {
    const randomMarkforPairs = [];

    for (let i = 0; i < assignedTopicsToPairs.length; i++) {
        randomMarkforPairs.push([assignedTopicsToPairs[i], (Math.floor(Math.random() * 5) + 1)]);
      }
      return randomMarkforPairs;
    }
    
    const randomMarkforPairs = assignRandomMark(assignedTopicsToPairs);
    console.log(randomMarkforPairs);
    