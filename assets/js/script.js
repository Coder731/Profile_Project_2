// JavaScript getTime() Method    // https://www.w3schools.com/jsref/jsref_gettime.asp
// JavaScript getTime() Method    // Try It Yourself    // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_gettime
    function myFunction() {
        var d = new Date();
        var n = d.getTime();
        document.getElementById("demo").innerHTML = n;                                          }
    // https://www.w3docs.com/snippets/javascript/how-to-get-a-timestamp-in-javascript.html
    let e = new Date().getTime()
// Reference Comment:    // How to convert seconds to minutes and hours in javascript    // https://stackoverflow.com/questions/37096367/how-to-convert-seconds-to-minutes-and-hours-in-javascript
    function secondsToHms(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
        var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
        return hDisplay + mDisplay + sDisplay;                                                  }
secondsToHms();
//  Reference:    //  https://www.mediawiki.org/wiki/API:Search#JavaScript
/*  search.js    MediaWiki API Demos    Demo of `Search` module: Search for a text or title    MIT License    */
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
// Reference:    // set a html element equal to something:    // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_search
let str = "Visit W3Schools!"; 
document.getElementById("output").innerHTML = str.search("W3Schools");
// Reference Comment:    // Simple Search in JavaScript [JavaScript Series]    // https://www.youtube.com/watch?v=SWkPXbQXArk&t=1s
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
// Reference Comment:    // Coding Challenge #75: Wikipedia API    // https://www.youtube.com/watch?v=RPz75gcHj18
// Reference Comment:    // The vanilla JS way to listen for click events    // https://gomakethings.com/listening-for-click-events-with-vanilla-javascript/#the-vanilla-js-way-to-listen-for-click-events
document.addEventListener('click', function (event) {
	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('.click-me')) return;
	// Don't follow the link
	event.preventDefault();
    // https://www.w3docs.com/snippets/javascript/how-to-get-a-timestamp-in-javascript.html
    console.log('clicked on search bar 2');
    // log time of click:        // Reference Comment:        // Get current time in Hours24: Minutes: Seconds format in JavaScript        // (edited)        // https://www.includehelp.com/code-snippets/get-current-time-in-hours24-minutes-seconds-format-in-javascript.aspx
        var dt = new Date(); //Date constructor 
        var hh = dt.getHours();
        var mm = dt.getMinutes();
        var ss = dt.getSeconds();
        // log time:
        console.log("Current min:sec stamp is= " + mm + ":" + ss);
}, false);