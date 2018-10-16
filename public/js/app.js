// let words = ['Barber', 'Stylist', 'Yoga Studio', ]
// let timer = setInterval(myWords, 5000);

// fuction myWords() {
//     for (let i = 0; i < words.length; i++) {
//         document.getElementById("change-word").innerHTML = words
//     }
// }
// let element = document.body;
// let currectWord = -1;

// window.setInterval(function(){
//     currentWord++;
//     if(currentWord > words.length) currentWord = 0;
//     element.textContent = words[currentWord];
// }, 5000);

// test this out using a for loop
//     for (let i = 0; i < words.length -1; i++ ) {
        
//     }

let words = ["Barber", "Hairdresser", "Stylist", "Yoga Studio", "Massage Therapy", "MakeUp"];
// let currentWordIndex = -1;

// let wordInt = setInterval(function() {
//     ++currentWordIndex;
//     if (currentWordIndex > words.length) {
//         currentWordIndex = 0;
//     }
//     setSpanWord(words[currentWordIndex]);
// }, 5000); 

// document.getElementById("change-word").innerHTML = words;

for (let i = 0; i < words.length; ++i) {
    setDelay(i);
}

function setDelay(i) {
    setTimeout(function(){
        document.getElementById("change-word").innerHTML = words;
        // console.log(i);
    }, 5000)
}