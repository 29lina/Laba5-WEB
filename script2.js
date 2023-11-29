/// Усього 40 питань

/// Для тесту рандомно оберуться 30 питань, які будуть оцінюватися по 1 балу (максимально можна отримати 30 балів)

var quizData = [
    /// ПОЧАТКОВИЙ РІВЕНЬ
    /// Запитання з однією правильною відповіддю

    // 1
    {
        type: "normal",
        question: "Що таке CSS?",
        answers: [
            "Creative Style Sheets",
            "Colorful Style Sheets",
            "Computer Style Sheets",
            "Cascading Style Sheets",
        ],
        correct: "Cascading Style Sheets",
    },

    // 2
    {
        type: "normal",
        question: "В якому HTML елементі правильно підключати CSS файл?",
        answers: [
            "< body >",
            "Вкінці документа",
            "< head >",
            "< script >",
        ],
        correct: "< head >",
    },

    // 3
    {
        type: "normal",
        question: "Який HTML атрибут використовується для inline CSS стилів? ",
        answers: [
            "style",
            "align",
            "class",
            "styles",
        ],
        correct: "style",
    },

    // 4
    {
        type: "normal",
        question: "Виберіть правильний CSS синтаксис:",
        answers: [
            "{div;color:black;}",
            "div:color=black;",
            "div {color: black;}",
            "{div:color=black;}",
        ],
        correct: "div {color: black;}",
    },

    // 5
    {
        type: "normal",
        question: "Як правильно додавати коментарі в CSS документ?",
        answers: [
            "< !-- коментар -->",
            "/* коментар */ ",
            "// коментар",
            "// коментар // ",
        ],
        correct: "/* коментар */",
    },

    // 6
    {
        type: "normal",
        question: "Яка CSS властивість відповідає за розмір тексту?",
        answers: [
            "text-size",
            "size",
            "font-size",
            "text",
        ],
        correct: "font-size",
    },

    // 7
    {
        type: "normal",
        question: "Яке з наведених правил не містить помилок?",
        answers: [
            "body (color:red)",
            "body:color:red",
            "body {color:red}",
            "{body:color=red}",
        ],
        correct: "body {color:red}",
    },

    // 8
    {
        type: "normal",
        question: "Як звернутись до елемента по класу?",
        answers: [
            "test",
            ".test",
            "#test",
            "*test",
        ],
        correct: ".test",
    },

    /// Запитання з декількома правильними відповідями

    // 9
    {
        type: "muliple choice",
        question: "Які з наступних одиниць вимірювання можна використовувати для властивості width??",
        answers: [
            "px",
            "em",
            "%",
            "rem",
        ],
        correct: ["px", "em", "%"],
    },

    // 10
    {
        type: "muliple choice",
        question: "Які властивості використовуються для центрування блока в горизонтальному та вертикальному напрямках?",
        answers: [
            "margin",
            "padding",
            "text-align",
            "position",
        ],
        correct: ["margin", "position"],
    },

    // 11
    {
        type: "muliple choice",
        question: "Вибрати властивості тексту:",
        answers: [
            "color",
            "font-family",
            "text-align",
            "background-color",
            "font-size"
        ],
        correct: ["color", "font-family", "text-align", "font-size"],
    },

    // 12
    {
        type: "muliple choice",
        question: "Селекторами можуть бути",
        answers: [
            "теги",
            "атрибути",
            "класи",
            "ідентифікатори",
        ],
        correct: ["теги", "класи", "ідентифікатори"],
    },


    // 13
    {
        type: "muliple choice",
        question: "Оберіть правильні твердження:",
        answers: [
            "CSS - це мова розмітки, яка використовується для візуального оформлення веб-сайтів.",
            "За допомогою CSS можна змінювати розмір, колір, фонове зображення, рівень прозорості, розташування елементів, тощо.",
            "Об'єкти на сторінці розміщуються за допомогою HTML. А ось CSS відповідає за те, як ці об'єкти виглядають.",
            "CSS стилі можна додавати до HTML сторінки тільки за допомогою посилання на файл зі стилями",
        ],
        correct: ["CSS - це мова розмітки, яка використовується для візуального оформлення веб-сайтів.", "За допомогою CSS можна змінювати розмір, колір, фонове зображення, рівень прозорості, розташування елементів, тощо.", "Об'єкти на сторінці розміщуються за допомогою HTML. А ось CSS відповідає за те, як ці об'єкти виглядають."],
    },

    // 14
    {
        type: "muliple choice",
        question: "Властивість border-style...",
        answers: [
            "задає товщину рамки",
            "задає стиль рамки",
            "без цієї властивості рамка відображатися не буде",
            "стиль абзаца",
        ],
        correct: ["задає стиль рамки", "без цієї властивості рамка відображатися не буде"],
    },

    // 15
    {
        type: "muliple choice",
        question: "Властивість border-style має значення...",
        answers: [
            "solid",
            "color",
            "double",
            "dashed",
            "dotted"
        ],
        correct: ["solid", "double", "dashed", "dotted"],
    },

    /// СЕРЕДНІЙ РІВЕНЬ
    /// Запитання з випадним списком відповідей

    // 1
    {
        type: "select",
        question: "Оберіть правильний варіант відповіді:",
        text: "Яке значення за промовчанням встановлено для opacity: %answer%",
        answers: [
            "100",
            "1",
            "0"
        ],
        correct: ["1"],
    },

    // 2
    {
        type: "select",
        question: "Оберіть правильний варіант відповіді:",
        text: "Якого псевдоелемента не існує у CSS: %answer%",
        answers: [
            "::after",
            "::first-letter",
            "::last-letter",
            "::selection"
        ],
        correct: ["::last-letter"],
    },

    // 3
    {
        type: "select",
        question: "Оберіть правильний варіант відповіді:",
        text: "Як правильно оголосити змінну в CSS: %answer%",
        answers: [
            "$main-color: black;",
            "$mainColor: black;",
            "@main-color: black;",
            "--main-color: black;"
        ],
        correct: ["--main-color: black;"],
    },

    // 4
    {
        type: "select",
        question: "Оберіть правильний варіант відповіді:",
        text: "За допомогою якого тега можна зробити нумерований перелік: %answer%",
        answers: [
            "ul",
            "ol",
            "dl",
            "dd"
        ],
        correct: ["ol"],
    },

    // 5
    {
        type: "select",
        question: "Оберіть правильний варіант відповіді:",
        text: "Яка ширина HTML-елемента div без змісту: %answer%",
        answers: [
            "100px",
            "0px",
            "100%",
            "0%"
        ],
        correct: ["100%"],
    },

    // 6
    {
        type: "select",
        question: "Оберіть правильний варіант відповіді:",
        text: "CSS-властивість background-image може містити декілька зображень: %answer%",
        answers: [
            "Так",
            "Ні"
        ],
        correct: ["Так"],
    },

    // 7
    {
        type: "select",
        question: "Оберіть правильний варіант відповіді:",
        text: "Як зробити так, щоб кожне слово в тексті починалося з великої літери: %answer%",
        answers: [
            "text-style: capitalize;",
            "text-transform: capitalize;",
            "style: capitalize;",
            "transform: capitalize;"
        ],
        correct: ["text-transform: capitalize;"],
    },

    // 8
    {
        type: "select",
        question: "Оберіть правильний варіант відповіді:",
        text: "Який псевдоклас спрацює під час встановлення курсору в текстовому полі (input): %answer%",
        answers: [
            ":hover",
            ":active",
            ":not(:active)",
            ":focus"
        ],
        correct: [":focus"],
    },

    // 9
    {
        type: "select",
        question: "Оберіть правильний варіант відповіді:",
        text: "Що з наведеного не є тегом: %answer%",
        answers: [
            "align",
            "div",
            "header",
            "nav"
        ],
        correct: ["align"],
    },

    // 10
    {
        type: "select",
        question: "Оберіть правильний варіант відповіді:",
        text: "Виберіть правило CSS: %answer%",
        answers: [
            "input",
            "footer",
            "h1",
            "Медіазапит"
        ],
        correct: ["Медіазапит"],
    },

    // 11
    {
        type: "select",
        question: "Оберіть правильний варіант відповіді:",
        text: "За допомогою якого тегу можна додати зображення: %answer%",
        answers: [
            "img",
            "br",
            "p",
            "table"
        ],
        correct: ["img"],
    },

    // 12
    {
        type: "select",
        question: "Оберіть правильний варіант відповіді:",
        text: "Властивість 'text-align:justify;' вирівнює текст по: %answer%",
        answers: [
            "центру",
            "правій стороні",
            "ширині",
            "лівій стороні"
        ],
        correct: ["ширині"],
    },

    /// СКЛАДНИЙ РІВЕНЬ
    /// Запитання з введенням тексту

    // 1
    {
        type: "enter text",
        question: "Яка властивість використовується для встановлення фонового зображення елемента?",
        correct: "background-image",
    },

    // 2
    {
        type: "enter text",
        question: "Яка властивість визначає верхній відступ зовні елемента?",
        correct: "margin-top",
    },

    // 3
    {
        type: "enter text",
        question: "Який тег використовують для вставки відео?",
        correct: "< video >",
    },

    // 4
    {
        type: "enter text",
        question: "Який тег використовують для вставки аудіо?",
        correct: "< audio >",
    },

    // 5
    {
        type: "enter text",
        question: "Як зробити текст в < p > елементі жирним?",
        correct: "p {font-weight:bold;}",
    },

    // 6
    {
        type: "enter text",
        question: "Як називають головний .html файл?",
        correct: "index.html",
    },

    // 7
    {
        type: "enter text",
        question: "Браузер видаляє зайві відступи перед тим, як відобразити HTML файл?",
        correct: "Так",
    },

    // 8
    {
        type: "enter text",
        question: "Який атрибут використовують, щоб підказати, що саме вводити в input поле?",
        correct: "placeholder",
    },

    /// Завдання на виправлення помилки

    // 9
    {
        type: "enter text",
        question: "Виправ помилку: color: 000;",
        correct: "color: #000;"
    },

    // 10
    {
        type: "enter text",
        question: "Виправ помилку: font-size: 12 px;",
        correct: "font-size: 12px;",
    },

    // 11
    {
        type: "enter text",
        question: "Виправ помилку: line-height: 1,5;",
        correct: "line-height: 1.5;",
    },

    // 12
    {
        type: "enter text",
        question: "Виправ помилку: margin: 0",
        correct: "margin: 0;",
    },

    // 13
    {
        type: "enter text",
        question: "Виправ помилку: padding: 10px, 20px, 30px, 40px;",
        correct: "padding: 10px 20px 30px 40px;",
    },
];


