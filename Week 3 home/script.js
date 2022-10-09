// Task #3 starting from here

// initializing needed nodes and elements of document
const btn = document.getElementById('action');
const selection = document.getElementById('selection');
const area = document.getElementById('area');

// adding event listener on action button which will expire on click event
// adding event listener on option where user can select different functions to expire on change event
selection.addEventListener('change', () => {
    selectChangeHandler();
});

btn.addEventListener('click', () => {
    one(selection, area);
});

// Main function of task which defines to which function should start deppending on the selected values
const one = (select, area) =>{
    let val = document.getElementById('prompt').value;
    let selection = select.value;
    let node = document.createElement('p');

    // this will clear target element all time when function reexpired
    area.innerHTML = '';

    // main switch which expiring functions
    switch (selection) {
        case 'Length':
            lengthString(val, area, node);
            break;
        case 'Count Character':
            countLetterInText(val, area, node);
            break;
        case 'Substrings':
            countSubstring(val, area, node);
            break;
        case 'Inner codes':
            innerCodes();
            break;
        default:
            alert("Please pick a correct function;");
    }
};

const lengthString = (text, area, node) => {
    let len = text.length;
    node.innerHTML = `სტრიქონის სიგრძე: ${len} ელემენტი;`;
    area.appendChild(node);
    return;
};

const countLetterInText = (text, area, node) => {
    let char = document.getElementById('letter').value;
    let charcount = text.split(`${char}`).length - 1;
    node.innerHTML = `ტექსტი შეიცავს ${charcount} - ${char} ელემენტს;`;
    area.appendChild(node);
};

// Main function of task which looking select option changes and adding additional fields ore removing them
const selectChangeHandler = () => {
    let letterInput = document.createElement('input');
    let node = document.getElementById('one');
    letterInput.setAttribute('type', 'text');
    letterInput.setAttribute('id', 'letter');
    letterInput.setAttribute('maxlength', '1');
    letterInput.setAttribute('width', '10px');
    letterInput.setAttribute('placeholder', 'char');
    letterInput.setAttribute('size', '5');
    if (selection.value === 'Count Character'){
        node.insertBefore(letterInput, btn);
    }
    else if (selection.value !== 'Count Character'){
        let letterInputRemove = document.getElementById('letter');
        if(!letterInputRemove){
            //do nothing
        }
        else{
            node.removeChild(letterInputRemove);
        }
    }
};

const countSubstring = (text, area, node) =>{
    let wordcount = text.split(' ').length;
    node.innerHTML = `ტექსტი შედგება ${wordcount} - სიტყვისგან;`;
    area.appendChild(node);
};

const innerCodes = () =>{
    alert('what? => დაწერეთ ფუნქცია, რომელიც გამოიტანს სტრიქონის შიდა კოდებს.')
}

// Task #2 starting from here

// initializing needed nodes and elements of document
const btn1 = document.getElementById('action1');
const selection1 = document.getElementById('selection1');
const area1 = document.getElementById('area1');
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


// adding event listener on action button which will expire on click event
// adding event listener on option where user can select different functions to expire on change event
selection1.addEventListener('change', ()=>{
    changeHandler(selection1);
});

btn1.addEventListener('click', () => {
    two(selection1, area1, alphabet);
});

// Main function of task which defines to which function should start deppending on the selected values
const two = (selection1, area1, alphabet) => {
    let select1 = selection1.value;

    // this will clear target element all time when function reexpired
    area1.innerHTML = '';

    // main switch which expiring functions
    switch(select1){
        case 'random-text':
            randomTextGenerator(area1, alphabet);
            break;
        case 'min-max':
            randomTextMinMax(area1, alphabet);
            break;
        default:
            alert("Please pick a correct function;");
    }
}

