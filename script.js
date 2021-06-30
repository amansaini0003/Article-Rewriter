const textInput = document.querySelector("#txt-input");
const btnParaphrase = document.querySelector("#btn-paraphrase");
const outputDiv = document.querySelector("#output");

const serverURL = "https://api.funtranslations.com/translate/article_rewrite.json";


function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("Error Occured : ", error);
    alert(`Something wrong from server side... Please try  again after some time`);
}

function clickHandler() {
    const url = getTranslationURL(textInput.value);
    fetch(url)
        .then(response => response.json())
        .then(json => {
            const translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
}

btnParaphrase.addEventListener("click", clickHandler);