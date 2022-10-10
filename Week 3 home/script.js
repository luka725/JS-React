// Task #1 starting from here

// this is button element from front etc. when user submit => Action
const btn = document.getElementById('action');
// this is select element when the user chise an option. Options :{Search string, Filter string, Remove character, Count min and max}:;
const selection = document.getElementById('selection');
// div element from front, because I will use this div next to write html inside by Javascript
const area = document.getElementById('area');

// adding event listener on Action button which will expire #On Click event
btn.addEventListener('click', () => {
    //callback function
    one(selection, area);
});


// whenever user changes Options from fromt by Selection
selection.addEventListener('change', () => {
    // callback function
    selectChangeHandler(selection);
});


// Main function of task which defines to which function should start deppending on the selected values
// passing two parameters (select) and (area)
const one = (select, area) =>{
    // this is value of selector where user iputs from front
    // <input id="prompt" type="text" placeholder="text">
    let val = document.getElementById('prompt').value;
    // select is the object of element wich we get from document.getelementById('selection');
    // <select id="selection2" name="act">
    let selection = select.value;
    // and node is new object element of <p> tag this is ussualy for write something inside
    let node = document.createElement('p');

    // this will clear div element all time when function expire document.getElementById('area');
    // <div id="area1"></div>
    area.innerHTML = '';

    // main switch which starting function deppending on what option user will chose from front
    switch (selection) {
        //each of case is Options :{search, filter, simbol, simbols-min-max}
        //this options are same of the user inputs
        case 'Length':

        // passing variables  and starting function immediately
            lengthString(val, area, node);

            // this will break all the other functions
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

        // if none of them
        // alert
        default:
            alert("Please pick a correct function;");
    }
};

// Main function of task which looking select option changes and adding additional fields ore removing them
const selectChangeHandler = (selection) => {
    // this is input Object element from from front
    let letterInput = document.createElement('input');
    // this is selector to write inside HTML genetared from JS
    let node = document.getElementById('one');
    // function Object.setAttribute("here you write attribute", "here goes value") it looks like <input type="text" />
    letterInput.setAttribute('type', 'text');
    // <input id="letter">
    letterInput.setAttribute('id', 'letter');
    // <input maxlength="1">
    letterInput.setAttribute('maxlength', '1');
    letterInput.setAttribute('width', '10px');
    letterInput.setAttribute('placeholder', 'char');
    letterInput.setAttribute('size', '5');

    // if this if gets value true the function will remove input tag from frontend
    if (selection.value === 'Count Character'){
        node.insertBefore(letterInput, btn);
    }
    // this is combinations if not is this option chosen from user
    else if (selection.value !== 'Count Character'){
        // remove this field because we dont need it anymore
        let letterInputRemove = document.getElementById('letter');
        // if this selector cant found do nothing
        if(!letterInputRemove){
            //do nothing
        }
        // else remove this element by using Object.removeChild function
        else{
            node.removeChild(letterInputRemove);
        }
    }
};

// this function is returning length string value of element
// passing arguments three object text,area,node
const lengthString = (text, area, node) => {
    // using Object.length function to return length of text element and store it in len variable
    let len = text.length;
    // node is  <p> we created earlyer
    node.innerHTML = `სტრიქონის სიგრძეა: ${len} ელემენტი;`;
    // <div id="area2">
    area.appendChild(node);
};

// this function will count all letter in passed string and it will create its own Object elements
const countLetterInText = (text, area, node) => {
  //<input type="text" id="letter" maxlength="1" width="10px" placeholder="char" size="5">   
    let char = document.getElementById('letter').value;
  // here is a regular function which count characters in 
  // text is -  <input id="prompt" type="text" placeholder="text">
    let charcount = text.split(`${char}`).length - 1;

    node.innerHTML = `სტრიქონი შეიცავს ${charcount} - "${char}" ელემენტს;`;
    area.appendChild(node);
};

// this will count words in passed string
const countSubstring = (text, area, node) =>{
    // this element is length of words separated by space and returns its count
    let wordcount = text.split(' ').length;
    // this will writes result in html tag
    // <div id="one"> main div tag
    node.innerHTML = `ტექსტი შედგება ${wordcount} - სიტყვისგან;`;
    // <div id="area2">
    area.appendChild(node);
};

