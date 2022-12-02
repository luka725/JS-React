// <===Clock===>
// main div tag
const box = document.getElementById('box');

// three span tag each for time elements starting from seconds, hours, minutes drom Date()
let minutes = document.createElement('span');
let seconds = document.createElement('span');
let hours = document.createElement('span');

// empty object to store key value 
// object keys: m, s, h <=> values[string]: minutes, second, hours 
let single = {};

// async function
setInterval(() => {
    // every seconds get date again and store it into variables
    const d = new Date();
    single.h = d.getHours();
    single.m = d.getMinutes();
    single.s = d.getSeconds();

    // simple validation for 01 : 10 format using ternary operator shorthand if statement
    single.s < 10 ? single.s = single.s + "0" : false;
    single.h < 10 ? single.h = "0" + single.h : false;
    single.m < 10 ? single.m = "0" + single.m : false;

    // callback function
    append(single, minutes, seconds, hours, box); 
}, 1000);

// this is our callback which will write returned time details
// into an html we created <span> and <div>  
const append = (datedetails, minutes, seconds, hours, destination) => {
    hours.innerText = datedetails.h;
    minutes.innerText = datedetails.m;
    seconds.innerText = datedetails.s;
    destination.appendChild(hours);
    destination.appendChild(minutes);
    destination.appendChild(seconds);
}

// <===ToDay===>

const myDiv = document.getElementById('date');
let elem = document.createElement('span');
setInterval(()=>{
    const newDate = new Date();
    elem.innerText = newDate;
    myDiv.appendChild(elem);
}, 1000);


// <===User prompt date and return difference between dates===>

const button = document.getElementById('action');
const box1 = document.getElementById('box3');

button.addEventListener('click', () => {
    box1.innerHTML = '';
    getDates(box1);
});

const getDates = (elem) => {
    let v = document.getElementById('user-date').value;
    let d = new Date();
    let str = d.toISOString();
    let re = /T(.*?)Z/;
    let newstr = str.split(re);
    let updatedstring = newstr[0];

    v > updatedstring ? elem.innerText = "Your date is greather\n Than todays date." : false;
    v < updatedstring ? doCompare(v, updatedstring, elem) : false;
    v === updatedstring ? elem.innerText = "There is no difference between\n Your date and today." : false;
    v === "" ? elem.innerText = "Please pick date first." : false;

};

const doCompare = (usertime, realtime, element) => {
    let d1 = new Date(usertime);
    let d2 = new Date(realtime);
    let res = Math.abs(d2.getTime() - d1.getTime());
    let output = res/(1000 * 3600 * 24);
    element.innerText = '';
    let secondpara = document.createElement('p');
    secondpara.innerText = `Diference in days is ${output} day`;
    element.appendChild(secondpara);
    let week = output / 7;
    let day = output % 7;
    week = Math.floor(week);
    let br = document.createElement('br');
    let para = document.createElement('p');
    para.innerText = `before that date ${week} Week and ${day} days are passed`
    element.appendChild(br);
    element.appendChild(para);
};