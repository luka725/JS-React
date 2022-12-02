// დავალება 1
const btn = document.getElementById("action");

btn.addEventListener('click', () => {
    validateForm();
});

const validateForm = () => {
    let password = document.getElementById('password').value;
    let repeatPassword = document.getElementById('repeatPassword').value;
    let area = document.getElementById('output');
    area.innerHTML = '';
    if(!password || !repeatPassword){
        alert("please fill both password and repeat password fields");
    }
    else{
        if(password === repeatPassword){
            console.log(`Password: ${password}\nRepeated password: ${repeatPassword}`);
        }
        else{
            let p = document.createElement('p');
            p.innerText = 'პაროლები ერთმანეთს არ უდრის';
            area.appendChild(p);
        }
    }
}

// დავალება 2
const output2 = document.getElementById("output2");

for(let i = 1; i <= 100; i++){
    let p = document.createElement('p');
    i % 3 === 0 ? p.innerText = 'უნაშთოდ იყოფა 3-ზე' : false;
    i % 5 === 0 ? p.innerText = 'უნაშთოდ იყოფა 5-ზე' : false;
    i % 5 !== 0 && i % 3 !== 0 ? p.innerText = i : false;
    output2.appendChild(p);
}

// დავალება 3
const btn2 = document.getElementById('action2');

btn2.addEventListener('click', () => {
    let maindiv = document.getElementById('prompts');
    maindiv.innerHTML = '';
    
    let count = document.getElementById('count').value;
    count = parseInt(count);
    for(let i = 1; i <= count; i++){
        prompt(i, maindiv);
    }
    let action = document.createElement('button');
    action.setAttribute('id', 'action3');
    action.innerText = 'calculate';
    maindiv.appendChild(action);
    action.addEventListener('click', () => {
        calculate()
    });
});

const prompt = (i, div) => {
    let input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('placeholder', `number ${i}`);
    input.setAttribute('id', `number-${i}`)
    input.setAttribute('class', 'eachnum');
    div.appendChild(input);
}

const calculate = () => {
    let outputdiv = document.getElementById('output3');
    outputdiv.innerHTML = '';
    let inputs = document.querySelectorAll('.eachnum');
    let p = document.createElement('p');
    let area = document.getElementById('output3');
    let arry = [];
    let count = 1;
    inputs.forEach(element => {
        arry.push(parseInt(element.value));
    });
    arry.forEach(element => {
        count *= element;
    });
    p.innerText = ` თქვენს მიერ შეტანილი რიცხვების ნამრავლი ტოლია: ${count}`;
    area.appendChild(p);
};

// დავალება 4
const output4 = document.getElementById('output4');
let array = [0, 1, 2, 3, 4, 5, 7, 8];
let len = array.length;
let missed = 0;
for(let i = 0; i <= len; i++){
    if(array.indexOf(i) == -1){
        let p = document.createElement('p');
        p.innerText = i;
        output4.appendChild(p)
    }
}

// დავალება 5
const area4 = document.getElementById('output5');
let vowelsarray = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
const string = "Georgia";

const countLetters = (array, string, dest) =>{
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
    p.innerText = `სიტყვაში "${string}" გამოყენებულია ${vowelscount} ხმოვანი და ${consonantscount} თანხმოვანი;`;
    dest.appendChild(p);
}
countLetters(vowelsarray, string, area4);
