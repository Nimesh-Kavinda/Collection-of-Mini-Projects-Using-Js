const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

genarteJoke();

function genarteJoke() {

    const config = {
        headers : {
            Accept : 'application/json',
        },
    }

    fetch('https://icanhazdadjoke.com' , config)
        .then((res) => res.json)
        .then((data) => {
            jokeEl.innerText = data.joke;
        });
    ;
}