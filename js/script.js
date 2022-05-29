var audioplayer = document.getElementById('audio-player');
var loaded = false;

var playbtn = document.getElementById('playbtn');
var pausebtn = document.getElementById('pausebtn');

pausebtn.addEventListener("click", (e)=>{
    e.preventDefault();

    playbtn.style.display = "inline";
    pausebtn.style.display = "none";
    audioplayer.pause();
    return false;
});

playbtn.addEventListener("click", (e)=>{
    e.preventDefault();

    playbtn.style.display = "none";
    pausebtn.style.display = "inline";
    audioplayer.play();
    return false;
});

    const playSong = (file) => {
            if(loaded == false){

                audioplayer.innerHTML = `<source src="`+file+`" type="audio/mp3"/>`;
                loaded = true;
            }
            audioplayer.play();
            playbtn.style.display = "none";
            pausebtn.style.display = "inline";
    }

    document.querySelectorAll(`.main-col`).forEach(item =>{
        item.addEventListener("click", event =>{
            let image = item.getAttribute('data-image');
            let artist = item.getAttribute('data-artist');
            let song = item.getAttribute('data-song');
            let file = item.getAttribute('data-file');

            let playerArtistComponent = document.getElementsByClassName('player-artist');

            playerArtistComponent[0].innerHTML = `
                <img src="`+image+`">
                <h3>`+artist+`<br><span>`+song+`</span></h3>
            ` 
            playSong(file);
        });
    });