// function playNow(){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     const playgroundSection = document.getElementById('playground-section');
//     playgroundSection.classList.remove('hidden');
//     //console.log(homeScreen)
// }

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    //console.log('tested')
    //----------------------Get the expected to press

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabed = currentAlphabet.toLocaleLowerCase();
    //console.log(expectedAlphabed , playerPressed);
    //check if expected and player pressed are same

    if(expectedAlphabed === playerPressed){
        
        const currentScore = getElementValueById('current-score');
       // console.log(currentScore);
        const NewScore = currentScore + 1;
       // console.log(NewScore);
       setElementValueById('current-score' , NewScore)
        

        //console.log('your got score')
        //==================== update score
        // const currentScoreElement =document.getElementById('current-score');
        // const currentScoreElementText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreElementText);

        // console.log(currentScore);

        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;

        //========================= Start a new round


        removeBackgroundColorById(playerPressed)
        continueGame();
    }else{

        const currentLife = getElementValueById('current-life');
        const updatedLife = currentLife - 1;

        setElementValueById('current-life',updatedLife )

        if(updatedLife < 0){
            //console.log(updatedLife, 'game over')
            gameOver();
        }

        // console.log('you will lose your life')
        // const currentLifeElement = document.getElementById('current-life');
        // const currentlifeElementText = currentLifeElement.innerText;
        // const currentlife = parseInt(currentlifeElementText);

        // const newLife = currentlife - 1;
        // currentLifeElement.innerText = newLife;
    }
    

}

document.addEventListener('keyup' , handleKeyboardKeyUpEvent);
//call back function

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
    hideElementById('final-score')
    continueGame();
    setElementValueById('current-life',5)
    setElementValueById('current-score',0)
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
    //console.log(indexNumber, alphabet);
    return alphabet;
   
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-300')
}


function addBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-300')
}


function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setElementValueById(elementId , value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function gameOver(){
    hideElementById('playground-section');
    showElementById('final-score')
    const lastScore = getElementValueById('current-score');
    console.log(lastScore);
    setElementValueById('game-end-score', lastScore)
}