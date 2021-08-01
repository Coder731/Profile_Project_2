function myFunction() {
    var d = new Date();        var n = d.getTime();        document.getElementById("demo").innerHTML = n;    }
let e = new Date().getTime()
function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);        var m = Math.floor(d % 3600 / 60);        var s = Math.floor(d % 3600 % 60);
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : ""; var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : ""; var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;                                                  }
var url = "https://en.wikipedia.org/w/api.php"; 
var params = {    action: "query",    list: "search",    srsearch: "Nelson Mandela",    format: "json"                              };
url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
fetch(url)
.then(function(response){return response.json();})
.then(function(response) {if (response.query.search[0].title==="Nelson Mandela"){console.log("Your search page 'Nelson Mandela' exists on English Wikipedia");  }  })
.catch(function(error){console.log(error);});
let str = "Visit  W3Schools!"; 
document.getElementById("output").innerHTML = str.search("W3Schools");
const searchInput = document.getElementById('search');
searchInput.addEventListener( 'input', (event) => {    console.log(event);    } );
const userInput = document.getElementById('userinput');
userInput.addEventListener("change", goWiki) 
function goWiki() {
    console.log(userInput);
    console.log("Enter pressed (after changed input to bar 2)");    }
document.addEventListener('click', function (event) {
if (!event.target.matches('.click-me')) return;
event.preventDefault();
    var dt = new Date(); 
    var mm = (dt.getMinutes()<10?'0':'') + dt.getMinutes();        var ss = (dt.getSeconds()<10?'0':'') + dt.getSeconds();
    console.log("Clicked on search bar 2 at " + mm + ":" + ss);   }, false);