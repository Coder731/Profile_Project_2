// See References at end of code for website addresses (to save space in code ) e.g. "// (Reference (1))", in code commments, refers to 1st Reference, given in last comment of this file, at end of code.
// JavaScript getTime() Method (Reference (1))    // JavaScript getTime() Method    // Try It Yourself  (Reference (2))
const API_URL = "https://en.wikipedia.org/w/api.php";// Mentor directed this variable name and const declaration rather than var


// Simple Search in JavaScript [JavaScript Series]  (Reference(7))
    const userInput = document.getElementById('wiki-userinput');// Mentor directed using this id

    // Mentor directed to use this code for coding Enter press to trigger Submit button press:
    // https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
    userInput.addEventListener("keyup", async function (event) {

        // next code block added as directed by mentor, sourced from https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp

        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
                event.preventDefault();

            // Mentor solved issue of how to take user input directly from input element using HTML DOM Input Text value Property, as described here: https://www.w3schools.com/jsref/prop_text_value.asp
            const searchString=userInput.value// const, redesign and simplification of code as directed by mentor

            // From Mentor Call: wikiResults with await: if key event is 13, use await to wait for a promise inside the async function above, pass searchString into getDataFromWiki function, save result in wikiResults
            // Referred to the following document for await usage:
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
            const wikiResults = await getDataFromWiki(searchString);
        
            // pass wikiResults into showWikiResults function:
            showWikiResults(wikiResults);

        }// closing curly bracket for if statement
    });// closing curly bracket for async function and closing parenthesis for listener

    // Post Mentor Call 2: new function with searchQuery passed in:
function getDataFromWiki(searchQuery) {   
    
    // Post Mentor Call 2: Moved this code block here:

            // Post Mentor Call 2: Use correct linting:
                    // wiki api search part 2:

            var params = {    
                action: "query",    
                list: "search",    
                srsearch: searchQuery,    
                format: "json"    
            };
    
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
            // The let statement declares a block-scoped local variable:
            let url = API_URL + "?origin=*";


            Object.keys(params).forEach(function(key){
                url += "&" + key + "=" + params[key];
            });
            fetch(url).then(function(response) {
                return response.json();
            })
            .then(function (response) {
                if (response.query.search[0].title==="Nelson Mandela") {console.log("Your search page 'Nelson Mandela' exists on English Wikipedia");  }  })
                .catch(function(error){console.log(error);});
                console.log(url);
                let url2= "https://en.wikipedia.org/?curid=<pageId>"
                console.log(url2);
                // https://youtu.be/Dk6Wopar10k?t=4421
                let searchString2=document.getElementById("userinput").value;
                console.log("searchString2: "+searchString2);

    params.srsearch=searchString; 
    console.log("params.srsearch: "+params.srsearch); 
    return params.srsearch; }
//The vanilla JS way to listen for click events (Reference(9))
document.addEventListener('click', function (event) {
	if (!event.target.matches('.search-bar')) return;  // If the clicked element doesn't have the right selector, bail
	event.preventDefault();  // Don't follow the link


        // https://stackoverflow.com/questions/21338476/addeventlistener-on-form-submit
        document.getElementById('userinput').addEventListener('submit', function(event){
            event.preventDefault();
            let newSearchSubmitted=""; newSearchSubmitted = document.getElementById('userinput').value;
            console.log(newSearchSubmitted);
            alert(newSearchSubmitted);
        })

        let throughputVariable = document.getElementById("userinput").value;
        console.log(throughputVariable);
        





}, false)// Brackets and Boolean added to close out listener

            let polygonVariable="https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2020-06-01/2020-06-17?apiKey=7NrgP4WkAHfhk8wvUn3Nrpn7MxaxDl5m"

            // https://github.com/polygon-io/client-js

            // usage
            // Authentication
            // call the desired client with your api key to initialize it

            const rest = restClient("7NrgP4WkAHfhk8wvUn3Nrpn7MxaxDl5m");

            // https://polygon.io/docs/get_v2_ticks_stocks_nbbo__ticker___date__anchor
            // Step 3 of 4:

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
10. 
11. 
12. 
13.
14. 
15.                                          */