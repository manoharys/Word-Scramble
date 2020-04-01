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
        randomArray(array, random);
    }
});

function randomArray(arr, rand) {
    console.log(arr);
    //console.log(arr.length);
    console.log(rand);
    let randomised = arr[rand].split('');
    console.log(randomised);
    let randomisedNumber;
    let temp = randomised;
    let check = temp;
    for (let i = 0; i < randomised.length; i++) {
        randomisedNumber = Math.floor(Math.random() * randomised.length);
        console.log(randomisedNumber);
        temp[i] = randomised[randomisedNumber];
    }
    console.log(temp);

    //console.log(check);

    //console.log(temp);
    //console.log(randomised);

}