let players = document.querySelectorAll('audio');
let playerContainers = document.querySelectorAll('.song-container');
let playButton = document.querySelectorAll('.play');


players.forEach( (element)=> {

        element.addEventListener('play', (e) => { 
            players.forEach( (quietElement)=> { 
            if(quietElement != e.target) {
            quietElement.pause();
            quietElement.load();
            if(quietElement.innerText === '<=') { 
                quietElement.pause(); 
                quietElement.load();
            } 
        }
    });
});
});
