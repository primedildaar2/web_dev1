//Defining a function
function myFunction(){
    //Declaring variables in the function and populating variables from user input
    let userInput = document.querySelector("#userInput");
    let message = document.querySelector("#message");

    //The execution of the function
    //The .value property targets the string inside the input tag inside the HTML
    let resultString = userInput.value;
    let restOfString = resultString.slice(1)
        restOfString = restOfString.toLowerCase()
    resultString = resultString.charAt(0).toUpperCase() + restOfString

    
    


    message.innerHTML = resultString;
}