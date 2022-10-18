const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const reset = document.getElementById('reset');
const even = document.getElementById('action');
const tableMaker = document.getElementById('action2');
const tableWithImages = document.getElementById('action3');
const five = document.getElementById('action4');

// 1
minus.addEventListener('click', () =>{
    minusFun();
});

plus.addEventListener('click', () => {
    plusFun();
});

reset.addEventListener('click', () => {
    resetFun();
});

// 2
action.addEventListener('click', () => {
    let a = document.getElementById('area2');
    let b = document.getElementById('area3');
    a.innerHTML = '';
    b.innerHTML = '';
    evenNumbers();
});

// 3
tableMaker.addEventListener('click', () => {
    let table = document.getElementById('table');
    table.innerHTML = '';
    tableX();
});

// 4
tableWithImages.addEventListener('click', () => {
    let a = document.getElementById('table1');
    a.innerHTML = '';
    createTableWithImages();

});

//5
five.addEventListener('click', () => {
    let area = document.getElementById('area6');
    area.innerHTML = '';
    minMaxSymbols();
});


const minusFun = () => {
    let area = document.getElementById('area');
    let n = parseInt(area.innerText);
    n = n - 1;
    area.innerText = n;
};

const plusFun = () => {
    let area = document.getElementById('area');
    let n = parseInt(area.innerText);
    n = n + 1;
    area.innerText = n;
};

const resetFun = () => {
    let area = document.getElementById('area');
    let n = 0;
    area.innerText = n;
};

const evenNumbers = () =>{
    let area = document.getElementById('area2');
    let area3 = document.getElementById('area3');
    let count = 0;
    for(let i = 1; i <= 100; i++){
        if(i % 2 == 0){
            area.innerText += i;
            area.innerText += ',';
            count += i;
        }
        area3.innerText = count;
    }
};

const tableX = () =>{
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let table = document.getElementById('table');
    let word = '';
    for(let i = 1; i <= 3; i++){
        let tr = document.createElement('tr');
        for(let j = 1; j <= 2; j++){
            for(let k = 1; k <= 10; k++){
                let x = Math.floor(Math.random() * alphabet.length);
                word += alphabet[x];
            }
            let td = document.createElement('td');
            td.innerText = word;
            word = '';
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
};


const createTableWithImages = () => {
    let table = document.getElementById('table1');
    for(let i = 1; i <= 4; i++){
        let tr = document.createElement('tr');
        for(let j = 1; j <= 4; j++){
            let img = document.createElement('img');
            let n = Math.floor(Math.random() * 8) + 1;
            img.setAttribute('src', `./src/${n}.jpg`);
            img.setAttribute('width', '100px');
            let td = document.createElement('td');
            td.appendChild(img);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
};

const minMaxSymbols = () => {
    let area2 = document.getElementById('area7');
    let area = document.getElementById('area6');
    let text = document.getElementById('text').value;
    let text2 = text;
    let eachchararr = text.split(''); 
    let filteredarray = eachchararr.filter( e =>  e !== ' ' );
    let uniquearray = Array.from(new Set(filteredarray));
    let result = minMax(text, uniquearray);
    for(prop in result){
        let para = document.createElement('p');
        para.innerHTML = `სიმბოლო "${prop}" განმეორდა - ${result[prop]}`;
        area.appendChild(para);
    }

    let max = Object.entries(result).sort((x, y) => y[1] - x[1])[0];

    let p = document.createElement('p');
    p.innerHTML = `ყველაზე ხშირად განმეორებადი სიმბოლო '${max[0]}' - განმეორდა ${max[1]}-ჯერ.`;
    area.appendChild(p);

    text2 = text2.split(max[0]).join('');
    area2.innerText = text2;
};

const minMax = (text, arr) => {

    let len = arr.length;

    let obj = {};

    for(let i = 0; i <= len; i++){
        if(text.includes(arr[i])){
            obj[arr[i]] = text.split(`${arr[i]}`).length -1;
        }
    }
    return obj;
}