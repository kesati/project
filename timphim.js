window.addEventListener('load', function () {
    // window.onload = function() {
    let data = new URLSearchParams (window.location.search).get('query');
    
    if (data){
        document.querySelector('.searchInput').value = data;
        movieSearch (data);
    }
});
    
    let mess = document.querySelector ('.mess');
    mess.style.display='none'
    let found = false;
    
    function movieSearch (data) {
        let filter = data.toUpperCase ();
        let list = document.querySelector('.phimhot__content');
        let movies = list.querySelectorAll('.movie1__space.movie-item');
        
        for (let i = 0; i < movies.length; i++){
            let movie = movies[i];
            let nameMovie = movie.textContent || movie.innerText ;
            if (nameMovie.toUpperCase().indexOf(filter) > -1) {
                movie.style.display = ''; 
                found = true;
            } else {
                movie.style.display = 'none'; 
            }
        }
        
        if(!found) {
            mess.style.display = 'block';
        }
    }