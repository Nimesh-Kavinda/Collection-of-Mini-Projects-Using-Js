const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener("click", genarteJoke);

genarteJoke();


// Using ASYNC/AWAIT 

 async function genarteJoke() {

    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

   const res = await fetch('https://icanhazdadjoke.com/' , config);
      
    
    const data = await res.json();

    jokeEl.innerHTML = data.joke;


}




// Using .then 



// function genarteJoke() {

//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }

//     fetch('https://icanhazdadjoke.com/' , config)
//         .then((response) => response.json())
//         .then((data) => {
//             jokeEl.innerText = data.joke;
//         });
    
// }