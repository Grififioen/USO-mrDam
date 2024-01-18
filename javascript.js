var soortArray = [];

// array function
//  array = lijst
// print een array van strings
function openarrayModal(soort) {
    soortArray.push(soort)
    console.log(soortArray);
}

int = nummer = 1

var nummer = 1
var nummertext = "een"
var nummerArray = ["een", 1]

nummerArray[1]

var nummers = [1,2,3,4,5,6,7,8,9,0]

function count() {
    nummers.forEach(function(nummer){
        console.log(nummer)
        count();
    });
}

// string function
// string = tekst = "iets"
function opentextModal(soort) {
    console.log(soort);
}

//  Alles hierboven wissen voordat je het inleverd ^^ 

// de echte stuff
var amount = 1;
var soort = "";

function openModal(broodjesSoort) {
    soort = broodjesSoort;

    document.querySelector('#bestelButton').innerHTML="bestel "+ amount + " " + soort + " broodje";

    document.querySelector('#overlay').style.display = 'block';
    document.querySelector('#modal').style.display = 'block';
}

function closeModal() {
    document.querySelector('#overlay').style.display = 'none';
    document.querySelector('#modal').style.display = 'none';
}

function changeAmount(event) {
    amount = event.target.value;

    document.querySelector('#bestelButton').innerHTML="bestel "+ amount + " " + soort + " broodje";
}