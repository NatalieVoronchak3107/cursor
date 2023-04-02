/* 1. Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про
курс, учбовий заклад та імені студента. */

class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this._marks = [5, 4, 4, 5];
    this.student = true;
  }

  getInfo() {
    console.log(`Студент ${this.course}го курсу ${this.university}, ${this.fullName}`);
  }

/* 2. Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5] */

  get marks() {
    if (this.dismissed) {
        return null;
      }
    return this._marks;
  }

/* 3. Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив
this.marks -> [5, 4, 4, 5, 5] */

  set marks(marks) {
    if (this.dismissed) {
        return null;
      }
    this._marks.push(marks);
  }

/* 4. Створіть метод отримання середнього балу this.getAverageMark() -> 4.6 */

getAverageMark() {
    if (this.dismissed) {
        return null;
      }
    let sum = 0;
    for (let i = 0; i < this._marks.length; i++) {
    sum += this._marks[i];
    }
    return (sum / this._marks.length).toFixed(1);
    }

/* 5. Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких
помилок, просто повертається завжди null замість масиву оцінок) */

dismiss() {
    this.dismissed = true;
    this._marks = null;
  }

/* 6. Створіть метод this.recover, який дозволить поновити студента */

recover() {
    this.dismissed = false;
  }
}
let student = new Student("Вищої Школи Психотерапії м.Одеса",1,"Остап Родоманський Бендер");
student.getInfo();
console.log(student.marks);
student.marks = 5;
console.log(student.marks)
console.log(student.getAverageMark());
student.dismiss();
console.log(student.marks);
student.recover();
console.log(`Студент ${student.course}го курсу ${student.university}, ${student.fullName} поновлений.`);

//Advanced

/* 1. Створіть новий клас BudgetStudent, який повністю наслідує клас Student */



/* 2. Бюджетний студент може отримати стипендію за допомогою методу this.getScholarship.
Отримання стипендії супроводжується виведенням інформації в консоль: Ви отримали 1400 грн. стипендії */

/* 3. Метод отримання стипендії автоматично викликається кожні 30 секунд післе створення об'єкту. Підказка: викликайте його в constructor.*/

/* 4. Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього вище або дорівнює 4.0 */

/* 5. Якщо студента виключено, він не отримує стипендію (думаю це було і так очевидно :) */
