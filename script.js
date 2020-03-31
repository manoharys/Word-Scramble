const message = document.querySelector('.message');
const guess = document.querySelector('input');
const button = document.querySelector('button');
const array = ['hello', 'html', 'give', 'ran', 'big', 'word', 'toy', 'war'];


button.addEventListener('click', function () {
    let inplay = false;
    if (!inplay) {
        inplay = true;
        button.innerHTML = "Guess";
        button.style.padding = "9px";
        button.style.width = '9rem';
        guess.style.display = 'block'
        let random = Math.floor(Math.random() * array.length);
        message.innerHTML = array[random];
    }
});