const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener("click", genarteJoke);

genarteJoke();

function genarteJoke() {

    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    fetch('https://icanhazdadjoke.com/' , config)
        .then((response) => response.json())
        .then((data) => {
            jokeEl.innerText = data.joke;
        });
    
}