//pirveli
const area = document.getElementById("output1");
const taskplace = document.getElementById("taskone");
let result = 0;
let p = document.createElement('p');
for(let i = 1; i <= 200; i++){
    if(i % 2 === 0 && i % 4 === 0){
        let p = document.createElement('p');
        result = result -= i;
        p.innerText =  i;
        area.appendChild(p);
    }
}
p.style = "padding-left: 50px; font-weight: bold;";
p.innerText = `ყველა რიცხვის გამოკლების შედეგად მიღებულია ციფრი ${result}`;
taskplace.appendChild(p);

//meore
const area2 = document.getElementById('output2');
const array = [2, 22, 3, 4, 5, 6, 7, 8, 9, 10];

const isXInArray = (array, x) => {
    let p = document.createElement('p');
    let is = array.includes(x)
    
    if(is){
        p.innerText =`ელემენტი ${x} ნაპოვნია პოზიცია ${array.indexOf(x, 0)}-ზე`;
    }
    else{
        p.innerText = 'ელემენტი არ მოიძებნა';
    }
    area2.appendChild(p);
}

isXInArray(array, 5);

//mesame
const area3 = document.getElementById('output3');
let array2 = ["h", "e", "l", "l", "o"];
let p2 = document.createElement('p');
let p3 = document.createElement('p');
p2.innerText = array2;
p3.innerText = array2.reverse();
area3.appendChild(p2);
area3.appendChild(p3);

//meotxe
const output4 = document.getElementById('output4');
const f = 10;

let fibonacci = (x) => {
    if(x <= 1){
        return x;
    }
    else{
        return fibonacci(x-1) + fibonacci(x-2);
    }
}
for(let i = 0; i <= f; i++){
    let p = document.createElement('p');
    p.innerText = `ფიბონაჩი ${i}-თვის არის ${fibonacci(i)}`;
    output4.appendChild(p);
}

//mexute
const area4 = document.getElementById('output5');
let vowelsarray = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
const string = "Georgia";

const countLetters = (array, string) =>{
    let consonantscount = 0;
    let vowelscount = 0;
    let lettersarray = Array.from(string)
    lettersarray.forEach(element => {
        if (array.includes(element)){
            vowelscount += 1;
        }else{
            consonantscount+= 1;
        } 
    });
    let p = document.createElement('p');
    p.innerText = `სიტყვაში გამოყენებულია ${vowelscount} ხმოვანი და ${consonantscount} თანხმოვანი;`;
    area4.appendChild(p);
}
countLetters(vowelsarray, string);

//meeqvse
const area6 = document.getElementById('output6');

const addition = (a, b) =>{
    let p = document.createElement('p');
    p.innerText = Number(a+b).toString(2);
    area6.appendChild(p);
}
addition(3,2);

//meshvide
const area7 = document.getElementById('output7');

const repeatstring = (string, ntimes) => {
    p = document.createElement('p');
    p.innerText = `${string.repeat(ntimes)}`;
    area7.appendChild(p);
}

repeatstring('Hello World! ', 10);