# Profile_Project_2 / Testing

# Contents
## Logging to Console
### Logging Time / Date to Console
### Logging Html code to Console
## References
### Logging Time Stamp to Console
#### getTime Method
#### Formatting Time Stamp
### Logging method to console

# Main Body
## Logging to Console

### Logging Time / Date to Console

- Added capability to log date / time stamp(s) to the developer console.

- Removing variable e which logs date stamp as time in milliseconds to console.
- Why?: using methods to extract hours minutes and seconds from Date object instead.

- Removing duplicate string log to console for click event.

### Logging html code to Console
- Added log of html element to console
    - Found that logging the result of the "get element by id" method causes the 
      HTML code for the corresponding element to appear in the console.
        - Before this, when trying to combine the above code with a string, an "Empty HTML     
          Object" had been logged to the console with the string.

## References

- Use inline if statement to format display of minutes and seconds as double digits when logging partial time stamp to the developer console.  [Conditional (ternary) Operator](https://stackoverflow.com/questions/10270351/how-to-write-an-inline-if-statement-in-javascript)

- [Object Declaration Syntax and Naming](https://stackoverflow.com/questions/14339555/javascript-declare-variable-inside-object-declaration)

### Logging Time Stamp to Console

- [How to convert seconds to minutes and hours in javascript](https://stackoverflow.com/questions/37096367/how-to-convert-seconds-to-minutes-and-hours-in-javascript)

- [How to Get a Timestamp in JavaScript](https://www.w3docs.com/snippets/javascript/how-to-get-a-timestamp-in-javascript.html)

#### getTime Method
- [JavaScript getTime() Method](https://www.w3schools.com/jsref/jsref_gettime.asp)
- [JavaScript getTime() Method Try It Yourself](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_gettime)

#### Formatting Time Stamp
- [getMinutes() 0-9 - How to display two digit numbers?](https://stackoverflow.com/questions/8935414/getminutes-0-9-how-to-display-two-digit-numbers)
- [Get current time in Hours24: Minutes: Seconds format in JavaScript](https://www.includehelp.com/code-snippets/get-current-time-in-hours24-minutes-seconds-format-in-javascript.aspx)

### Logging method to console

- [Document get Element By Id](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [Check if a get Element By Id is empty](https://stackoverflow.com/questions/43441082/check-if-a-getelementbyid-is-empty)
- [JavaScript Tutorial for Beginners - 26 - get Element By Id method](https://youtu.be/h4-6JOQX9v4?t=325)
- [How to check an object is empty using JavaScript?](https://www.geeksforgeeks.org/how-to-check-an-object-is-empty-using-javascript/)