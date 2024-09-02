document.querySelector('.search').addEventListener('click', redirectToSearch);
document.querySelector('.searchInput').addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
        redirectToSearch ();
    }
});
function redirectToSearch () {
    let input = document.querySelector('.searchInput').value.trim();

    if (input.length > 0){
        window.location.href = 'timphim.html?query=' + encodeURIComponent(input);
    }
}