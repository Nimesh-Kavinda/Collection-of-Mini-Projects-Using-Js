const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=832e25b632752d5f544ddc8bfb5ea6a5&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=832e25b632752d5f544ddc8bfb5ea6a5&query="'

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// Get inital movies 
getMovies(API_URL);

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML =  '';

    movies.forEach((movie) => {
        const {title, poster_path , vote_average , overview} = movie;

        const movieEL = document.createElement ('div');
        movieEL.classList.add('movie');

        movieEL.innerHTML = `
            <img src="${IMG_PATH + poster_path}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>overView</h3>
                ${overview}
            </div>
        `

        main.appendChild(movieEL);
    });
}

function getClassByRate(vote) {
    if(vote >= 8){
        return "green";
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const searchTerm = search.value;

    if(searchTerm && searchTerm !== '') {

        getMovies(SEARCH_API + searchTerm);

        search.value = ' ';
    } else {
        window.location.reload();
    }
});



