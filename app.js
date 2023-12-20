"use stict"

const slides = document.querySelector('.slides');
const btnPrevious = document.querySelector('.btn__previous');
const btnNext = document.querySelector('.btn__next');

let currIndx = 0;

const showSlide = (index) => {
  slides.style.transform = `translateX(-${index * 100}vw)`;
}

const nextSlide = () => {
  if(currIndx < slides.children.length - 1){
    currIndx++;
    showSlide(currIndx);;
  }else{
    currIndx = 0;
    showSlide(currIndx);
  }
  
};
const previous= () => {
  if(currIndx > 0){
    currIndx--;
    showSlide(currIndx);
  }else{
    currIndx = slides.children.length -1;
    showSlide(currIndx);
  }
};

btnNext.addEventListener('click',nextSlide);
btnPrevious.addEventListener('click',previous);