/// Оголошення селекторів

const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".login_btn");
const overlay = document.querySelector(".overlay");
const submitBtn = document.querySelector(".submit_btn");
const quizInner = document.querySelector(".quiz_inner");
const header = document.querySelector(".header");


/// Контейнери

var headerContainer;
var taskContainer
var listContainer;

var loginInputs;


/// Інфа про студента

var loginInfo = {};


/// Бал студента

let score = 0;

let questionIndex = 0;


// Відкриття модальних вікон
openModalBtn.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);

// Відстеження: відповідь -> наступне запитання
submitBtn.addEventListener("click", () => {
    submitBtn.onclick = checkAnswer;
    saveInfo();
    changeModal();
    shuffle(quizData);
    showQuestion();

}, { once: true });

// Відкрити модальне
function openModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

// Закрити модальне
function closeModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

// Збререження відповіді
function saveInfo() {
    loginInputs = document.querySelectorAll(".login_input");
    for (i = 0; i < loginInputs.length; i++) {
        var element = loginInputs[i];
        var name = element.name;
        var value = element.value;
        if (name) {
            loginInfo[name] = value;
        }
    }
}

// Зміна модального
function changeModal() {
    quizInner.innerHTML =
        `<div class="header_container"></div>
          <div class="task_container">
              <ul class="quiz_list">
              </ul>
          </div>`;
    headerContainer = document.querySelector(".header_container");
    taskContainer = document.querySelector(".task_container");
    listContainer = document.querySelector(".quiz_list");
    submitBtn.innerHTML = 'Відповісти';
    quizInner.style.display = 'block';
}

