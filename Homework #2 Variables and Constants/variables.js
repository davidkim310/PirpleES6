/*
hositing: When variables are declared before assigned or any other code trys to access 
that variable. You have access to the variable before any code is executed, but it is 
not defined yet.

var: 
"var" was the standard way of creating variables in Javascript. Variables are used to 
store properties to a keyword. The keyword "var" is followed by a unique name, then 
followed by an assignment. 

let:
"let" was introduced with ES6. "let" is similar to "var" but has a few differences. 
When using "let", this allows the "let" variable be mutable. We can change and reassign 
the "let" variable as we choose in our code. The differences between "let" and "var" is 
primarily how it is scoped. "let" is function-scoped while "let" is blocked scoped. "var" 
can also be redeclared within the same scope. The introduction of "let" allows us to write 
better code due to it being more strict and requiring us to consider closure.

const:
""const" was introduced with ES6 as well. "const" is also similar to "var" but the key 
difference with "const" is that it is not reassignable. Using "const" instead of "let" clearly
defines the definition of the keyword that follows "const". The variable for that keyword 
is mutable but cannot be reassinged. 

Scenario 1:
const mathEquation = (a, b) => {
    return a + b;
}
let addSum = mathEquation;

Scenario 2:
const mathEquation = (a, b) => {
    return a - b;
}
mathEquation = (a, b) => {
    return a * b;
}

Scenario 3:
const names = ['Adam', 'Brian', 'Charlie'];
names.push('David');

In scenario 1, this is acceptable because we are just referencing the const variable.
However, in scenario 2, this would throw us an error, because we cannot reassign a "const" variable. 
If scenario 2 was instead a "let" variable, it would be allowable. In scenario 3, we are not 
reassigning the variable "names", but we can modify the object.

*/
 