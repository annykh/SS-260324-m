// console.log('Hello world');

// let num = 14;
// num = 16;
// const pi = 3.14;
// pi = 3; error

// String
// Number

//String

// "" '' ``

// let first_name = 'John';
// let last_name = 'Smith';
// let age = 20;

// Hello, my name is <first_name> <last_name>. I'm <age>.

// console.log('Hello, my name is ' + first_name + ' ' + last_name + ". I'm " + age + '.');
// console.log(`Hello, my name is ${first_name} ${last_name}. I'm ${age}.`);

// Number

// 30
// 12.3
// Infinity
// -Infinity
// NaN

// console.log(12/0); //Infinity
// console.log(-12/0); //-Infinity

// not a number
// console.log('abc'/2);//NaN
// console.log('abc' + 2);//'abc2'
// console.log('2' + 2);//'22'

// функция isNaN
// console.log(isNaN(3));//false(ложно)
// console.log(isNaN('str'));//true(истино) -> Number('str') => NaN

// console.log(isNaN('$17.80'));//true
// console.log(isNaN('17.80'));//false

// let price = '17.80';

// let final_price = Number(price) - Number(price) *10 / 100;

// console.log(final_price);


// let user_name = prompt('Enter your name');
// let user_age = +prompt('Enter your age');

// console.log(user_name);
// console.log(user_age);

// Задание : Написать программу, которая считывает два числа (объявляем две переменные и записываем туда результат работы двух вызовов prompt) и выводит их разницу, сумму и произведение 
// (“Разность чисел <a> и <b> равна <sub>, сумма чисел <a> и <b> равна <sum>, произведение чисел <a> и <b> равно <mult>”)

// let num1 = +prompt('Enter the first number');
// let num2 = Number(prompt('Enter the second number'));

// let sub = num1 - num2;
// let sum = num1 + num2;
// let mult = num1 * num2;

// console.log(`Разность чисел ${num1} и ${num2} равна ${sub}, сумма чисел ${num1} и ${num2} равна ${sum}, произведение чисел ${num1} и ${num2} равно ${mult}`);


// Условные операторы

// if (Условие 1){
//     Действия
// }

// if (Условие 1){
//     Действия
// }
// else{
    // Действия
// }

// if (Условие 1){
//     Действия 1
// }
// else if(Условие 2){
//     Действия 2
// }
// else if(Условие 3){
//     Действия 3
// }
// else{
//      Действия N
// }


// >
// <
// >=
// <=
// ==
// !=
// ===

// or ||
// and &&

let user_age = +prompt('Enter your age');

if(user_age>=18){
    console.log('Доступ открыт');
}
else if (user_age>=16 && user_age<18){
    console.log('Есть доступ к первому контенту');
}
else{
    console.log('Доступ закрыт');
}

let number = -11;

// Если число положительное или делится на 3 без остатка, выводим 'true'
// Если нет вывподим 'false'

if(number > 0 || number % 3 == 0){
    console.log('true');
}
else{
    console.log('false');
}


let number2 = '12';

if(number2 == 12){ // 12 == 12
    console.log('true');
}
else{
    console.log('false');
}

if(number2 === 12){ // 12 == 12 and string == number 
    console.log('true');
}
else{
    console.log('false');
}
