
document.addEventListener('DOMContentLoaded', function() {
    const user = document.querySelector('.user');
    
    document.querySelector('.upper__account').addEventListener('click', function() {
        user.style.display = 'block';
    });
    
    document.querySelector('.close-btn').addEventListener('click', function() {
        user.style.display = 'none';
    });
    
    document.querySelectorAll('.switchregister').forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            user.style.display = 'block';
            document.querySelector('.user__login').style.display = 'none';
            document.querySelector('.user__register').style.display = 'block';
        });
    });
    document.querySelectorAll('.switclogin').forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            user.style.display = 'block';
            document.querySelector('.user__login').style.display = 'block';
            document.querySelector('.user__register').style.display = 'none';
        });
    });
    

document.querySelector('.search').addEventListener('click', redirectToSearch);
document.querySelector('.searchInput').addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
        redirectToSearch ();
    }
});
function redirectToSearch () {
    let input = document.querySelector('.searchInput').value.trim();

    if (input.length > 0){
        window.location.href = 'khophim.html?query=' + encodeURIComponent(input);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    let listMovie = document.querySelectorAll('.movie1__space');
    listMovie.forEach(itemMovie => {
        itemMovie.addEventListener('click', () => {
            let imgSrc = itemMovie.querySelector('img').getAttribute('src');
            let name = itemMovie.querySelector('.inner .name').textContent.trim();
            let genre = itemMovie.querySelector('.inner .genre').textContent.trim();
            let time = itemMovie.querySelector('.inner .time').textContent.trim();
            let country = itemMovie.querySelector('.inner .country').textContent.trim();
            let trans = itemMovie.querySelector('.inner .trans').textContent.trim();
            let ojectMovie = {
                src: imgSrc,
                name: name,
                genre: genre,
                time: time,
                country: country,
                trans: trans
            };
            let dataMovie = JSON.stringify(ojectMovie);
            localStorage.setItem('selectedMovie', dataMovie);
        });
    });
});
});
