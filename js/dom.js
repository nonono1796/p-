console.log(document.head);

console.log(document.body);

console.log(document.getElementById('first-list'));

console.log(document.getElementsByClassName('list'));

const heading =document.getElementsByClassName('heading');

for(let i = 0; i < heading.length; i++){
    console.log(heading[i]);
}
console.log(document.querySelectorAll('.heading'));
console.log(document.querySelectorAll('li'));

const li = document.createElement('li');

li.textContent = 'JavaScriptで新しく作成したリスト3';
document.querySelector('ul').appendChild(li);
