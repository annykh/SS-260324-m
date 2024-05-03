let p = document.querySelector('p');

let paragraphs = document.querySelectorAll('p');

console.log(p.innerText);
console.log(p.innerHTML);

let link = document.querySelector('a');

// link.setAttribute()
console.log(link.getAttribute('href'));//https://www.google.com/
console.log(link.hasAttribute('href'));//true
console.log(link.hasAttribute('target'));//false
link.removeAttribute('href');//удаляет


let block = document.createElement('div');
block.innerText = 'Block 1';
document.body.append(block);
link.before(block);
link.after(block);
document.body.prepend(block);


let remove_p = document.querySelector('.remove');
// удаление элемента
// remove_p.remove();

// display: none если нужно скрыть элемент
remove_p.style.display = 'none';

let block1 = document.querySelector('.block1');

// console.log(block1.classList);

block1.classList.add('new_styles');
block1.classList.remove('red_border');
console.log(block1.classList.contains('red_border'));
block1.classList.toggle('red_border');
block1.classList.replace('new_styles', 'styles');

// Методы classList:
    // • elem.classList.add/remove("class") – добавить/удалить класс.
    // • elem.classList.toggle("class") – добавить класс, если его нет, иначе удалить.
    // • elem.classList.contains("class") – проверка наличия класса, возвращает true/false.
    // • elem.classList.replace(‘oldclass’, ‘newclass’) - заменяет существующий класс на новый класс


let button1 = document.querySelector('.button1');

// анонимная функция
// button1.addEventListener('click', function(){
//     console.log('Hello');
// });

button1.addEventListener('click', on_click);

function on_click(){
    console.log('Hello');
}

// Удаление обработчика
button1.removeEventListener('click', on_click);

// 1.	Написать программу, которая находит параграфы и заменяет в каждом из них текст на “hello”.

// let paragraphs1 = document.querySelectorAll('p');

// for(let i=0; i<paragraphs1.length; i++){
//     paragraphs1[i].innerText = 'Hello';
// }

// function replace_text(p){
//     p.innerText = 'Hello';
// }

// paragraphs1.forEach(replace_text);

// 2.	Написать скрипт, который находит параграфы и первым 3 параграфам меняет текст на указанные пользователем значения.

// let paragraphs1 = document.querySelectorAll('p');

// for(let i=0; i<3; i++){
//     paragraphs1[i].innerText = prompt('enter the text');
// }

// 3.	Написать скрипт, который находит картинки в блоке с классом main и первым 5 картинкам меняет url на указанное значение.

let images = document.querySelectorAll('.main>img');
let url = 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg';

for(let i=0; i<5; i++){
    images[i].setAttribute('src', url);
}

// 6.	Создайте новый элемент <p>, добавьте ему текст и добавьте его после элемента с id "existingElement".

let existingElement = document.querySelector('#existingElement');

let new_p = document.createElement('p');
new_p.innerText = 'New paragraph';
existingElement.after(new_p);

// 17.	Дана ссылка, абзац и кнопка. По нажатию на кнопку запишите href ссылки в текст абзаца.

let link1 = document.querySelector('.link1');
let p_addLink = document.querySelector('.addLink');
let button_click = document.querySelector('.click');

button_click.addEventListener('click', addLink);

function addLink(){
    p_addLink.innerText = link1.getAttribute('href');
}
