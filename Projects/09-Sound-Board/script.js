const sounds = ['nova', 'airplane', 'gun', 'van', 'beat', 'waterfall'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopSongs();

        document.getElementById(sound).play();
    });

    document.getElementById('buttons').
    appendChild(btn);
});

const page = document.querySelector(".page");

page.addEventListener("click",() => {
    stopSongs();
});

function stopSongs(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    });
}