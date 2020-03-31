const message = document.querySelector('.message');
const guess = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function () {
    let inplay = false;
    if (!inplay) {
        inplay = true;
        button.innerHTML = "Guess";
    }
});