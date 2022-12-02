const act = document.getElementById('action');

act.addEventListener('click', () =>{ iterateNumber() });

const iterateNumber = () =>{
    let val = document.getElementById('fnnames').value;
    let n = document.getElementById('prompt').value;
    let area = document.getElementById('area');
    let inner = document.createElement('p');
    let n2 = n;
    area.innerHTML = '';
    n = parseFloat(n);
    
    switch (val){
        case 'ceil':
            n = Math.ceil(n);
            break;
        case 'floor':
            n = Math.floor(n);
            break;
        case 'round':
            n = Math.round(n);
            break;
    }

    if(isNaN(n)){
        inner.innerHTML = 'Please enter number;';
    }
    else{
        inner.innerHTML = `${n2} with math ${val} = ${n}.`;
    }

    area.appendChild(inner);
}

const act1 = document.getElementById('action1');

act1.addEventListener('click', () => { randomGenerator() });

const randomGenerator = () =>{
    let min = document.getElementById('prompt1').value;
    let max = document.getElementById('prompt2').value;
    let c = document.getElementById('prompt3').value;
    let area = document.getElementById('area1');
    let n;
    area.innerHTML = '';
    min = parseInt(min);
    max = parseInt(max);

    if(!min && !max){
        let inner = document.createElement('p');
        n = Math.random();
        inner.innerHTML = n;
        area.appendChild(inner);
    }
    else if(!c && min && max){
        let inner = document.createElement('p');
        n = Math.floor(Math.random() * (max - min) ) + min;
        inner.innerHTML = n;
        area.appendChild(inner);
    }
    else{
        for(let i = 1; i <= c; i++){
            let inner = document.createElement('p');
            n = Math.floor(Math.random() * (max - min) ) + min;
            inner.innerHTML = n;
            area.appendChild(inner);
        }
    }

}

const act2 = document.getElementById('action2');

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

act2.addEventListener('click', () => { randomWeekDay(dayNames) });

const randomWeekDay = (arr) =>{
    let area = document.getElementById('area3');
    let inner = document.createElement('p');
    let n = Math.floor(Math.random() * 7);
    area.innerHTML = '';
    inner.innerHTML = arr[n];
    area.appendChild(inner);

}

const act3 = document.getElementById('action3');

act3.addEventListener('click', ()=>{ randomImage(dayNames) })

const randomImage = (arr) =>{
    let area = document.getElementById('area4');
    let img = document.createElement('img');
    let n = Math.floor(Math.random() * 20) + 1;
    let n2 = Math.floor(Math.random() * 7);
    let n3 = Math.floor(Math.random() * 31 ) + 1; 
    let week = document.createElement('p');
    let month = document.createElement('p');


    area.innerHTML = '';
    week.innerHTML = arr[n2];
    month.innerHTML = `${n3}/`;
    img.setAttribute('src', `./images/${n}.jpg`);
    img.setAttribute('width', '1800px');
    area.appendChild(month);
    area.appendChild(week);
    area.appendChild(img);
}

const act4 = document.getElementById('action4');

act4.addEventListener('click', () => { randomImage4() })

const randomImage4 = () =>{
    let area = document.getElementById('area4');
    area.innerHTML = '';

    for(let i = 1; i <= 4; i++){
        let img = document.createElement('img');
        let n = Math.floor(Math.random() * 20) + 1;
        img.setAttribute('src', `./images/${n}.jpg`);
        img.setAttribute('width', '500px');
        area.appendChild(img);
    }
}

const act5 = document.getElementById('action5');

act5.addEventListener('click', ()=>{ tableXimage() });

const tableXimage = () =>{

    let row = document.getElementById('prompt4').value;
    let column = document.getElementById('prompt5').value;
    let count = document.getElementById('prompt6').value;
    let area = document.getElementById('area5');
    area.innerHTML = '';

    row = parseInt(row), 
    column = parseInt(column),
    count = parseInt(count);
    if( (row * column)  < count ){
        alert("Please rearrange number of images, because count of images are more than count of cells");
        return;
    }
    else{
        let images = 1;
        for(let i = 1; i <= row; i++){
            let r = document.createElement('ul');
            r.classList.add('row');
            for(let k = 1; k <= column; k++){
                let c = document.createElement('li');
                c.classList.add('col');
                c.style.backgroundImage = `url('./images/${images}.jpg')`;
                r.appendChild(c);
                if(images > count){
                    c.style.backgroundImage = '';
                }
                images++;
            }
            area.appendChild(r);
        }
    }
}
