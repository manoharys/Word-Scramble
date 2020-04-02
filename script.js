const message = document.querySelector('.message');
const guess = document.querySelector('input');
const button = document.querySelector('button');
const display = document.querySelector('.displayAnswer');
const array = ['hello', 'html', 'give', 'ran', 'big', 'word', 'toy', 'war'];
let random;
let inplay = false;
let scramble, scrambled;
let randomised
button.addEventListener('click', function () {
    message.style.color = "black";
    display.style.color = '';
    display.style.fontSize = '22px';
    display.innerHTML = "";

    if (!inplay) {
        inplay = true;
        button.innerHTML = "Guess";
        button.style.padding = "9px";
        button.style.width = '9rem';

        guess.style.display = 'block'
        random = Math.floor(Math.random() * array.length);
        scramble = array[random];

        scrambled = randomArray(array, random);
        console.log(scramble);
        console.log(scrambled);
        message.innerHTML = scrambled;
    } else {
        let tempGuess = guess.value;
        console.log(tempGuess);
        if (tempGuess === scramble) {
            inplay = false;
            console.log("hello");
            message.style.color = "green";
            button.innerHTML = "Start";
            guess.style.display = "none";
            message.innerHTML = "correct!!"

        } else {

            wrongStlyes();
            message.innerHTML = scrambled;
            guess.value = "";
        }
    }
});


//Function which shuffles the randomised split array
function randomArray(arr, rand) {
    //console.log(arr);
    //console.log(arr.length);
    // console.log(rand);
    randomised = arr[rand].split('');
    //  console.log(randomised);
    let i = randomised.length;
    let temp, j;

    //Fisher-Yates Shuffle algorithm

    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        //console.log(randomNumber);
        temp = randomised[i];
        randomised[i] = randomised[j];
        randomised[j] = temp;
    }
    return (randomised.join(""));

}

//Function which addresses the styles of wrong(true/false)

function wrongStlyes() {
    display.style.color = 'red';
    display.style.fontSize = '22px';
    display.innerHTML = "wrong!!";
    guess.style.border = "2px solid red";
}