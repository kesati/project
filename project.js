
                   // BANNER QUẢNG CÁO 
let slide = document.querySelector('.carousel__slide');
let item = document.querySelectorAll('.slide__item');    
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let dots = document.querySelectorAll('.carousel__dots li');

let view = 0;
let lengthItem = item.length -1;

next.onclick = function (){
    view++;
    if (view > lengthItem){
        view = 0;
    }
    changeSlide ();
}

prev.onclick = function (){
    view--;
    if (view < 0){
        view = lengthItem;
    }
    changeSlide();
}

dots.forEach ((dot,index) => {
    dot.onclick = function (){
        view = index;
        changeSlide();
    }
})

let refreshSlide = setInterval (()=>{next.onclick()},4000);

function changeSlide (){
    let checkLeft = item[view].offsetLeft;
    slide.style.left = -checkLeft + 'px';

    let active = document.querySelector('.carousel__dots li.active');
    active.classList.remove('active');
    dots[view].className = 'active';
    clearInterval (refreshSlide);
    refreshSlide = setInterval (()=>{next.onclick()},4000);

}

// DANH SÁCH PHIM
document.querySelectorAll('.movie__btn button').forEach(button => {
    button.addEventListener('click', () => {
        let carousel = button.parentElement.parentElement;
        let dir = button.getAttribute('class');


        moveSlide(carousel,dir);
    });
});

    let slideNow = 0;
function moveSlide (carousel,dir) {
    let listMovie = carousel.querySelector('.list__movie');
    
    if (dir === 'left') {
        slideNow = (slideNow + 2) % 3;
    }else if (dir === 'right') {
        slideNow = (slideNow + 1) % 3;
    }
    let moveList = -slideNow*(100/3);
    listMovie.style.transform = `translateX(${moveList}%)`;
}