// Main function of task which looking select option changes and adding additional fields ore removing them
const changeHandler = (val) => {
    let node = document.getElementById('two');
    let n = document.getElementById('prompt1');
    let fn = val.value;
    if(fn === 'min-max'){
        let m = document.createElement('input');
        m.setAttribute('type', 'number');
        m.setAttribute('placeholder', 'm min (default is 0)');
        m.setAttribute('id', 'prompt2');
        let k = document.createElement('input');
        k.setAttribute('type', 'number');
        k.setAttribute('placeholder', 'k max word used to be');
        k.setAttribute('id', 'prompt3');
        node.insertBefore(m, n);
        node.insertBefore(k, val);
    }
    else if (fn !== 'min-max'){
        let mPromptRemove = document.getElementById('prompt2');
        let kPromptRemove = document.getElementById('prompt3');
        if(!mPromptRemove && !kPromptRemove){
            //do nothing
        }else{
            node.removeChild(mPromptRemove);
            node.removeChild(kPromptRemove);
        }
    }
}

const randomTextGenerator = (targ, alphabet) => {
    let val = document.getElementById('prompt1');
    let ntimes = val.value;
    let para = document.createElement('p');
    let word = '';
    ntimes = parseInt(ntimes);
    if(ntimes <= 0 || ntimes > 100){
        alert('try again but pass number which is > than 0 and < than 100');
    }else{
        for(let i = 1; i <= ntimes; i++){
            let j = Math.floor(Math.random() * 25);
            word += alphabet[j];
        }
        para.innerHTML = word;
        targ.appendChild(para);
    }
}

const randomTextMinMax = (targ, alphabet) =>{
    let n = document.getElementById('prompt1').value;
    let m = document.getElementById('prompt2').value;
    let k = document.getElementById('prompt3').value;
    let p = document.createElement('p');
    let word = '';
    let words = '';
    if(!m){ m = 0; };
    if(!n || !k){ alert('please pass values')}
    n = parseInt(n);
    m = parseInt(m);
    k = parseInt(k);
    if(n < 0 || n > 30){
        alert('n should be > than 0 and < than 30');
    }
    else if(k < 0 || k > 30){
        alert('k should be > than 0 and < then 30');
    }
    else{
        for(let i = 1; i <= k; i ++){
            let r = Math.floor(Math.random() * (n - m)) + m;
            for(let j = 1; j <= r; j++){
                let t = Math.floor(Math.random() * 25);
                word += alphabet[t];
            }
            word += ' ';
            words += word;
            word = '';
        }
        p.innerHTML = words;
        targ.appendChild(p);
    }
};

// Task #3 starting from here

// initializing needed nodes and elements of document
const main = document.getElementById('three');
const btn3 = document.getElementById('action2');
const area3 = document.getElementById('area2');
const selection3 = document.getElementById('selection2');


// adding event listener on action button which will expire on click event
// adding event listener on option where user can select different functions to expire on change event
btn3.addEventListener('click', () => {
    let selected = document.getElementById('selection2').value;
    three(selected, area3);
});

selection3.addEventListener('change', () => {
    changeHandlerFilter(selection3, main, btn3);
});


// Main function of task which looking select option changes and adding additional fields ore removing them
const changeHandlerFilter = (selected, node, element) => {
    let option = selected.value;
    let returninput = document.createElement('input');
    returninput.setAttribute('type', 'text');
    returninput.setAttribute('id', 'keywords');
    returninput.setAttribute('placeholder', 'separate multiple words by space');
    returninput.setAttribute('size', '25');

    if(option === 'simbols-min-max'){

        let toremove1 = document.getElementById('keywords');
        if(!toremove1){
            //do nothing
        }
        else{
            node.removeChild(toremove1);
        }
    }
    else if(option !== 'simbols-min-max'){

        let toremove2 = document.getElementById('keywords');
        if(toremove2){
            //do nothing
        }
        else{
            node.insertBefore(returninput, element);
        }
    }
};

// Main function of task which defines to which function should start deppending on the selected values
const three = (selected, area) =>{

    // this will clear target element all time when function reexpired
    area.innerHTML = '';

    // main switch which expiring functions
    switch(selected){
        case "search":
            search(area);
            break;
        case "filter":
            filterString(area);
            break;
        case "simbol":
            symbolRemoval(area);
            break;
        case "simbols-min-max":
            minMaxSymbols(area);
            break;
        default:
            alert('please pick correct function');
    }
};

