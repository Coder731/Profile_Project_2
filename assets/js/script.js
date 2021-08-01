// See References at end of code for website addresses (to save space in code ) e.g. "// (Reference (1))", in code commments, refers to 1st Reference, given in last comment of this file, at end of code.
// JavaScript getTime() Method (Reference (1))    // JavaScript getTime() Method    // Try It Yourself  (Reference (2))
    function myFunction() {
        var d = new Date();
        var n = d.getTime();
        document.getElementById("demo").innerHTML = n;                                          }
    // (Reference (3))
    let e = new Date().getTime()
// How to convert seconds to minutes and hours in javascript  (Reference (4))
    function secondsToHms(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
        var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
        return hDisplay + mDisplay + sDisplay;                                                  }
//  (Reference(5))     /*  search.js    MediaWiki API Demos    Demo of `Search` module: Search for a text or title    MIT License    */
var url = "https://en.wikipedia.org/w/api.php"; 
var params = {
    action: "query",
    list: "search",
    srsearch: "Nelson Mandela",
    format: "json"                              };
url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {if (response.query.search[0].title==="Nelson Mandela"){console.log("Your search page 'Nelson Mandela' exists on English Wikipedia");  }  })
    .catch(function(error){console.log(error);});
// set a html element equal to something:  (Reference(6))
let str = "Visit W3Schools!"; 
document.getElementById("output").innerHTML = str.search("W3Schools");
// Simple Search in JavaScript [JavaScript Series]  (Reference(7))
const searchInput = document.getElementById('search');
searchInput.addEventListener( 'input', (event) => {    console.log(event);    } );
const userInput = document.getElementById('userinput');
userInput.addEventListener("change", goWiki) 
function goWiki() {
                    console.log(userInput);
                    console.log("TESTING");    }
// Coding Challenge #75: Wikipedia API  (Reference(8))           //The vanilla JS way to listen for click events (Reference(9))
document.addEventListener('click', function (event) {
	if (!event.target.matches('.click-me')) return;  // If the clicked element doesn't have the right selector, bail
	event.preventDefault();  // Don't follow the link
    // (Reference (10))
    console.log('clicked on search bar 2');
    // log time of click:        // Get current time in Hours24: Minutes: Seconds format in JavaScript        // (edited)  (Reference(11))
        var dt = new Date(); //Date constructor 
        var hh = dt.getHours();
        var mm = dt.getMinutes();
        var ss = dt.getSeconds();
        console.log("Current min:sec stamp is= " + mm + ":" + ss);  /*log time:*/   }, false);
/* References:
1. https://www.w3schools.com/jsref/jsref_gettime.asp
2. https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_gettime
3. https://www.w3docs.com/snippets/javascript/how-to-get-a-timestamp-in-javascript.html
4. https://stackoverflow.com/questions/37096367/how-to-convert-seconds-to-minutes-and-hours-in-javascript
5. https://www.mediawiki.org/wiki/API:Search#JavaScript
6. https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_search
7. https://www.youtube.com/watch?v=SWkPXbQXArk&t=1s
8. https://www.youtube.com/watch?v=RPz75gcHj18
9. https://gomakethings.com/listening-for-click-events-with-vanilla-javascript/#the-vanilla-js-way-to-listen-for-click-events
10. https://www.w3docs.com/snippets/javascript/how-to-get-a-timestamp-in-javascript.html
11. https://www.includehelp.com/code-snippets/get-current-time-in-hours24-minutes-seconds-format-in-javascript.aspx
12. 
13.
14. 
15.                                          */