// Очищення
function clearPage() {
    headerContainer.innerHTML = '';
    listContainer.innerHTML = '';
}

// Рандомний вибір
function shuffle(array) {
    let j, temp;
    for (let i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
    }
    return array;
}


/// Вивід запитань

function showQuestion() {
    const headerTemplate = `<h2 class="title">%title%</h2>`;
    const title = headerTemplate.replace('%title%', quizData[questionIndex]['question']);
    headerContainer.innerHTML = title;

    
    /// Перевірка типів
    
    if (quizData[questionIndex]['type'] === 'normal') { // Звичайне запитання
        /// перемішування
        shuffle(quizData[questionIndex]['answers']);

        /// вивід
        for (answerText of quizData[questionIndex]['answers']) {
            const questionTemplate =
                `<li>
                      <label>
                          <input value="%answer%" type="radio" class="answer" name="answer" />
                          <span>%answer%</span>
                      </label>
                  </li>`;
            const answerHtml = questionTemplate.replace('%answer%', answerText).replace('%answer%', answerText);
            listContainer.innerHTML += answerHtml;
        }

    } else if (quizData[questionIndex]['type'] === 'muliple choice') { // Декілька відповідей
        /// перемішування
        shuffle(quizData[questionIndex]['answers']);
        /// вивід
        for (answerText of quizData[questionIndex]['answers']) {
            const questionTemplate =
                `<li>
                      <label>
                          <input value="%answer%" type="checkbox" class="answer" name="answer" />
                          <span>%answer%</span>
                      </label>
                  </li>`;
            const answerHtml = questionTemplate.replace('%answer%', answerText).replace('%answer%', answerText);
            listContainer.innerHTML += answerHtml;
        }

        // Вписування відповіді
    } else if (quizData[questionIndex]['type'] === 'enter text') {
        /// вивід
        const answerHtml =
            `<li>
                  <label>
                      <input type="text" class="answer" name="answer" placeholder="Поле для вводу" />
                  </label>
              </li>`;
        listContainer.innerHTML = answerHtml;

    } else if (quizData[questionIndex]['type'] === 'select') { // З випадним списком відповідей
        /// перемішування
        shuffle(quizData[questionIndex]['answers']);

        // вивід
        const selectTemplate = `<select class="quiz_select"></select>`;
        let textTemplate = quizData[questionIndex]['text'];
        for (i = 0; i < quizData[questionIndex]['answers'].length; i++)
            textTemplate = textTemplate.replace('%answer%', selectTemplate);
        const text = `<p class="select_text"> ${textTemplate}</p>`;
        listContainer.innerHTML = text;
        const selectContainer = taskContainer.querySelectorAll('.quiz_select');
        for (j = 0; j < selectContainer.length; j++) {
            selectContainer[j].innerHTML += `<option selected="selected" disabled="disabled">Select</option>`
            for (i = 0; i < quizData[questionIndex]['answers'].length; i++)
                selectContainer[j].innerHTML += `<option>${quizData[questionIndex]['answers'][i]}</option>`;
        }
    }
}


