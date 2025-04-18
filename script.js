const textarea = document.querySelector("textarea"),
button = document.querySelector("button");

function textToSpeech(text) {
    let speech = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speech);
}
button.addEventListener('click', e =>{
    e.preventDefault();
    if(textarea.value!== ""){
        textToSpeech(textarea.value);
    }
});