const search = (area) => {
    let text = document.getElementById('text').value;
    let keywords = document.getElementById('keywords').value;
    let parsedtext = text.replace(/_.,*^%@!#$/g, ' ');
    let textarr = parsedtext.split(' ');
    let wordsarr = keywords.split(' ');
    
    let result = {};
    wordsarr.forEach(element => {
        result[element] = textarr.filter(e => e == element).length;
    });
    
    for(let prop in result){
        let p = document.createElement('p');
        p.innerHTML = `სიტყვა ${prop} - განმეორდა: ${result[prop]}`;
        area.appendChild(p);
    }
};

const filterString = (area) => {
    let text = document.getElementById('text').value;
    let keywords = document.getElementById('keywords').value;
    let wordsarr = keywords.split(' ');
    let p = document.createElement('p');
    let filteredtext = filterText(wordsarr, text);
    p.innerHTML = filteredtext;
    area.appendChild(p);
};

const filterText = (arr, text) =>{
    let star = '*';
    let len = arr.length;
    for(let i = 0; i <= len; i++){
        if(text.includes(arr[i])){
            text = text.split(arr[i]).join(`${star.repeat(arr[i].length)}`);
        }
    }
    return text;
}

const symbolRemoval = (area) => {
    let text = document.getElementById('text').value;
    let symbols = document.getElementById('keywords').value;
    let symbolsarr = symbols.split(' ');
    let p = document.createElement('p');

    let result = removeSymbols(text, symbolsarr);
    let myobj = result.obj;

    for(prop in myobj){
        let para = document.createElement('p');
        para.innerHTML = `სიმბოლო "${prop}" განმეორდა - ${myobj[prop]}`;
        area.appendChild(para);
    }

    p.innerHTML = result.text;
    area.appendChild(p); 

};

const removeSymbols = (text, arr) => {
    let len = arr.length;
    let textcopy = text;
    let obj = {};
    for(let i = 0; i <= len; i++){
        if(text.includes(arr[i])){
            text = text.split(arr[i]).join('');
            obj[arr[i]] = textcopy.split(`${arr[i]}`).length - 1;  
        }
    }
    return {text, obj};
};

const minMaxSymbols = (area) => {
    // getting text from user input
    let text = document.getElementById('text').value;

    // making array to all character used in text
    let eachchararr = text.split(''); 

    // removing whitespaces from array;
    let filteredarray = eachchararr.filter( e =>  e !== ' ' )

    // removing dublicates from array using Set
    let uniquearray = Array.from(new Set(filteredarray));

    // calling function which will count each element of array in string and stores the result
    let result = minMax(text, uniquearray);

    // using for in loop for object to print all element in front
    for(prop in result){
        let para = document.createElement('p');
        para.innerHTML = `სიმბოლო "${prop}" განმეორდა - ${result[prop]}`;
        area.appendChild(para);
    }

    // getting max key value pair from returned object by Object.entries javascript native refference of object and sorting
    // by simple mathematical solution
    let max = Object.entries(result).sort((x, y) => y[1] - x[1])[0];

    let p = document.createElement('p');
    p.innerHTML = `ყველაზე ხშირად განმეორებადი სიმბოლო '${max[0]}' - განმეორდა ${max[1]}-ჯერ.`;
    area.appendChild(p);
};

// helper function to count each charachter count in text
const minMax = (text, arr) => {

    // array elements count
    let len = arr.length;

    // creating object to store key value pair of character and its count in the text
    let obj = {};

    // starting for loop for all array element and storing in object
    for(let i = 0; i <= len; i++){
        // if text have one of the element provided by array positions
        if(text.includes(arr[i])){
            // creating key which is character and its value which is number of matches in string
            obj[arr[i]] = text.split(`${arr[i]}`).length -1;
        }
    }
    // returning object
    return obj;
}