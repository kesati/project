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
