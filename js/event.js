const btn = document.getElementById('output-btn');

btn.addEventListener('click',()=>{
    console.log('クリックされました');
});

const addbtn = document.getElementById('add-btn');
const parentlist = document.getElementById('parent-list');

addbtn.addEventListener('click',()=>{
    const childlist = document.createElement('li');
    childlist.textContent = 'avaScriptで新しく作成したリスト';
    parentlist.appendChild(childlist);
});

const countBtn = document.getElementById('count-btn');

countBtn.addEventListener('click',()=>{
    const text = document.forms.textForm.textbox.value;
    console.log(text.length + '文字');
    const counttext = document.getElementById('count-text');
    const mojisu = document.createElement('p');
    mojisu.textContent = text.length + '文字です';
    counttext.appendChild(mojisu);
});

const areaBtn = document.getElementById('area-btn');

areaBtn.addEventListener('click',()=>{
    const area = document.forms.areaForm.area.value;
    console.log(area);
});

const osBtn = document.getElementById('os-btn');
osBtn.addEventListener('click',()=>{
    const items = document.forms.osForm.os;
    for(let i = 0 ; i < items.length ; i++){
        if(items[i].checked){
            console.log(items[i].value);
        }
    }
});


