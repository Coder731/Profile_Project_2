//  Reference:
//  https://www.mediawiki.org/wiki/API:Search#JavaScript
/*
    search.js

    MediaWiki API Demos
    Demo of `Search` module: Search for a text or title

    MIT License
*/

var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "query",
    list: "search",
    srsearch: "Nelson Mandela",
    format: "json"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
        if (response.query.search[0].title === "Nelson Mandela"){
            console.log("Your search page 'Nelson Mandela' exists on English Wikipedia" );
        }
    })
    .catch(function(error){console.log(error);});

// Reference:
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_search

// set a html element equal to something:

let str = "Visit  W3Schools!"; 
document.getElementById("output").innerHTML = str.search("W3Schools");

// Reference Comment:
// Simple Search in JavaScript [JavaScript Series]
// https://www.youtube.com/watch?v=SWkPXbQXArk&t=1s

const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (event) => {
    console.log(event);
});

const userInput = document.getElementById('userinput');

userInput.addEventListener("change", goWiki) 

function goWiki() {
        console.log(userInput);
        console.log("TESTING");
}

// Reference Comment:
// Coding Challenge #75: Wikipedia API
// https://www.youtube.com/watch?v=RPz75gcHj18

