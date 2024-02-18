// function playNow(){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     const playgroundSection = document.getElementById('playground-section');
//     playgroundSection.classList.remove('hidden');
//     //console.log(homeScreen)
// }


function addBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-300')
}



function continueGame(){
//1st we randomly generate a alphabet
const alphabet = getRandomAlphabate();
//console.log('your randomly generated alphaber is '+alphabet);


// show alphabet in display

const currentAlphabetElement = document.getElementById('current-alphabet')
currentAlphabetElement.innerText = alphabet;

addBackgroundColorById(alphabet);
}


//here the function is called in utility js
function playNow(){
    hideElementById('home-screen')
    showElementById('playground-section')
    continueGame();
}

function getRandomAlphabate(){
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetString.split('');
    //output = (26) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    //console.log(alphabets);
    //Get a random number from math a math function
    const randomNumber = Math.random()*25;
    const indexNumber = Math.round(randomNumber);
    const alphabet = alphabets[indexNumber];
    console.log(indexNumber, alphabet);
    return alphabet;
   
}