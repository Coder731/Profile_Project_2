# Profile_Project_2 / Testing
[Jump back to README testing section](README.md/#testing-md-file-origin-link) <a id="testing-md-file-link"></a>

# Contents <a id="contents-link-contents"></a>
[jump to Main Body](#main-body-link)
## [Bugs](#bugs-link) <a id="bugs-link-contents"></a>
### [Resolved](#resolved-link) <a id="resolved-link-contents"></a>
#### [Linking internally in README and TESTING files [Resolved]](#linking-internally-in-readme-and-testing-files-resolved-link) <a id="linking-internally-in-readme-and-testing-files-resolved-link-contents"></a>
#### [minor debugging Add leading zero to minutes and seconds for single digit quantities [Resolved]](#minor-debugging-add-leading-zero-to-minutes-and-seconds-for-single-digit-quantities-resolved-link) <a id="minor-debugging-add-leading-zero-to-minutes-and-seconds-for-single-digit-quantities-resolved-link-contents"></a>
#### [minor debugging Adding Link to jump between Documents and Sections [Resolved]](#minor-debugging-adding-link-to-jump-between-documents-and-sections-resolved-link) <a id="minor-debugging-adding-link-to-jump-between-documents-and-sections-resolved-link-contents"></a>
### [Unresolved](#unresolved-link) <a id="unresolved-link-contents"></a>
## [Development](#development-link) <a id="development-link-contents"></a>
### [Logging to Console](#logging-to-console-link) <a id="logging-to-console-link-contents"></a>
#### [Logging Time / Date to Console](#logging-time-date-to-console-link) <a id="logging-time-date-to-console-link-contents"></a>
#### [Logging Html code to Console](#logging-html-code-to-console-link) <a id="logging-html-code-to-console-link-contents"></a>
### [Progress](#progress-link) <a id="progress-link-contents"></a>
#### [Phase](#phase-link) <a id="phase-link-contents"></a>
#### [Capabilities at this phase](#capabilities-at-this-phase-link) <a id="capabilities-at-this-phase-link-contents"></a>
## [References](#references-link) <a id="references-link-contents"></a>
### [Logging Time Stamp to Console](#logging-time-stamp-to-console-link) <a id="logging-time-stamp-to-console-link-contents"></a>
#### [getTime Method](#get-time-method-link) <a id="get-time-method-link-contents"></a>
#### [Formatting Time Stamp](#formatting-time-stamp-link) <a id="formatting-time-stamp-link-contents"></a>
### [Logging method to console](#logging-method-to-console-link) <a id="logging-method-to-console-link-contents"></a>


# Main Body <a id="main-body-link"></a>
[jump to Contents](#contents-link-contents)

## [Bugs](#bugs-link-contents)<a id="bugs-link"></a>
### [Resolved](#resolved-link-contents)<a id="resolved-link"></a>
#### [Linking internally in README and TESTING files [Resolved]](#linking-internally-in-readme-and-testing-files-resolved-link-contents)<a id="linking-internally-in-readme-and-testing-files-resolved-link"></a>

- Problem Part 1: How to create internal links from Table of Contents to relevant Headings
- Solution:
  - Step 1: Use references from Portfolio Project 1 for internal linking
Problem Part 2: Link not working when clicked
- Resolution: Change id selector, so that unique from actual heading text, not only in terms of case sensitivity but also with regard to spelling.

#### [minor debugging Add leading zero to minutes and seconds for single digit quantities [Resolved]](#minor-debugging-add-leading-zero-to-minutes-and-seconds-for-single-digit-quantities-resolved-link-contents) <a id="minor-debugging-add-leading-zero-to-minutes-and-seconds-for-single-digit-quantities-resolved-link"></a>

- Problem: Time logging single digit minutes or seconds to console for single digit quantities
- Solution: Add separate inline if statement queries adding leading zero on condition that minutes or seconds, respectively, are single digit quantities.

#### [minor debugging Adding Link to jump between Documents and Sections [Resolved]](#minor-debugging-adding-link-to-jump-between-documents-and-sections-resolved-link-contents) <a id="minor-debugging-adding-link-to-jump-between-documents-and-sections-resolved-link"></a>

- For adding a link to jump between sections and documents, it was necessary to parse out which parts of the code used in the TESTING and README headings were the target (the anchor element) and which were targeting (the round bracket tag with hash prepended after square brackets)
- Also, it was necessary to consistently apply one style of link for linking from Contents to Main Body (by appending "-link-contents" to selector) and to apply a different style of link for linking from Main Body back to Contents (by appending "-link" to selector).
- Where this was not followed there the links did not function until it was corrected.

### [Unresolved](#unresolved-link-contents) <a id="unresolved-link"></a>

#### Reload bug

- Need to reload page to start search string again if make mistake.

#### Issues Resolved

#### Issues Outstanding

- Update TESTING Unresolved headings, links and Contents.

## [Development](#development-link-contents) <a id="development-link"></a>

[jump back to Development Section in README](README.md/#development-link)

### [Logging to Console](#logging-to-console-link-contents) <a id="logging-to-console-link"></a>

#### [Logging Time / Date to Console](#logging-time-date-to-console-link-contents) <a id="logging-time-date-to-console-link"></a>

- Added capability to log date / time stamp(s) to the developer console.

- Removing variable e which logs date stamp as time in milliseconds to console.
- Why?: using methods to extract hours minutes and seconds from Date object instead.

- Removing duplicate string log to console for click event.

#### [Logging Html code to Console](#logging-html-code-to-console-link-contents) <a id="logging-html-code-to-console-link"></a>

- Added log of html element to console
    - Found that logging the result of the "get element by id" method causes the 
      HTML code for the corresponding element to appear in the console.
        - Before this, when trying to combine the above code with a string, an "Empty HTML     
          Object" had been logged to the console with the string.

### [Progress](#progress-link-contents) <a id="progress-link"></a>

#### [Phase](#phase-link-contents) <a id="phase-link"></a>

- add interface with search API and search bar

#### [Capabilities at this phase](#capabilities-at-this-phase-link-contents) <a id="capabilities-at-this-phase-link"></a>

- Utilising:
  - Can log the following to console:
    - key-strokes
    - clicks
    - enter key press (after updating bar content)
    - formatted time in minutes and seconds
- Unused:
  - Can log the following to console:
    - verbatim html code for input element

## [References](#references-link-contents) <a id="references-link"></a>

- Use inline if statement to format display of minutes and seconds as double digits when logging partial time stamp to the developer console.  [Conditional (ternary) Operator](https://stackoverflow.com/questions/10270351/how-to-write-an-inline-if-statement-in-javascript)

- [Object Declaration Syntax and Naming](https://stackoverflow.com/questions/14339555/javascript-declare-variable-inside-object-declaration)

### [Logging Time Stamp to Console](#logging-time-stamp-to-console-link-contents) <a id="logging-time-stamp-to-console-link"></a>

- [How to convert seconds to minutes and hours in javascript](https://stackoverflow.com/questions/37096367/how-to-convert-seconds-to-minutes-and-hours-in-javascript)

- [How to Get a Timestamp in JavaScript](https://www.w3docs.com/snippets/javascript/how-to-get-a-timestamp-in-javascript.html)

#### [getTime Method](#get-time-method-link-contents) <a id="get-time-method-link"></a>

- [JavaScript getTime() Method](https://www.w3schools.com/jsref/jsref_gettime.asp)
- [JavaScript getTime() Method Try It Yourself](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_gettime)

#### [Formatting Time Stamp](#formatting-time-stamp-link-contents) <a id="formatting-time-stamp-link"></a>

- [getMinutes() 0-9 - How to display two digit numbers?](https://stackoverflow.com/questions/8935414/getminutes-0-9-how-to-display-two-digit-numbers)
- [Get current time in Hours24: Minutes: Seconds format in JavaScript](https://www.includehelp.com/code-snippets/get-current-time-in-hours24-minutes-seconds-format-in-javascript.aspx)

### [Logging method to console](#logging-method-to-console-link-contents) <a id="logging-method-to-console-link"></a>

- [Document get Element By Id](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [Check if a get Element By Id is empty](https://stackoverflow.com/questions/43441082/check-if-a-getelementbyid-is-empty)
- [JavaScript Tutorial for Beginners - 26 - get Element By Id method](https://youtu.be/h4-6JOQX9v4?t=325)
- [How to check an object is empty using JavaScript?](https://www.geeksforgeeks.org/how-to-check-an-object-is-empty-using-javascript/)