/// Перевірка відповідей

function checkAnswer() {
    
    /// Аналогічно як до показу запитань, перевірка кожного з типів
    
    if (quizData[questionIndex]['type'] === 'normal') {
        const checkedRadio = taskContainer.querySelector('input[type="radio"]:checked');
        const userAnswer = checkedRadio.value;
        if (userAnswer === quizData[questionIndex]['correct']) {
            score++;
        }
    } else if (quizData[questionIndex]['type'] === 'muliple choice') {
        const checkedCheckBox = Array.from(taskContainer.querySelectorAll('input[type="checkbox"]:checked'));
        let userAnswer = [];
        for (i = 0; i < checkedCheckBox.length; i++) {
            userAnswer[i] = checkedCheckBox[i].value;
        }

        if (JSON.stringify(quizData[questionIndex]['correct'].sort()) === JSON.stringify(userAnswer.sort())) {
            score++;
        }
    } else if (quizData[questionIndex]['type'] === 'enter text') {
        let userAnswer = taskContainer.querySelector('input[type="text"]');

        if (quizData[questionIndex]['correct'] === userAnswer.value) {
            score++;
        }
    } else if (quizData[questionIndex]['type'] === 'select') {
        const userAnswerTemplate = Array.from(taskContainer.querySelectorAll('.quiz_select'));
        let userAnswer = [];
        for (i = 0; i < userAnswerTemplate.length; i++) {
            userAnswer[i] = userAnswerTemplate[i].value;
        }

        if (JSON.stringify(quizData[questionIndex]['correct']) === JSON.stringify(userAnswer)) {
            score++;
        }
    }

    
    /// Не більше 30 питань
    
    if (questionIndex !== 29) {
        questionIndex++;
        clearPage();
        showQuestion();
        return;
    } else {
        clearPage();
        showResults();
        sendResults();
    }
}


/// Вивід результату тестування

function showResults() {
    const headerTemplate = `<h2 class="title">Тест заверешено!</h2>`;
    headerContainer.innerHTML = headerTemplate;

    const resultTemplate = `<h3 class="result_msg">%result%</h3>`;
    let result = `${loginInfo.name}, Ви набрали ${score}/100 балів!`;
    const finalResult = resultTemplate.replace('%result%', result);
    taskContainer.innerHTML = finalResult;
    loginInfo.score = `${score}/30`;

    submitBtn.onclick = null;
}