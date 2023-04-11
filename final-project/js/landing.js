document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        console.log('Entering Universe');
        window.location.replace('./mv.html');
    }
})