import {Burger} from '../main/burger.js';
import {ourfriendsCard} from '../main/petCard.js';

// Burger
Burger();

// Pagination
// Get data from json file
async function dataPets(){    
    try {
        const response = await fetch('../../assets/pets.json');
        if (!response.ok) {
          const message = `An error has occured: ${response.status}`;
          throw new Error(message);
        }
        const data = await response.json();
        return data;
      } catch {
        throw new Error("Something went wrong!");
    }
}

const petsWrapperInner = document.getElementById('pets-slider-wrapper-inner');
const beginPag = document.getElementById('beginPag');
const prevPag = document.getElementById('prevPag');
const numberPag = document.getElementById('numberPag');
const nextPag = document.getElementById('nextPag');
const endPag = document.getElementById('endPag');

let activeArr = [];
let num = 0;

window.addEventListener('DOMContentLoaded', () => {
    setActiveSlides();
});
window.addEventListener('resize', () => {
    setActiveSlides();
});

const setActiveSlides = () => {    
    let activeAllPets = [];
    if(window.innerWidth < 767) {
        activeArr = [0, 1, 2];
        activeAllPets = activeAllPetsFunc(activeArr);
    } else if(window.innerWidth > 1279) {
        activeArr = [0, 1, 2, 3, 4, 5, 6, 7];
        activeAllPets = activeAllPetsFunc(activeArr);
    } else {
        activeArr = [0, 1, 2, 3, 4, 5]; 
        activeAllPets = activeAllPetsFunc(activeArr);       
    }
    while (petsWrapperInner.firstChild) {
        petsWrapperInner.removeChild(petsWrapperInner.firstChild);
    }
    num = 0;    
    paginationContainer(activeAllPets);
    transformPagination(num);  
};


async function paginationContainer(allPets) {
    let pets = await dataPets();
    allPets.forEach(item => petsWrapperInner.append(ourfriendsCard(pets[item])));
}

beginPag.addEventListener('click', () => {
    num = 0;
    transformPagination(num);
});
prevPag.addEventListener('click', () => {
    num--;
    transformPagination(num);
});
nextPag.addEventListener('click', () => {
    num++;
    transformPagination(num);
});
endPag.addEventListener('click', () => {
    num = (48/activeArr.length)-1;
    transformPagination(num);
});

function activeAllPetsFunc(activeArr) {
    let arr = [];
    arr = arr.concat(activeArr);
    for(let i = 0; i < (48/activeArr.length)-1; i++){
        arr = arr.concat(randomArrFunction(activeArr));
    }    
    return arr;
}

function randomArrFunction(activeArr) {
    let randomArr = [];
    for(let item of activeArr) {
        let x;
        while(x === undefined || randomArr.includes(x)) {
            x = Math.floor(Math.random()*8);
        }
        randomArr.push(x);
    }
    return randomArr;
}

const transformPagination = (num) => {
    let wrapperWidth;
    switch(activeArr.length) {
        case 3: wrapperWidth = 300; break;
        case 6: wrapperWidth = 600; break;
        case 8: wrapperWidth = 1240; break;
    }
    numberPag.textContent = `${num+1}`;   
    if(num === 0) {
        beginPag.classList.add('inactive');
        prevPag.classList.add('inactive');
    } else {
        beginPag.classList.remove('inactive');
        prevPag.classList.remove('inactive');
    }
    if(num === ((48/activeArr.length)-1)) {
        endPag.classList.add('inactive');
        nextPag.classList.add('inactive');
    } else {
        endPag.classList.remove('inactive');
        nextPag.classList.remove('inactive');
    }    
    petsWrapperInner.style.transform = `translateX(-${num*wrapperWidth}px)`;
    petsWrapperInner.style.transition = '0.5s ease-in-out';
    
}








