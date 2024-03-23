//function to check the input data and return a value
function validateInput(input){
    console.log(input)
    console.log(input.value)  

//The value property returns the value of the value attribute of a text field.

    const checkInput = input.value;
    if (checkInput > 79 && checkInput < 100) {
    console.log("A");
    message.textContent = `Your grade is: A`;
    } else if (checkInput >= 60 && checkInput <= 79) {
    console.log("B");
    message.textContent = `Your grade is: B`;
    } else if (checkInput > 49 && checkInput <= 59) {
    console.log("C");
    message.textContent = `Your grade is: C`;
    } else if (checkInput > 40 && checkInput <= 49) {
    console.log("D");
    message.textContent = `Your grade is: D`;
    } else if (checkInput >= 0 && checkInput <= 40) {
    console.log("E");
    message.textContent = `Your grade is: E`;
    } else {
    console.log("error, marks should be between 0 and 100");
    message.textContent = `Error Detected`;
    }
    

} 
checkInput = 80;
console.log("A");