// I didn't findout inner codes 
const innerCodes = () =>{
    alert('wt? => დაწერეთ ფუნქცია, რომელიც გამოიტანს სტრიქონის შიდა კოდებს.');
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
    //vslue 
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
    // max value from input
    let val = document.getElementById('prompt1');
    let ntimes = val.value;
    let para = document.createElement('p');
    let word = '';
    let len = alphabet.length;
    ntimes = parseInt(ntimes);
    if(ntimes <= 0 || ntimes > 100){
        alert('try again but pass number which is > than 0 and < than 100');
    }else{
        for(let i = 1; i <= ntimes; i++){
            let j = Math.floor(Math.random() * len);
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
    let len = alphabet.length;
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
                let t = Math.floor(Math.random() * len);
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

//  <div id="three"> this tag is coming from HTML and using for write html generated from JavaScript
const main = document.getElementById('three');

// <button id="action2">Action</button> this is object element which triggers function
const btn3 = document.getElementById('action2');

// <div id="area2"></div> this object is in our use to write HTML inside By JS 
const area3 = document.getElementById('area2');

// <select id="selection2" name="act"> with bunch of options they're:
//   One of this option tag will be called from user and its probably gonna be our main breakpoint,
//   because one option is one function written bottom of this file
//      <option value="search">Search string</option> 
//      <option value="filter">Filter string</option>
//      <option value="simbol">Remove character</option>
//      <option value="simbols-min-max">Count min and max</option>
const selection3 = document.getElementById('selection2');


// adding event listener on action button which will expire on click event
btn3.addEventListener('click', () => {
    // <select id="selection2" name="act"> we need to pass this object element again this means ucer chose one of them and click button called Action
    let selected = document.getElementById('selection2').value;

    // main callback function which will controll which of the function starts 
    // deppending on one of the options
    // we are passing
    // value of option <select>
    // and
    // <div id="area2"></div>
    three(selected, area3);
});

// adding event listener on option where user can select different functions to expire on change event
selection3.addEventListener('change', () => {
    // when user will change option from <select> this function will expire 
    // by the using Eventlistener 'change'
    // we are passing
    // <select id="selection2" name="act"> at position one function scope selection3 
    // and
    // <div id="three"> our main html tag at position two function scope main
    // and
    // <button id="action2">Action</button> at position three function scope btn3
    changeHandlerFilter(selection3, main, btn3);
});


// Main function of task which looking select option changes and adding additional fields ore removing them
// passed values are:
// selecter, node, element
// they're
// <select id="selection2" name="act"> one of option from here
// <div id="three"> object.element
// <button id="action2"></button>
const changeHandlerFilter = (selected, node, element) => {
    // from <select> one of option chosec by user
    let option = selected.value;
    // creating object element <input> tag and adding attributes by object.setAttribute where first parameter is attribute name
    // etc. type="text" == object.setAttribute('type', 'text');
    let returninput = document.createElement('input');
    returninput.setAttribute('type', 'text');
    returninput.setAttribute('id', 'keywords');
    returninput.setAttribute('placeholder', 'separate multiple words by space');
    returninput.setAttribute('size', '25');

    // if option is true
    // this means
    // if user chose task to complete 
    // დაწერეთ ფუნქცია, რომელიც განსაზღვრავს სიტყვებში სიმბოლოების მინუმალური და 
    // მაქსიმალური სიმბოლოების რაოდენობას და ასევე ამოიღებს ყველაზე ხშირად განმეორებად სიმბოლოებს.
    if(option === 'simbols-min-max'){
        // findout if element 
        // <input type="text" id="keywords" placeholder="separate multiple words by space" size="25">
        // exists
        let toremove1 = document.getElementById('keywords');
        // if element not exist
        if(!toremove1){
            //do nothing
        }
        // if element input field whe don't need exists remove it 
        // by using object.removeChild() function
        // where object is node or by the other hand <div id="three"></div>
        // and
        // toremove1 is input by id 'keywords' on  the other hand document.getElementById('keywords');
        else{
            node.removeChild(toremove1);
        }
    }
    // id select option is not simbols-min-max
    else if(option !== 'simbols-min-max'){
        // go to see if exist
        let toremove2 = document.getElementById('keywords');
        // if its already created one of the other way
        if(toremove2){
            //do nothing
        }
        // else using function object.insertBefore() if function and has parameters
        // this will appear input tag right next to the button element in the mian element
        else{
            node.insertBefore(returninput, element);
        }
    }
};

// Main function of task which defines to which function should start deppending on the selected values
// this function passes two arguments
// selected is object element one of option from user
// area is div element to store html inside
const three = (selected, area) =>{

    // this will clear target element all time when function recalled
    // recall happens all times when button clicked helping function 
    // document.addEventlistener('click', () => {
    // this is arrow function when called by event 
    // Change it means
    // when in select tag <option> will changed by different value
    // callback fun is three() this function
    //})
    area.innerHTML = '';

    // main switch which expiring functions
    // deppending on case
    // where selected value is comeing from <select> tag
    switch(selected){
        // if case is 
        //<select>
        //  <option value="search">
        //</select>
        case "search":
            // call function search() and pass <div>
            search(area);
            // stop other
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
        // if none of above expires
        // do alert();
        default:
            alert('please pick correct function');
    }
};


// search exact word in big string
const search = (area) => {
    // getting value from user it is big string
    let text = document.getElementById('text').value;
    // geting value from user which whant to findout
    // is string contains this word or words or not
    let keywords = document.getElementById('keywords').value;
    // making array from big string for each symbol separated by space comma or dot
    // and using passing regex starting with / and ending /
    // in square brackets we are passing [which symbols should be removed from text]
    let textarr = text.split(/[., ]+/);

    // and this is how array of keywords separated by comma will be created from user input
    let wordsarr = keywords.split(' ');
    
    // result is now equals to empty object
    // we will use result object to store key value pair inside
    // where key will be each word user will write on our input
    // and value will be count of this word how manny times appear in string prompted by user
    let result = {};

    // array.forEach is easy loop for all of the element which array contains
    // element is array[all element in loop] it will be multiple element for each loop
    wordsarr.forEach(element => {
        // result object is assigning
        // key will be word passed by array
        // and
        // value will be number returned from the array.filter where e is word from user input array
        // and the element is one from user prompted text array 
        result[element] = textarr.filter(e => e === element).length;
    });
    
    // usual for loop for object result
    // here prop is result[1...end of object]
    // object key
    for(let prop in result){
        let p = document.createElement('p');
        // result[prop] === key => value
        // value will be returned only
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

    // removing whitespaces from array
    let filteredarray = eachchararr.filter( e =>  e !== ' ' )

    // removing dublicates from array using Set array.from
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