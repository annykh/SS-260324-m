// Array

// let fruits = ['Apple', 'Banana', 'Orange', 'Kiwi'];

// console.log(fruits.length);

// console.log(fruits[1]);

// console.log(fruits[fruits.length - 1]);

// fruits.push('Avocado');

// console.log(fruits);

// fruits.unshift('Pineapple');

// console.log(fruits);

// fruits.shift();

// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// fruits.splice(start, deleteCount, elem1, elem2);

// fruits.splice(0, 3);
// fruits.splice(0, 3, 'Pear', 'Mandarin');
// fruits.splice(1, 0, 'Avocado', 'Apple');

// console.log(fruits);


// for(let num = 0; num < 5; num++){
//     console.log(num);
//     if(num == 2){
//         break;
//     }
// } //0, 1, 2

// for(let num = 0; num < 5; num++){
//     if(num == 2){
//         break;
//     }
//     console.log(num);
// } //0, 1


// for(let num = 0; num < 5; num++){
//     if(num == 2 || num == 3){
//         continue;
//     }
//     console.log(num);
// } //0, 1, 4





// let numbers = [1, 4, 2, 0, -12, 5, 23, -4, 0, -1, -6, 9];

// for(let i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }


// for(let i=0; i<numbers.length; i++){
//     if(numbers[i]>0){
//         console.log(numbers[i]);
//     }
// }


// let sum = 0;

// for(let i=0; i<numbers.length; i++){
//     sum = sum + numbers[i];
// }


// Найти сумму положительных чисел массива

// let pos_sum = 0;

// for(let i=0; i<numbers.length; i++){
//     if(numbers[i] > 0){
//         pos_sum = pos_sum + numbers[i];
//     }
// }

// console.log(pos_sum);

// for(let i=0; i<numbers.length; i++){
//     if(numbers[i] % 2 === 0 && numbers[i] !== 0){
//         console.log(numbers[i]);
//     }
// }

// Найти сумму четных и нечетных чисел из массива и вывести разницу между ними. Вычесть из большего меньшее


// let odd_sum = 0;
// let even_sum = 0;

// for(let i=0; i<numbers.length; i++){
//     if(numbers[i] % 2 === 0){
//         even_sum += numbers[i];
//     }
//     else{
//         odd_sum += numbers[i];
//     }
// }
// console.log(odd_sum);
// console.log(even_sum);

// if(even_sum>odd_sum){
//     console.log(even_sum-odd_sum);
// }
// else{
//     console.log(odd_sum-even_sum);
// }


// Вывести индекс первого элемента со значением 0;

// let numbers = [1, 4, 2, 0, -12, 5, 23, -4, 0, -1, -6, 9];

// for(let i=0; i<numbers.length; i++){
//     if(numbers[i] === 0){
//         console.log(i);
//         break;
//     }
// }

// Вывести индекс последнего четного элемента

// for(let i=numbers.length-1; i>=0; i--){
//     if(numbers[i]%2===0){
//         console.log(i);
//         break;
//     }
// }

// Object

// let obj = {}; //empty object

// let user = {
//     firstName: 'John',
//     lastName: 'Smith',
//     age: 20,
//     gender: 'Male',
//     'soft skills': ['Creativity', 'Team working'],
//     date_of_birth: {
//         day: 5,
//         month: 'June',
//         year: 2000
//     }
// };

// // Имя и фамилию

// console.log(`${user.firstName} ${user.lastName}`);
// console.log(user["soft skills"]);

// // Creativity, Team working

// console.log(`${user["soft skills"][0]}, ${user["soft skills"][1]}`);
// console.log(user.date_of_birth.day);
// console.log(user.date_of_birth.month);
// console.log(user.date_of_birth.year);

// // Добавить новое свойство

// user.admin = 'Bob';

// // Изенить значение firts_name на Pete

// user.firstName = 'Pete';

// // Удалить свойство age

// delete user.age;

// let products = [
//     {
//         id: 1,
//         title: "bicycle",
//         price: 45000,
//         discount: 10
//     },
//     {
//         id: 2,
//         title: "roller-skates",
//         price: 15000,
//         discount: 5
//     },
//     {
//         id: 3,
//         title: "Kick scooter",
//         price: 10000,
//         discount: 30
//     },
//     {
//         id: 4,
//         title: "skis",
//         price: 25000,
//         discount: 20
//     },
//     {
//         id: 5,
//         title: "skate",
//         price: 10000,
//         discount: 0
//     }
// ];

// for(let i=0; i<products.length; i++){
//     console.log(products[i]);
// }

// Вывести только названия продуктов
// for(let i=0; i<products.length; i++){
//     console.log(products[i].title);
// }

// Вывести “<название> (<цена>)”

// for(let i=0; i<products.length; i++){
//     console.log(`${products[i].title} (${products[i].price})`);
// }

// function

// function function_name(param1, param2){
//     ...
// }

// function_name(arg1, arg2)

// Написать функцию, которая находит максимум двух чисел

// let num1 = 20;
// let num2 = 10;

// function max(a, b){
//     if(a > b){
//         return a;
//     }
//     else {
//         return b;
//     }
// }

// console.log(max(num1, num2));

// Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.

function getEvenElem(arr){
    let EvenArray = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2===0){
            EvenArray.push(arr[i]);
        }
    }
    return EvenArray;
}

let numbers = [12, 0, -3, 5, 7, 14, -20, 8, -80];

console.log(getEvenElem(numbers));
