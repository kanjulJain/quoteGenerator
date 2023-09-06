const api_url="https://api.quotable.io/random"
const quote = document.getElementById("quote")
const author = document.getElementById("author")
const soundBTN = document.getElementById("soundbtn")


async function getquote(url){
    const response = await fetch(url);          //refer notes
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getquote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "----by " + author.innerHTML,"Tweet Window","width=600","height=300");
}

soundBtn.addEventListener("click",()=>{
    let utterance = new SpeechSynthesisUtterance(`${quote.innerHTML} by ${author.innerHTML}`);
    speechSynthesis.speak(utterance); 
})

copyBtn.addEventListener("click",()=>{
     navigator.clipboard.writeText(quote.innerHTML);
})

