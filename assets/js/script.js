// See References at end of code for website addresses (to save space in code ) e.g. "// (Reference (1))", in code commments, refers to 1st Reference, given in last comment of this file, at end of code.
// JavaScript getTime() Method (Reference (1))    // JavaScript getTime() Method    // Try It Yourself  (Reference (2))
const API_URL = "https://en.wikipedia.org/w/api.php"; 


// Simple Search in JavaScript [JavaScript Series]  (Reference(7))
    const userInput = document.getElementById('wiki-userinput');

    userInput.addEventListener( 'input', (event) => {    console.log(event); 
        searchString=searchString+event.data;console.log(searchString);    } );
userInput.addEventListener("change", goWiki) 
function goWiki() {    console.log("Enter pressed (after changed input to bar 2)");  params.srsearch=searchString; console.log("params.srsearch: "+params.srsearch); return params.srsearch; }
//The vanilla JS way to listen for click events (Reference(9))
document.addEventListener('click', function (event) {
	if (!event.target.matches('.search-bar')) return;  // If the clicked element doesn't have the right selector, bail
	event.preventDefault();  // Don't follow the link
    // (Reference (10))|log time of click|Get current time in Hours24: Minutes: Seconds format in JavaScript|(Reference(11))|(Reference (12))|Display minutes and seconds as two digits:
        var dt = new Date(); //Date constructor 
        var mm = (dt.getMinutes()<10?'0':'') + dt.getMinutes();  var ss = (dt.getSeconds()<10?'0':'') + dt.getSeconds();
        console.log("Clicked on search bar 2 at " + mm + ":" + ss);  /*log click amd time:*/   }, false);

        // https://stackoverflow.com/questions/21338476/addeventlistener-on-form-submit
        document.getElementById('userinput').addEventListener('submit', function(event){
            event.preventDefault();
            let newSearchSubmitted=""; newSearchSubmitted = document.getElementById('userinput').value;
            console.log(newSearchSubmitted);
            alert(newSearchSubmitted);
        })

        let throughputVariable = document.getElementById("userinput").value;
        console.log(throughputVariable);
        
        // wiki api search part 2:

        var params = {    action: "query",    list: "search",    srsearch: throughputVariable,    format: "json"    };

        url = API_URL + "?origin=*";
        console.log(url);
        params.srsearch=searchString;
        console.log(params.srsearch);
        Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
        fetch(url)  .then(function(response){return response.json();})
            .then(function(response) {if (response.query.search[0].title==="Nelson Mandela"){console.log("Your search page 'Nelson Mandela' exists on English Wikipedia");  }  })
            .catch(function(error){console.log(error);});
            console.log(url);
            let url2= "https://en.wikipedia.org/?curid=<pageId>"
            console.log(url2);
            // https://youtu.be/Dk6Wopar10k?t=4421
            let searchString2=document.getElementById("userinput").value;
            console.log("searchString2: "+searchString2);

            let polygonVariable="https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2020-06-01/2020-06-17?apiKey=7NrgP4WkAHfhk8wvUn3Nrpn7MxaxDl5m"

            // https://github.com/polygon-io/client-js

            // usage
            // Authentication
            // call the desired client with your api key to initialize it

            import { polygonClient, restClient, websocketClient } from "@polygon.io/client-js";
            const rest = restClient("7NrgP4WkAHfhk8wvUn3Nrpn7MxaxDl5m");

            // you can use the api now

            rest.forex
            .previousClose()
            .then(console.log("forex success"))
            .catch(console.log("error"));

            // REST API
            // import all the rest submodule

            import { restClient } from "@polygon.io/client-js";

            const rest = restClient("7NrgP4WkAHfhk8wvUn3Nrpn7MxaxDl5m");

            rest.forex.previousClose().then(console.log("forex success 2"));

            // import a specific submodule

            import { referenceClient } from "@polygon.io/client-js";

            const reference = referenceClient("7NrgP4WkAHfhk8wvUn3Nrpn7MxaxDl5m");

            reference.tickers.then(console.log(referenceClient));



            // https://polygon.io/docs/get_v2_ticks_stocks_nbbo__ticker___date__anchor
            // Step 3 of 4:
            let polyObject = {
                "db_latency": 43,
                "map": {
                 "P": {
                  "name": "ask_price",
                  "type": "float64"
                 },
                 "S": {
                  "name": "ask_size",
                  "type": "int"
                 },
                 "X": {
                  "name": "ask_exchange",
                  "type": "int"
                 },
                 "c": {
                  "name": "conditions",
                  "type": "int"
                 },
                 "f": {
                  "name": "trf_timestamp",
                  "type": "int64"
                 },
                 "i": {
                  "name": "indicators",
                  "type": "int"
                 },
                 "p": {
                  "name": "bid_price",
                  "type": "float64"
                 },
                 "q": {
                  "name": "sequence_number",
                  "type": "int"
                 },
                 "s": {
                  "name": "bid_size",
                  "type": "int"
                 },
                 "t": {
                  "name": "sip_timestamp",
                  "type": "int64"
                 },
                 "x": {
                  "name": "bid_exchange",
                  "type": "int"
                 },
                 "y": {
                  "name": "participant_timestamp",
                  "type": "int64"
                 },
                 "z": {
                  "name": "tape",
                  "type": "int"
                 }
                },
                "results": [
                 {
                  "P": 0,
                  "S": 0,
                  "X": 0,
                  "c": [
                   1
                  ],
                  "p": 102.7,
                  "q": 2060,
                  "s": 60,
                  "t": 1517562000065700400,
                  "x": 11,
                  "y": 1517562000065321200,
                  "z": 3
                 },
                 {
                  "P": 0,
                  "S": 0,
                  "X": 0,
                  "c": [
                   1
                  ],
                  "p": 170,
                  "q": 2061,
                  "s": 2,
                  "t": 1517562000065791500,
                  "x": 11,
                  "y": 1517562000065408300,
                  "z": 3
                 }
                ],
                "results_count": 2,
                "success": true,
                "ticker": "AAPL"
               }

/* References:
1. https://www.w3schools.com/jsref/jsref_gettime.asp
2. https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_gettime
3. https://www.w3docs.com/snippets/javascript/how-to-get-a-timestamp-in-javascript.html
4. https://stackoverflow.com/questions/37096367/how-to-convert-seconds-to-minutes-and-hours-in-javascript
5. 
6. https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_search
7. https://www.youtube.com/watch?v=SWkPXbQXArk&t=1s
8. 
9. https://gomakethings.com/listening-for-click-events-with-vanilla-javascript/#the-vanilla-js-way-to-listen-for-click-events
10. https://www.w3docs.com/snippets/javascript/how-to-get-a-timestamp-in-javascript.html
11. https://www.includehelp.com/code-snippets/get-current-time-in-hours24-minutes-seconds-format-in-javascript.aspx
12. https://stackoverflow.com/questions/8935414/getminutes-0-9-how-to-display-two-digit-numbers
13.
14. 
15.                                          */