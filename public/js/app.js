let words = ["Barber", "Hairdresser", "Stylist", "Yoga Studio", "Massage Therapy", "MakeUp"];
let wordChange = document.getElementById(change-word);

function myFunction(words) {
    setInterval(function(){ document.getElementById("change-word").innerHTML = words; }, 5000);
}