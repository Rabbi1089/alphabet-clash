function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}


function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;


}