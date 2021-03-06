# Profile_Project_2

# Contents <a id="contents-link-contents"></a>
[jump to Main Body](#main-body-link)
## [Overview](#overview-link) <a id="overview-link-contents"></a>
## [Development](#development-link) <a id="development-link-contents"></a>
## [Features](#features-link) <a id="features-link-contents"></a>
## [Design](#design-link) <a id="design-link-contents"></a>
## [Testing](#testing-link) <a id="testing-link-contents"></a>
## [Wireframe](#wireframe-link) <a id="wireframe-link-contents"></a>
## [Unimplemented](#unimplemented-link) <a id="unimplemented-link-contents"></a>
## [References](#references-link) <a id="references-link-contents"></a>
### [Search](#search-link) <a id="search-link-contents"></a>
#### [DOM Event Listener](#dom-event-listener-link) <a id="dom-event-listener-link-contents"></a>
### [Logging Time Stamp to Console](#logging-time-stamp-to-console-link) <a id="logging-time-stamp-to-console-link-contents"></a>
#### [JS Elements and Syntax](#js-elements-and-syntax-link) <a id="js-elements-and-syntax-link-contents"></a>
##### [JS Objects](#js-objects-link) <a id="js-objects-link-contents"></a>
##### [Destructure](#destructure-link) <a id="destructure-link-contents"></a>
### [README](#readme-link) <a id="readme-link-contents"></a>
#### [Internal README links](#internal-readme-links-link) <a id="internal-readme-links-link-contents"></a>
### [Git](#git-link) <a id="git-link-contents"></a>


# Main Body <a id="main-body-link"></a>
[jump to Contents](#contents-link-contents)

## [Overview](#overview-link-contents) <a id="overview-link"></a> 

Plan: To attempt to make a project with:
    - three sections in main:
        -section one
            - a search bar using Wikipedia's search API
        -section two
            - news
                - a news aggregator with rolling queue of information relevant to company searched
        - section three
            - company information
                - delayed updating stock prices
                - market cap for the company at hand
                - other relevant financial data for the company
    - other ideas:
        - section four
            - spreadsheet calculator for doing simple analysis of the company selected.
        - integrate all sections so that once a company is searched, the website updates with all relevant information in all sections at the same time

## [Development](#development-link-contents) <a id="development-link"></a>

- [jump to TESTING.md Development](TESTING.md/#development-link) <a id="development-link-contents"></a>

- Phase Mentor Call 1 Preparation: Add basic website structure.

- Phase Mentor Call 1: Planning

- Phase: add interface with search API and search bar

- Phase: received help from tutor to use listener for enter key press

- Phase: get user input to Html page to display in console

- Phase: Mentor Call 2:
    - Received help:
        - to get JavaScript interfacing with Wikimedia and Polygon APIs.
        - Excess code removed.
        - async await implemented
        - Different parts of code connected
        - retrieval of object converted to json object
        - parsing to extract data from json object
        - always use proper linting for readability

- Phase: Mentor Call 3

- Phase:
    - Add two columns
        - use: [How to create a two column layout using Flexbox in CSS](https://www.amitmerchant.com/how-to-create-two-column-layout-using-flexbox-css/)

- Phase:
    - Reinstate using two separate user input variables
        - One for each search bar
            - From comment in script js: 
                - Reinstating two user input variables: 
                    - two lines (1 comment and 1 code line) reinstated from (lines 94 and 95 of) Commit: c6c5881

- Phase:
    - Tutor helped get results to display
        - Images used in troubleshooting:
            - Picture for communicating start of project: ![Schematic of project](assets/images/schematic_of_project.png)
            - Homepage showing results from old commit c6c5881: ![homepage showing results from old commit c6c5881](assets/images/homepage_showing_results_from_old_commit_c6c5881.png)
            - Overview comparing code to output: ![overview comparing code to output](assets/images/overview_comparing_code_to_output.png)
            - The polygon API was returning results but not the wikimedia API: ![polygon results returning not wikimedia api](assets/images/polygon_results_returning_not_wikimedia_api.png)
            - Returned polygon results highlighted: ![returned polygon results highlighted](assets/images/returned_polygon_results_highlighted.png)
            - Assessing functional blocks of code: ![assessing functional blocks of code](assets/images/assessing_functional_blocks_of_code.png)
            - Html code flex right: ![html code flex right](assets/images/html_code_flex_right.png)
            - Html code flex container: ![html code flex container](assets/images/html_code_flex_container.png)
    - Solution:
        - Unexplainedly, removing a console log of the json method applied to the response object in the fetch function, allowed results to be displayed.
        - Removed then method from fetch function for url
        - wiki Results variable getting the results of the wikimedia API, was set equal to a function called get search results from data which took in an await on another function called get data from wiki, which in turn took in the user inputted search string.
        - the outer most function in the last point above was missing before this change

    - Tutor helped, suggested to format results:
        - using Document Object Model
            - get Element By Id 
                - to get the element with id of polygon result heading
                    - give an element id polygon result heading
                - set text Content to results object, name property
        - use results object items:
            - name 
            - ceo 
            - description 
                and
            - url
                - These four listed items are currently stored in paragraphsin results string variable in script js
        - edit HTML for the Card to contain elements to house the listed items in previous point
        - adjust results function to target elements and pass in results
### Deployment
- Site was deployed to github pages here:
    - [https://coder731.github.io/Profile_Project_2/](https://coder731.github.io/Profile_Project_2/)
## [Features](#features-link-contents) <a id="features-link"></a>
### Responsiveness
- Tested at [Am I Responsive](http://ami.responsivedesign.is/#)
- [Responsiveness Result](assets/images/responsive.png)
### Validation
- HTML
- w3c
    - 5 Warnings (empty headings needed for JS to work) 
        - [W3C](assets/images/w3cvalidator.PNG)

- Two Search bars

- JavaScript
- Site Used: [https://validatejavascript.com/](https://validatejavascript.com/)
    - Result
        - Mostly document not defined
- JS validation result[JS validation result](assets/js/js_validate.png)

- CSS
- site used [Jigsaw W3](http://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2F5504-ivory-frog-jtd88jxu.ws-eu15.gitpod.io%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- Result [CSS Validation](assets/css/css_validation.png)


## [Design](#design-link-contents) <a id="design-link"></a>

- Sourced basic css styling from here:
    - [styling for Portfolio_Project_1](https://github.com/Coder731/Portfolio_Project_1/tree/main/assets/css)

## [Testing](#testing-link-contents) <a id="testing-link"></a>

- [TESTING.md](TESTING.md) <a id="testing-md-file-origin-link"></a>

## [Wireframe](#wireframe-link-contents) <a id="wireframe-link"></a>

-![wireframe homepage](assets/images/homepage_wireframe.png)

## [Unimplemented](#unimplemented-link-contents) <a id="unimplemented-link"></a>

### Small changes
- Add favicon image to tab

### Stretch Objectives
- Retrieve graph of results for historical financial data
- Retrieve current stock price
    - not available from Polygon API without paid plan

    - Use this for multiple APIs so that all results displayed are top 2 from all APIs
    - Use weighted factors given to Relevance and Priority
- Retrieve images
- Employ simple calculations on pages other than home page
- Customise mobile User Experience other than just using media queries for responsive view

- Employ some sort of sorting algorithm taking top 10 search results and displaying only the top 2

- Add other finance APIs

- News Aggregator

## [References](#references-link-contents) <a id="references-link"></a>

### [Search](#search-link-contents) <a id="search-link"></a>

- [Wikipedia MediaWiki JavaScript API](https://www.mediawiki.org/wiki/API:Search#JavaScript)

- [Search Bar](https://www.w3schools.com/howto/howto_css_searchbar.asp)

#### [DOM Event Listener](#dom-event-listener-link-contents) <a id="dom-event-listener-link"></a>

- [HTML DOM addEventListener Method](https://www.w3schools.com/jsref/met_element_addeventlistener.asp)

- [The vanilla JS way to listen for click events](https://gomakethings.com/listening-for-click-events-with-vanilla-javascript/#the-vanilla-js-way-to-listen-for-click-events)

#### [JS Elements and Syntax](#js-elements-and-syntax-link-contents) <a id="js-elements-and-syntax-link"></a>

##### [JS Objects](#js-objects-link-contents) <a id="js-objects-link"></a>

##### [Destructure](#destructure-link-contents) <a id="destructure-link"></a>

- Object destructure [Javascript object destructure with property name in variable](https://stackoverflow.com/questions/64895489/javascript-object-destructure-with-property-name-in-variable)
- Mozilla Destructuring assignment syntax JavaScript to allow object unpacking. [Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

### [README](#readme-link-contents) <a id="readme-link"></a>

#### [Template](#template-link-contents) <a id="template-link"></a>

- [readme-template Testing](https://github.com/Code-Institute-Solutions/readme-template/blob/master/README.md#testing)

#### [Internal README links](#internal-readme-links-link-contents) <a id="internal-readme-links-link"></a>

- [Portfolio Project 1 Internal Link Reference 1](https://github.com/Coder731/Portfolio_Project_1#shorter-name-asterisk-padding-bullet-list-indent-nav-bug-bullet-nav-bug-2-)
- [Portfolio Project 1 Internal Link Reference 2](https://github.com/Coder731/Portfolio_Project_1#fixed_bugs)
- [Portfolio Project 1 Internal Link Reference 3](https://github.com/Coder731/Portfolio_Project_1#fixed-bugs-)
- [Portfolio Project 1 Internal Link Reference 4](https://github.com/Coder731/Portfolio_Project_1#bullet_nav_bug_2)
- Question [How to link to part of the same document in Markdown?](https://stackoverflow.com/questions/2822089/how-to-link-to-part-of-the-same-document-in-markdown)
- Answer [How to link to part of the same document in Markdown?](https://stackoverflow.com/a/6494918)

### [Git](#git-link-contents) <a id="git-link"></a>

- [History or log of commands executed in Git](https://stackoverflow.com/questions/7435452/history-or-log-of-commands-executed-in-git)

- Rules 2 and 6 of 7: Limit the subject line to 50 characters; Wrap the body at 72 characters [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)