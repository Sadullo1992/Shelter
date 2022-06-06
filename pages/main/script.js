import {Burger} from './burger.js';
import {ourfriendsCard} from './petCard.js';

// Burger
Burger();

// Carousel
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

// const ourfriendsSliderWrapper = document.getElementById('ourfriends-slider-wrapper');
const ourfriendsSliderWrapperInner = document.getElementById('ourfriends-slider-wrapper-inner');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let activeArr = [];

window.addEventListener('DOMContentLoaded', () => {
    setActiveSlides();
});
window.addEventListener('resize', () => {
    setActiveSlides();
});

const setActiveSlides = () => {
    if(window.innerWidth < 767) {
        activeArr = [0];
    } else if(window.innerWidth > 1279) {
        activeArr = [0, 1, 2];
    } else {
        activeArr = [0, 1];        
    }
    while (ourfriendsSliderWrapperInner.firstChild) {
        ourfriendsSliderWrapperInner.removeChild(ourfriendsSliderWrapperInner.firstChild);
    }
    carouselCantainer(activeArr);
    transformSlide(activeArr);
};
 
async function carouselCantainer(randomArray, direct) {
    let pets = await dataPets();
    randomArray.forEach(item => {
        if(direct === 'next') {
            ourfriendsSliderWrapperInner.append(ourfriendsCard(pets[item]))
        } else {
            ourfriendsSliderWrapperInner.prepend(ourfriendsCard(pets[item]))
        }
    });     
}

nextBtn.addEventListener('click', () => {
    activeSlides('next');
});
prevBtn.addEventListener('click', () => {
    activeSlides('prev');
});

const activeSlides = (direction) => {     
    const randomArray = randomArrFunction(activeArr);
    carouselCantainer(randomArray, direction);
    transformSlide(activeArr, direction);
    setTimeout(() => {
        removeSlide(activeArr, direction);
    }, 500);
    activeArr = randomArray;
};

const transformSlide = (activeArr, direct) => {
    let wrapperWidth;
    switch(activeArr.length) {
        case 1: wrapperWidth = 300; break;
        case 2: wrapperWidth = 620; break;
        case 3: wrapperWidth = 1080; break;
    }
    if(direct === 'next') {
        ourfriendsSliderWrapperInner.style.justifyContent = 'flex-start';
        ourfriendsSliderWrapperInner.style.transform = `translateX(-${wrapperWidth}px)`;
        ourfriendsSliderWrapperInner.style.transition = '0.5s ease-in-out';
    }else if(direct === 'prev'){
        ourfriendsSliderWrapperInner.style.justifyContent = 'flex-end';
        ourfriendsSliderWrapperInner.style.transform = `translateX(${wrapperWidth}px)`;
        ourfriendsSliderWrapperInner.style.transition = '0.5s ease-in-out';
    } 
}

const removeSlide = (activeArr, direction) => {
    ourfriendsSliderWrapperInner.style.transform = 'translateX(0)';
    ourfriendsSliderWrapperInner.style.transition = '0s';
    for(let i = 0; i < activeArr.length; i++) {
        direction === 'next' ? ourfriendsSliderWrapperInner.removeChild(ourfriendsSliderWrapperInner.firstChild) : ourfriendsSliderWrapperInner.removeChild(ourfriendsSliderWrapperInner.lastChild);
    }
}

const randomArrFunction = (activeArr) => {
    let randomArr = [];
    for(let item of activeArr) {
        let x = item;
        while(activeArr.includes(x) || randomArr.includes(x)) {
            x = Math.floor(Math.random()*8);
        }
        randomArr.push(x);
    }
    return randomArr;
}