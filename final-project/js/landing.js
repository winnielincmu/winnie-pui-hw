// loads the music video page upon pressing the spacebar

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        console.log('Entering Universe');
        window.location.replace('./mv.html');
    }
})