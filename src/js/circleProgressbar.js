const progressBar = document.getElementById("progress-bar");

function progressTheBar(param) {
    progressBar.style.background = `radial-gradient(closest-side, $backgroundColor 79%, transparent 80% 100%), conic-gradient($veryLightGray ${param}%, $navbarColor 0);`
}