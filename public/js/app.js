let words = ['Barber', 'Stylist', 'Yoga Studio', ]
let element = document.body;
let currectWord = -1;

window.setInterval(function(){
    currentWord++;
    if(currentWord > words.length) currentWord = 0;
    element.textContent = words[currentWord];
}, 5000);