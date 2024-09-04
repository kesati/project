document.addEventListener('DOMContentLoaded', function() {
    let dataMovieString = localStorage.getItem('selectedMovie');

    if (dataMovieString){
        let dataString = JSON.parse(dataMovieString);
        console.log(dataMovieString);
        document.querySelector('.poster__img img').setAttribute('src', dataString.src);
        document.querySelector('.name__movie h1').textContent = dataString.name;
        document.querySelector('.genre__movie .text__genre').textContent =  dataString.genre;
        document.querySelector('.time__movie .text__time').textContent = dataString.time;
        document.querySelector('.country__movie .text__country').textContent = dataString.country;
        document.querySelector('.trans__movie .text__trans').textContent = dataString.trans;
        document.querySelector('.moviepay').textContent=dataString.name;
    }

document.querySelectorAll('.day').forEach(function(day) {
    day.addEventListener('click', function() {
        document.querySelectorAll('.day').forEach(function(day) {
            day.classList.remove('active');
        });


        this.classList.add('active');
    });
});
let count = 0;
let a =0 ;
let b = 0;
document.querySelectorAll('.btnticket').forEach(button => {
    button.addEventListener('click', () => {
        let di = button.getAttribute('class');
        let quantity = button.parentElement.querySelector('.quantity__ticket');

        changeValue (quantity,di)  
    });
});

function changeValue(quantity, di) {
    let quantityValue = parseInt(quantity.textContent); 
    if (di === 'reduce__ticket btnticket') {
        if (quantityValue > 0) {
            quantity.textContent = quantityValue - 1; 
        }
    } else if (quantityValue < 10){

        quantity.textContent = quantityValue + 1; 
    }
  
    a = parseInt(document.querySelector('.ticket__number.t1 .quantity__ticket').textContent);
    b = parseInt(document.querySelector('.ticket__number.t2 .quantity__ticket').textContent)
    count = a + b;
    document.querySelector('.number__ticketpay').textContent =a;
    document.querySelector('.number__ticketpay.v2').textContent =b;
    document.querySelector('.numberpay').textContent = a*85+b*45;
}

let i = 0;
document.querySelectorAll('.chart__seat').forEach(function(seat) {
    seat.addEventListener('click', function() {
        if (!seat.classList.contains('G4') && !seat.classList.contains('G2') && !seat.classList.contains('G5')) {
            if( i >= count){
            document.querySelectorAll('.chart__seat').forEach(function(seat) {
                seat.classList.remove('G3');
            });
            i = 0; 
        }
        if( !count <= 0)
        seat.classList.add('G3');
        i++;
    }
});
});



document.querySelector('.payment-btn').addEventListener('click', function() {
    document.querySelector  ('.notification').classList.remove('hidden');
});

document.querySelector('.ok-btn').addEventListener('click', function() {
    document.querySelector('.notification').classList.add('hidden');
});

});