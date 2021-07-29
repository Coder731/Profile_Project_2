// JavaScript getTime() Method
// https://www.w3schools.com/jsref/jsref_gettime.asp
// JavaScript getTime() Method
// Try It Yourself
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_gettime

    function myFunction() {
        var d = new Date();
        var n = d.getTime();
        document.getElementById("demo").innerHTML = n;
    }

    // https://www.w3docs.com/snippets/javascript/how-to-get-a-timestamp-in-javascript.html
    let e = new Date().getTime()

// Reference Comment:
// How to convert seconds to minutes and hours in javascript
// https://stackoverflow.com/questions/37096367/how-to-convert-seconds-to-minutes-and-hours-in-javascript

// let d = 

    function secondsToHms(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);

        var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
        return hDisplay + mDisplay + sDisplay; 
    }

secondsToHms();
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
    // https://www.w3docs.com/snippets/javascript/how-to-get-a-timestamp-in-javascript.html
    console.log('clicked on search bar 2' + e);
    console.log('clicked on search bar 2');

    // Call function, pass in ms time
    console.log(secondsToHms(e));

}, false);
