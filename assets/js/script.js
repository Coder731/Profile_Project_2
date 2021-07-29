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

// Reference Comment:
// https://gomakethings.com/listening-for-click-events-with-vanilla-javascript/#the-vanilla-js-way-to-listen-for-click-events
// The vanilla JS way to listen for click events

document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('.click-me')) return;

	// Don't follow the link
	event.preventDefault();

	// Log the clicked element in the console
	console.log(event.target);
    console.log('test2');

}, false);