const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
    }
    }, {
    name: "Victor",
    course: 4,
    subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
    }
    }, {
    name: "Anton",
    course: 2,
    subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
    }
    }];
    
/* 1. Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента.
Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл */

const getSubjects = (student) => {
    const subjectList = [];
  
    for (let subject in student.subjects) {
      const formattedSubject = subject[0].toUpperCase() + subject.slice(1).replace('_', ' ');
      subjectList.push(formattedSubject);
    }
    return subjectList;
  }

  console.log(getSubjects(students[0]));

/* 2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ.
Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :)*/

const getAverageMark = (student) =>{
    const marks = [];
  
    for (let subject in student.subjects) {
      marks.push(...student.subjects[subject]);
    }
  
    const averageMark = getAverage(marks);
    return Number(averageMark.toFixed(2));
  }
  
  const getAverage = (marks) =>{
    const sum = marks.reduce((total, mark) => total + mark, 0);
    const average = sum / marks.length;
    return average;
  }

  console.log(getAverageMark(students[0]));

/* 3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по
переданому студенту (вам знадобиться функція з попереднього завдання).Повинна бути виведена інформація: курс, ім'я, середня оцінка. */

const getStudentInfo = (student) =>{
    const info = {
      course: student.course,
      name: student.name,
      averageMark: getAverageMark(student)
    };
    return info;
  }

console.log(getStudentInfo(students[0]));

/* 4.Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.*/

const getStudentsNames = (students) => {
    const names = students.map(student => student.name);
    names.sort();
    return names;
  }
  
  console.log(getStudentsNames(students));

/* 5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.*/

const getBestStudent = (students) => {
    const averageMarks = students.map(student => getAverageMark(student));
    const maxAverageMark = Math.max(...averageMarks);
    const bestStudentIndex = averageMarks.indexOf(maxAverageMark);
    return students[bestStudentIndex].name;
  }

  console.log(getBestStudent(students));

/*6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, а значення – к
ількість їх повторень. */

const calculateWordLetters = (word) => {
    const letters = {};
    for (let letter of word) {
      letters[letter] = (letters[letter] || 0) + 1;
    }
    return letters;
  }
  
  console.log(calculateWordLetters("тест"));