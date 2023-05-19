// В HTML есть разметка формы.Напиши скрипт который будет сохранять 
// значения полей в локальное хранилище когда пользователь что - то
// печатает.

// <form class="feedback-form" autocomplete="off">
//   <label>
//     Email
//     <input type="email" name="email" autofocus />
//   </label>
//   <label>
//     Message
//     <textarea name="message" rows="8"></textarea>
//   </label>
//   <button type="submit">Submit</button>
// </form>

//     Выполняй это задание в файлах 03 - feedback.html и 03 - feedback.js. 
// Разбей его на несколько подзадач:

// Отслеживай на форме событие input, и каждый раз записывай в локальное 
// хранилище объект с полями email и message, в которых сохраняй текущие 
// значения полей формы.Пусть ключом для хранилища будет строка
// "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там есть 
// сохраненные данные, заполняй ими поля формы.В противном случае поля 
// должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи 
// объект с полями email, message и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. 
// Для этого добавь в проект и используй библиотеку lodash.throttle.

import throttle from 'lodash.throttle';

const form = document.querySelector('form.feedback-form');
const mail = document.querySelector('input')
const message = document.querySelector('textarea')

form.addEventListener('submit', formReload);
form.addEventListener('input', throttle(formReloadListen, 500));

 const STARAGE_KEY = "feedback-form-state";
const formSubmit = {};
    
popularTextarea();

function formReloadListen(event) {
   
    formSubmit[event.target.name] = event.target.value;
    localStorage.setItem(STARAGE_KEY, JSON.stringify(formSubmit));

};

function formReload(event) {
    event.preventDefault();
    
    event.currentTarget.reset();
    localStorage.removeItem(STARAGE_KEY);

};

function popularTextarea() {
           const saveMessage = JSON.parse(localStorage.getItem(STARAGE_KEY));
    if (saveMessage) {
        mail.value = saveMessage.email;
    message.value = saveMessage.message;
    }
};


