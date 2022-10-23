
// saati :D

// <body> tag here
const body = document.body;

// main div tag
const box = document.createElement('div');

// <div class="box"> assignment here
box.setAttribute('class', 'box');

// writing div tag inside body tag
body.appendChild(box)

// three span tag each for time elements starting from seconds, hours, minutes drom Date()
let minute = document.createElement('span');
let second = document.createElement('span');
let hour = document.createElement('span');

// empty object to store key value
let single = {};

// async function
setInterval(() => {
    // every seconds get date again and store it into variables
    const d = new Date();
    single.h = d.getHours();
    single.m = d.getMinutes();
    single.s = d.getSeconds();

    // simple validation for 01 : 10 format
    if (single.s < 10){
        single.s = single.s + "0";
    }
    if (single.h < 10){
        single.h = "0" + single.h;
    }
    if (single.m < 10){
        single.m = "0" + single.m;
    }

    // callback function
    append(single, minute, second, hour, box); 
}, 1000)

// this is our callback which will write returned time details
// into an html we created <span> and <div>  
const append = (elem, minute, second, hour, destination) => {
    hour.innerText = elem.h;
    minute.innerText = elem.m;
    second.innerText = elem.s;
    destination.appendChild(hour);
    destination.appendChild(minute);
    destination.appendChild(second);
}