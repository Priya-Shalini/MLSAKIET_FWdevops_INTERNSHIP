//Todo:Make M+ M- and MC functional
let string ="";
let  buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string = eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='C'){
            string = "";
            document.querySelector('input').value=string;
        }
        else{
        console.log(e.target)
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
        }

    })
})
// This snippet of JavaScript code is designed to handle click events for a button, likely as part of a simple calculator application. Let's break it down step by step:

// Event Listener:

// button.addEventListener('click', (e) => { ... }) attaches a click event listener to the button element. When the button is clicked, the function defined within the parentheses will execute.
// Event Object:

// The parameter e represents the event object that is passed to the callback function. This object contains information about the event, such as the target element that triggered the event.
// Equality Check:

// if (e.target.innerHTML == '=') { ... }: This checks if the inner HTML of the clicked button (the text it contains) is equal to =. If it is, the code inside this block will execute.
// Evaluating Expression:

// string = eval(string);: The eval() function takes a string and executes it as JavaScript code. In this case, it evaluates a mathematical expression stored in the variable string. This is often used in calculators to compute results.
// document.querySelector('input').value = string;: After evaluating the expression, it updates the value of an input element (presumably where the calculator displays the current expression or result) with the evaluated result.
// Clearing Input:

// else if (e.target.innerHTML == 'C') { ... }: This checks if the clicked button's inner HTML is equal to 'C', which is typically a common symbol for "clear" in calculators.
// string = "";: This line resets the string variable to an empty string, effectively clearing any current input or expression.
// document.querySelector('input').value = string;: It updates the input element to reflect this cleared state.
// Summary
// The code listens for button clicks. If the button clicked is =, it evaluates the expression in string and displays the result. If the button is C, it clears the input.
// Note on eval()
// While eval() can be convenient, it should be used cautiously due to security risks and potential bugs, especially with untrusted input. It's generally better to implement a safer expression parser for more complex applications.