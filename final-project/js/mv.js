var opacity = 0;
var intervalCount = 0;

setTimeout(startFade, 20000);

function startFade() {
    setInterval(buttonsAppear, 100);
}

// fade in function adjusted from: https://www.geeksforgeeks.org/how-to-add-fade-in-effect-using-pure-javascript/#

function buttonsAppear() {
    var mvButtons = document.querySelector('.buttons');
    var opacity = Number(window.getComputedStyle(mvButtons).getPropertyValue('opacity'));
    if (opacity < 1) {
        opacity = opacity + 0.1;
        mvButtons.style.opacity = opacity;
    } else {
        clearInterval(intervalCount);
    }
}

