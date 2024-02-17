function hideById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("hidden")
}
function showById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

function setBackGroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('')
    // Genarete Random Number
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    console.log(alphabet)
    return alphabet
}

function continueGame(){
    const alphabet = getARandomAlphabet();
    const currentAlphabet = document.getElementById('currentalphabet');
    currentAlphabet.innerText  = alphabet;
    setBackGroundColor(alphabet)
}

function play(){
    hideById('home-page');
    showById('playground');
    continueGame();
}