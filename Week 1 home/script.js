// #1 task
document.getElementById('btnone').onclick = () =>{
    para = document.getElementById('one');
    txt = document.getElementById('txt').value;
    if (!txt){
        txt = 'PLease Enter The text !';
    }
    para.innerHTML = txt;
    para.style.cssText = 'text-decoration: underline; font-weight: 900; font-style: italic;';
}
// #2 task
document.getElementById('btntwo').onclick = () =>{
    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value
    document.getElementById('num1').innerHTML = n1;
    document.getElementById('num2').innerHTML = n2;
    document.getElementById('num3').innerHTML = parseInt(n1) + parseInt(n2);
}
// #3 task
document.getElementById('btnthree').onclick = () =>{
    let txt1 = document.getElementById('txt1').value
    let size = document.getElementById('n3').value

    document.getElementById('three').style.cssText = `font-size: ${parseInt(size)}px;`;
    document.getElementById('three').innerText = txt1;
}
// #4 task
const table = document.getElementById('btnfour');

const wh = () =>{
    let wsize = document.getElementById('prompt').value;
    let hsize = document.getElementById('prompt2').value;
    let color = document.getElementById('prompt3').value;
    let bwidth = document.getElementById('prompt4').value;
    let col = document.getElementsByClassName('col');
    let len = col.length;
    for (let i = 0; i < len; i++){
        col[i].style.width = `${200 + parseInt(wsize)}px`;
        col[i].style.height = `${100 + parseInt(hsize)}px`;
        col[i].style.backgroundColor = color;
        col[i].style.borderWidth = `${parseInt(bwidth)}px`;
    }
}


const x2table = () =>{
    let prompts = document.getElementById('prompts');
    let wrapper = document.getElementById('four');
    for (let i = 0; i < 2; i++ ){
        let row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < 2; j++){
                let column = document.createElement('div');
                column.classList.add('col');
                column.style.cssText = 'width: 200px; height: 100px';
                row.appendChild(column); 
        }
        wrapper.appendChild(row);
    }
    let prmpt = document.createElement('input');
    prmpt.setAttribute('type', 'number');
    prmpt.setAttribute('id', 'prompt');
    prmpt.setAttribute('placeholder', 'Add Width here:');
    let prmpt2 = document.createElement('input');
    prmpt2.setAttribute('type', 'number');
    prmpt2.setAttribute('id', 'prompt2');
    prmpt2.setAttribute('placeholder', 'Add Height here:');
    let prmpt3 = document.createElement('input');
    prmpt3.setAttribute('type', 'color');
    prmpt3.setAttribute('id', 'prompt3');
    prmpt3.setAttribute('value', '#ffffff');
    let prmpt4 = document.createElement('input');
    prmpt4.setAttribute('type', 'number');
    prmpt4.setAttribute('id', 'prompt4');
    prmpt4.setAttribute('placeholder', 'Border width here:');

    prompts.appendChild(prmpt);
    prompts.appendChild(prmpt2);
    prompts.appendChild(prmpt4);
    prompts.appendChild(prmpt3);
  
    table.removeEventListener('click', x2table, true);
    table.addEventListener('click', wh, true);
}
table.addEventListener('click', x2table, true);

// #taks 5
const natural = document.getElementById('btnfive');

const natn = () =>{
    let field = document.getElementById('five')
    for (let i = 1; i <= 10; i++){
        
            let n = document.createElement('span')
            n.innerText = i;
            n.style.margin = '0 10px 10px 0px';
            field.appendChild(n);
    }
    natural.removeEventListener('click', natn, true);
}
natural.addEventListener('click', natn, true);

// #task 6
const field2 = document.getElementById('btnsix');

const meeqvse = () => {
    let m = document.getElementById('prompt5').value;
    let n = document.getElementById('prompt6').value;
    let parag = document.getElementById('six');
    n = parseInt(n);
    m = parseInt(m);

    if(!m){
        m = 1;
    }
    if(m > n){
        alert('m is more than n *_*')
    }
    parag.innerHTML = '';
    for (let i = m; i <= n; i++){ 
            let num = document.createElement('span');
            num.innerText = i;
            num.style.margin = '0 10px 10px 0px';
            parag.appendChild(num);
    }
    //field2.removeEventListener('click', meeqvse, true);
}
field2.addEventListener('click', meeqvse, true);

// #task 7
const container = document.getElementById('seven');
const btnseven = document.getElementById('btnseven');

const colmn = () =>{
    let columncount = document.getElementById('prompt8').value;
    let rows = document.querySelectorAll('.srow');
    for(let row of rows){
        let rn = row.getAttribute('data-rownumber');
        for (let i = 1; i <= columncount; i++){
            let clmn = document.createElement('li');
            clmn.innerHTML = `${rn}.${i}`;
            clmn.classList.add('scolumn');
            clmn.style.cssText = 'width: 100px; height: 100px'
            row.appendChild(clmn);
        }
    console.log(row);
    }
}

const singlrow = () =>{
    let rowcount = document.getElementById('prompt7').value;
    container.innerHTML = '';
    for (let i = 1; i <= rowcount; i++){
        let singlerow = document.createElement('ul')
        singlerow.classList.add('srow');
        singlerow.setAttribute('data-rownumber', i);
        container.appendChild(singlerow);
    };
    colmn();
    prompts();
}
const boxPropertyes = () =>{
    let wsize1 = document.getElementById('prompt9').value;
    let hsize1 = document.getElementById('prompt10').value;
    let color1 = document.getElementById('prompt12').value;
    let bwidth1 = document.getElementById('prompt11').value;
    let col = document.getElementsByClassName('scolumn');
    let len = col.length;
    for (let i = 0; i < len; i++){
        col[i].style.width = `${100 + parseInt(wsize1)}px`;
        col[i].style.height = `${100 + parseInt(hsize1)}px`;
        col[i].style.backgroundColor = color1;
        col[i].style.borderWidth = `${parseInt(bwidth1)}px`;
    }
}

const prompts = () =>{
    let prompts7 = document.getElementById('prompts7');
    prompts7.innerHTML = '<div id="prompts"><input type="number" id="prompt9" placeholder="Add Width here:"><input type="number" id="prompt10" placeholder="Add Height here:"><input type="number" id="prompt11" placeholder="Border width here:"><input type="color" id="prompt12" value="#ffffff"><br><button id="btneight">Click for change Propertyes</button>';
    let btneight = document.getElementById('btneight');
    btneight.addEventListener('click', boxPropertyes, true);
}

btnseven.addEventListener('click', singlrow, true);


