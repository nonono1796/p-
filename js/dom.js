// headの取得
console.log(document.head);
// bodyの取得
console.log(document.body);
// ID:first-listの取得
console.log(document.getElementById('first-list'));
// class:listの取得
console.log(document.getElementsByClassName('list'));
// 定数headingにclassheadingを追加
const heading =document.getElementsByClassName('heading');
//  HTML要素を一つずつ取得
for(let i = 0; i < heading.length; i++){
    console.log(heading[i]);
}
// HTML要素をCSSセレクタで取得し、中身を出力する
console.log(document.querySelectorAll('.heading'));
console.log(document.querySelectorAll('li'));
// HTML要素をCSSセレクタで取得し、中身を出力する
const li = document.createElement('li');
// 新しくli要素を作成し、定数に代入する
li.textContent = 'JavaScriptで新しく作成したリスト3';
document.querySelector('ul').appendChild(li);
