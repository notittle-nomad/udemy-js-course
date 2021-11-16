const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
// add our buttons with js
sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerHTML = sound;
    btn.addEventListener('click', () => {
        //stop playing prev audio
        stopSongs();
        // take our audio from html and play it
        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild(btn);
});

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })
}