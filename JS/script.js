"use strict";

let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);
// console.log используется для выводу данных в консоль
const result = confirm("Are you here?");
alert(result);
// alert используется для вывода уведомления для пользователя

let arr = [1,5,8,10];
alert(arr[2]);

const obj = {
   a: 50
};
obj.a = 10;
console.log(obj.a);

const answer = prompt("Are you Idiot?");
alert(answer + " " + typeof(answer));
// typeof используется для вывода типа элемента
const answers = [];
answers[0] = prompt("Как ваше имя?" + " ");
answers[1] = prompt("Какая у вас Фамилия?" + " ");
answers[2] = +prompt("Ваш номер телефона?" + " ");
// prompt ипользуется для вывода диалогового окна, в котором можно вводить какую-то инфоормацию
alert(answers);

let incr = 10,
    decr = 10;

console.log(++incr);
console.log(--decr);
// оператор ++(инкримент) используется для увеличения числа на 1
// оператор ---(декримент) используется для уменьшения числа на 1
console.log(5%2);
// % от числа, показывает число, которое остается при полном дилении

console.log(2 * 4 === '8');
// === используется для полного сравнения данных
// == Используется для относительного сравнение 2 == '2'

// && Амперсант(используется для оператора и)
// || Используется для оператора или

const isChecked = false,
      isClose = false;
console.log(isChecked || !isClose);
// ! можно использовать при функции сравнения, и поменять булиновый тип true --> false