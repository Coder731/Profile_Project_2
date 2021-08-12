// See References at end of code for website addresses (to save space in code ) e.g. "// (Reference (1))", in code commments, refers to 1st Reference, given in last comment of this file, at end of code.
// JavaScript getTime() Method (Reference (1))    // JavaScript getTime() Method    // Try It Yourself  (Reference (2))
const WIKI_BASE_API_URL = "https://en.wikipedia.org/w/api.php";// Mentor directed this variable name and const declaration rather than var
const POLYGON_BASE_API_URL = "https://api.polygon.io/v1/meta";
const POLYGON_API_KEY = "7NrgP4WkAHfhk8wvUn3Nrpn7MxaxDl5m";

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
            const wikiResults = getSearchResultsFromData(await getDataFromWiki(searchString))
            console.log(wikiResults)
            // pass wikiResults into showWikiResults function:
            showWikiResults(wikiResults);

        }
    });

    // new function with searchQuery passed in:
function getDataFromWiki(searchQuery) {   
    
    // Moved this code block here:

            // Use correct linting:
                    // wiki api search part 2:

            var params = {    
                action: "query",    
                list: "search",    
                srsearch: searchQuery,    
                format: "json"    
            };
    
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
            // The let statement declares a block-scoped local variable:
            let url = WIKI_BASE_API_URL + "?origin=*";


            Object.keys(params).forEach(function(key){
                url += "&" + key + "=" + params[key];
            });

            // Added return to start of fetch method:
            return fetch(url).then(function(response) {
                // For Development: Add log of object:
                // console.log(response.json());
                return response.json()
            })
            // .then(function (response) {
            //     return getSearchResultsFromData(response);//  Added Post Mentor Call 2  // Reference for writing commit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
            // })
            
            .catch(function(error){
                console.log(error);
            });
}
            function getSearchResultsFromData(response) {
                return response.query.search;
            }  
        

            function showWikiResults(results) {

                let resultsStr = "";

                results.map(eachResult => {
                    //use arrow function, reference for information: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
                    // use template literal to build Html code with url, reference for information: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
                    
                    resultsStr += `
                    <div class="result-card">
                    <a target="_blank" href="https://en.wikipedia.org/?curid=${eachResult.pageid}">
                    ${eachResult.title}
                    </a>
                    ${eachResult.snippet}	
                    ${eachResult.timestamp}	
                    ${eachResult.wordcount}
                    </div>
                    `
                });
                document.getElementById("wiki-output").innerHTML = resultsStr;
                console.log(resultsStr);
            }


            // Duplicate code used for Wikimedia API and use as template for Polygon API:

// Revert to two user input variables used before the following comment was added:
    // Instead of creating a new user input variable, reuse the original variable from Wikimedia API for use in Polygon API:

// From comment two lines up, reinstating two user input variables: The following two lines (1 comment and 1 code line) reinstated from (lines 94 and 95 of) Commit: c6c5881
    // Simple Search in JavaScript [JavaScript Series]  (Reference(7))
    const polygonUserInput = document.getElementById('polygon-userinput');// Mentor directed using this id


// Mentor directed to use this code for coding Enter press to trigger Submit button press:
// https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
polygonUserInput.addEventListener("keyup", async function (event) {

    // next code block added as directed by mentor, sourced from https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp

    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
            event.preventDefault();

        // Mentor solved issue of how to take user input directly from input element using HTML DOM Input Text value Property, as described here: https://www.w3schools.com/jsref/prop_text_value.asp
        const searchString=polygonUserInput.value// const, redesign and simplification of code as directed by mentor

        // results with await: if key event is 13, use await to wait for a promise inside the async function above, pass searchString into getDataFromPolygon function, save result in wikiResults
        // Referred to the following document for await usage:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
        const results = await getDataFromPolygon(searchString);
    
        // pass results into showPolygonResults function:
        showPolygonResults(results);

    }
});

// new function with searchQuery passed in:
function getDataFromPolygon(searchQuery) {   

        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
        // The let statement declares a block-scoped local variable.

        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
        // Constants are block-scoped, much like variables declared using the let keyword. The value of a constant can't be changed through reassignment, and it can't be redeclared.

        // url taken from:
        // https://polygon.io/docs/get_v1_meta_symbols__stocksTicker__company_anchor

        // modify url to use any ticker symbol, by passing in searchQuery to supply user inputted ticker symbol using a template literal:
        const poly_url = `${POLYGON_BASE_API_URL}/symbols/${searchQuery}/company?&apiKey=${POLYGON_API_KEY}`



        // Added return to start of fetch method:
        return fetch(poly_url).then(function (response) {
            return response.json();
        }).catch(function(error){
            console.log(error);
        });
}

        function showPolygonResults(results) {
            // use template literal to build Html code with url, reference for information: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

            document.getElementById('polygon-result-name').textContent = results.name
            document.getElementById('polygon-result-ceo').textContent = results.ceo
            document.getElementById('polygon-result-description').textContent = results.description

            let a = document.createElement('a');
            a.setAttribute('href',`${results.url}`);
            a.innerHTML = `${results.url}`;
            // append the anchor to the element you want in the dom
            document.getElementById("polygon-result-url").appendChild(a);

            // document.getElementById('polygon-result-url').innerHTML = `<a href=${results.url}></a>`

            // const resultsStr = `
            //     <div>
            //         <p>Name: ${results.name}</p>
            //         <p>CEO: ${results.ceo}</p>
            //         <p>description: ${results.description}</p>
            //         <p>url: ${results.url}</p>
            //     </div>`;

                // console logging results and results.url
                console.log(results);
                console.log(results.url);

            document.getElementById("polygon-output").innerHTML = resultsStr;
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
10. 
11. 
12. 
13.
14. 
15.                                          */