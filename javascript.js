//Hier heb ik de variabelen aan gemaakt voor de pop up met een dropdown. 
//als je in de website staat en je een stukje naar beneden scrollt kom je uit op
var amount = 1;
var soort = "";
//functie aangemaakt met een variabelen genaamd amount en soort. in het document onder #bestelbutton staat als = 'bestel'+ hoeveelheid + nummer + spatie + soort 'broodje'. soort is vlees kaas of groente dat wordt ingevuld bij de keuze die de gebruiker maakt.
//Ook heb ik hier onder een argument gemaakt genaamd broodjessoort om data door te kunnen geven tussen functies
function openModal(broodjesSoort) {
    soort = broodjesSoort;

    document.querySelector('#bestelButton').innerHTML="bestel "+ amount + " " + soort + " broodje";

    document.querySelector('#overlay').style.display = 'block';
    document.querySelector('#modal').style.display = 'flex';
}

//het sluiten van de popup
function closeModal() {
    document.querySelector('#overlay').style.display = 'none';
    document.querySelector('#modal').style.display = 'none';
}

//de functie om de hoeveelheid te veranderen
function changeAmount(event) {
    amount = event.target.value;

    document.querySelector('#bestelButton').innerHTML="bestel "+ amount + " " + soort + " broodje";
}

///slideshow functie waar de broodjes images een andere css styling krijgen. Met gelijke intervallen worden deze plaatjes gepresenteerd
let slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("broodjesSlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}