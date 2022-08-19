////////////////// Contact us popUp

const button = document.querySelector('.myBtn');
const popUp = document.querySelector('.pop-up');

button.addEventListener('click', (e)=> {
    e.stopPropagation()
    popUp.style.display = 'block'
    document.addEventListener('click', hidePopUp)
})

function hidePopUp(e){
    if(!popUp.contains(e.target)){
        popUp.style.display = 'none'
        document.removeEventListener('click', hidePopUp)
    }
}

/////////////////////////// uxBar PopUp


const bar = document.querySelector('.bar');
const uxPopUp = document.querySelector('.uxPopUp');

bar.addEventListener('click', (e)=> {
    e.stopPropagation()
    uxPopUp.style.display = 'block'
    document.addEventListener('click', hideUxPopUp)
})

function hideUxPopUp(e){
    if(!uxPopUp.contains(e.target)){
        uxPopUp.style.display = 'none'
        document.removeEventListener('click', hideUxPopUp)
    }
}


////////////// Like - dislike

const thumbsUp = document.querySelector('.fa-thumbs-up')
const thumbsDown = document.querySelector('.fa-thumbs-down')
const like = document.querySelector('.like')
const dislike = document.querySelector('.dislike')

let count = 98;
let disCount = 35;


thumbsUp.addEventListener('click', ()=> {
    `${count++}`
    like.innerHTML=count
    thumbsUp.style.color = '#20308C';
    thumbsDown.style.color = '#FFC882';
});

thumbsDown.addEventListener('click', ()=> {
    `${disCount++}`
     dislike.innerHTML=disCount 
     thumbsUp.style.color = '#FFC882';
     thumbsDown.style.color = '#A50015';
});


///////////////////// Slide


const slideContainer = document.querySelector('.container');
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';
slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;
slide.style.transform = `translateX(${-slideWidth * index}px)`;

const startSlide = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, 1500);
};

const getSlides = () => document.querySelectorAll('.slide');

slide.addEventListener('transitionend', () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = 'none';
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
  if (slides[index].id === lastClone.id) {
    slide.style.transition = 'none';
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

const moveToNextSlide = () => {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

slideContainer.addEventListener('mouseenter', () => {
  clearInterval(slideId);
});

slideContainer.addEventListener('mouseleave', startSlide);

nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);

startSlide();

