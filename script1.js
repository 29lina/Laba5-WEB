// ЗАВДАННЯ 1: СТВОРИТИ ОБ'ЄКТ "ФАКУЛЬТЕТ"
function runTask1() {
    // Створення об'єкта "Факультет"
    let faculty = {
      name: "ІАТЕ",
      phone: "+380123456789"
    };
  
    // Відображення результату
    alert("Назва факультету: " + faculty.name + "\nТелефон факультету: " + faculty.phone);
    return faculty;
  }
  
  // ЗАВДАННЯ 2: СТВОРИТИ ОБ'ЄКТ "ГРУПА" З МЕТОДАМИ ДЛЯ ДОДАВАННЯ, ЗМІНИ ТА ВИДАЛЕННЯ ДАНИХ
  function runTask2() {
    // Створення об'єкта "Група" з властивостями
    let group = {
      specialty: "",
      cypher: "",
      numOfStudents: 0
    };
  
    // Метод для додавання даних
    group.addInfo = function (specialty, cypher, numOfStudents) {
      this.specialty = specialty;
      this.cypher = cypher;
      this.numOfStudents = numOfStudents
    };
  
    // Метод для зміни даних
    group.editInfo = function (specialty, cypher, numOfStudents) {
      this.specialty = specialty;
      this.cypher = cypher;
      this.numOfStudents= numOfStudents
    };
  
    // Метод для видалення даних
    group.deleteInfo = function () {
      this.specialty = "";
      this.cypher = "";
      this.numOfStudents = 0
    };
  
    // Використання методів для додавання, зміни та видалення даних
    group.addInfo("Комп'ютерні науки", "ТР-25", 19);
    alert("Додано дані для групи:\nСпеціальність: " + group.specialty + "\nШифр: " + group.cypher
      + "\nКількість студентів: " + group.numOfStudents);
  
    group.deleteInfo();
    alert("Видалено дані для групи:\nСпеціальність: " + group.specialty + "\nШифр: " + group.cypher
      + "\nКількість студентів: " + group.numOfStudents);
  
    group.editInfo("Кібербезпека", "ТК-28", 25);
    alert("Змінено дані для групи:\nСпеціальність: " + group.specialty + "\nШифр: " + group.cypher
      + "\nКількість студентів: " + group.numOfStudents);
  
    return group;
  }
  
  // ЗАВДАННЯ 3: РЕАЛІЗУВАТИ КОПІЮВАННЯ ВЛАСТИВОСТЕЙ І МЕТОДІВ МІЖ ОБ'ЄКТАМИ "ФАКУЛЬТЕТ" І "ГРУПА".
  function runTask3() {
    // Створення об'єкта "Факультет" з властивостями
    let faculty = runTask1();
    let group = runTask2();
    group = Object.assign(group, faculty);
  
    // Копіювання властивостей і методів з "Факультет" до "Група"
    for (let prop in faculty) {
      if (faculty.hasOwnProperty(prop)) {
        group[prop] = faculty[prop];
      }
    }
  
    // Відображення результату
    alert("Об'єкт 'Група' після копіювання властивостей та методів з 'Факультет':\nСпеціальність: " +
      group.specialty + "\nШифр: " + group.cypher + "\nКількість студентів: " + group.numOfStudents
      + "\nНазва: " + group.name + "\nТелефон: " + group.phone);
  
    return group;
  }
  
  // ЗАВДАННЯ 4: ДОДАТИ В ПРОТОТИП ОБ'ЄКТУ "ГРУПА" МЕТОД "ПОКАЗАТИ ДАНІ"
  function runTask4() {
    let group = runTask2();
  
    // Додавання методу "Показати дані" в прототип об'єкту "Група"
    group.showData = function () {
      alert("Дані групи:\nСпеціальність: " + this.specialty + "\nШифр: " + this.cypher
        + "\nКількість студентів: " + this.numOfStudents);
    };
  
    // Використання методу "Показати дані"
    group.addInfo("Комп'ютерні науки", "ТР-25", 19);
    group.showData();
  }
  
  // ЗАВДАННЯ 5: СТВОРИТИ ОБ'ЄКТ "СЕСІЯ" З УСПАДКУВАННЯМ ВІД "ГРУПА" ТА ДОДАТКОВИМИ МЕТОДАМИ ТА ВЛАСТИВОСТЯМИ
  function runTask5() {
    let group = runTask2();
  
    // Створення об'єкту "Сесія" з успадкуванням від "Група"
    let session = Object.create(group);
    session.expelled = 2;
  
    session.percentageOfNotExpelled = function () {
      return (this.numOfStudents - this.expelled) / this.numOfStudents * 100;
    };
  
    // Перевизначення методу "Показати дані" в об'єкті "Сесія"
    session.showData = function () {
      alert("Дані сесії:\nСпеціальність: " + this.specialty + "\nШифр: " + this.cypher
        + "\nКількість студентів: " + this.numOfStudents + "\nВідраховано: " + this.expelled
        + "\nВідсоток не відрахованих: " + this.percentageOfNotExpelled().toFixed(2) + "%");
    };
  
    // Використання методу "Показати дані" для об'єкту "Сесія"
    session.addInfo("Комп'ютерні науки", "ТР-25", 19);
    session.showData();
  }
  
  // ЗАВДАННЯ 6: РЕАЛІЗУВАТИ КЛАСИ "ГрупаКлас" І "СесіяКлас" З УСПАДКУВАННЯМ МЕТОДІВ ТА ВЛАСТИВОСТЕЙ
  function runTask6() {
    // Клас "ГрупаКлас" з геттерами та сеттерами
    class GroupClass {
      constructor() {
        this._specialty = "";
        this._cypher = "";
        this._numOfStudents = 0
      }
  
      get specialty() {
        return this._specialty;
      }
  
      set specialty(value) {
        this._specialty = value;
      }
  
      get cypher() {
        return this._cypher;
      }
  
      set cypher(value) {
        this._cypher = value;
      }
  
      get numOfStudents() {
        return this._numOfStudents;
      }
  
      set numOfStudents(value) {
        this._numOfStudents = value;
      }
  
      addData(specialty, cypher, numOfStudents) {
        this.specialty = specialty;
        this.cypher = cypher;
        this.numOfStudents = numOfStudents
      }
  
      changeData(specialty, cypher, numOfStudents) {
        this.specialty = specialty;
        this.cypher = cypher;
        this.numOfStudents = numOfStudents
      }
  
      deleteData() {
        this.specialty = "";
        this.cypher = "";
        this.numOfStudents = 0
      }
    }
  
    // Клас "СесіяКлас" успадковує "ГрупаКлас" і має додаткові методи та властивості
    class SessionClass extends GroupClass {
      constructor() {
        super();
        this._expelled = 0;
      }
  
      get expelled() {
        return this._expelled;
      }
  
      set expelled(value) {
        this._expelled = value;
      }
  
      percentageOfNotExpelled() {
        return (this.numOfStudents - this.expelled) / this.numOfStudents * 100;
      }
    }
  
    // Використання класів
    const group = new GroupClass();
    group.addData("Комп'ютерні науки", "ТР-25", 19);
    group.deleteData();
    group.changeData("Кібербезпека", "ТК-28", 25);
  
    const session = new SessionClass();
    session.addData("Комп'ютерні науки", "ТР-25", 19);
    session.expelled = 2;
  
    // Виведення інформації
    alert("Дані групи:\nСпеціальність: " + group.specialty + "\nШифр: " + group.cypher + "\nКількість студентів: "
      + group.numOfStudents);
    alert("Дані сесії:\nСпеціальність: " + session.specialty + "\nШифр: " + session.cypher + "\nКількість студентів: "
      + session.numOfStudents + "\nВідраховано: " + session.expelled + "\nВідсоток не відрахованих: "
      + session.percentageOfNotExpelled().toFixed(2) + "%");
  }
  