var img1URL = chrome.runtime.getURL("1.jpg");
var img2URL = chrome.runtime.getURL("2.jpg");
var img3URL = chrome.runtime.getURL("3.png");
var img4URL = chrome.runtime.getURL("4.jpg");
var img5URL = chrome.runtime.getURL("5.jpg");
var img6URL = chrome.runtime.getURL("6.jpg");
var img7URL = chrome.runtime.getURL("7.jpg");

let imgArray = [img1URL,img2URL,img3URL,img4URL,img5URL,img6URL,img7URL];

const imgs = document.getElementsByTagName("img");

let KellyQuotes = ["I have a lot of questions. Number one, how dare you?", "My resolution was to get more attention.", "This day is bananas, B-A-N-A-N-A-S.", "I talk a lot, so I’ve learned to just tune myself out.", "I am one of those few people who looks hot eating a cupcake."];

const headers = document.getElementsByTagName("yt-formatted-string");


Array.from(imgs).forEach(function(item){
    const randomImg = Math.floor(Math.random() * imgArray.length)
        item.src = imgArray[randomImg]
});
        
Array.from(headers).forEach(function(item){
    const randomHead = Math.floor(Math.random() * KellyQuotes.length)
            item.innerText = KellyQuotes[randomHead]
});




