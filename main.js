const calculator = document.querySelector(".calculator");
const screenInput = document.querySelector(".screen-input");
const buttonContainer = document.querySelector(".button-container");
const equalBtn = document.querySelector(".equal-btn");

const calculate = (num1, operator, num2) => {
    switch(operator){
        case "add":
            return (parseFloat(num1) + parseFloat(num2));
        case "substract":
            return parseFloat(num1) - parseFloat(num2);
        case "divide":
            return parseFloat(num1) / parseFloat(num2);
        case "multiply":
            return parseFloat(num1) * parseFloat(num2);                   
    }
}

buttonContainer.addEventListener("click", (e) => {
    if(e.target.matches("button")){

        const key = e.target;
        const action = key.dataset.value;
        const previousKeyType = calculator.dataset.previousKeyType;

        if(!action){
            calculator.dataset.previousKeyType = "number";
            if(!screenInput.value || previousKeyType == "operator"){
                screenInput.value = key.textContent;
            }else{
                screenInput.value += key.textContent;
            } 

        }else if(
            action == "add" ||
            action == "substract" ||
            action == "multiply" ||
            action == "divide"
        ){
            calculator.dataset.previousKeyType = "operator";
            calculator.dataset.operator = action;
            calculator.dataset.firstValue = screenInput.value;
            screenInput.value = key.textContent;
        }

        if (action === "decimal" && !screenInput.value.includes(".")){
            calculator.dataset.previousKeyType = "decimal";
            screenInput.value += key.textContent;
        }

        if(action === "decimal" && previousKeyType === "operator"){
            calculator.dataset.previousKeyType = "number";
            screenInput.value = "0.";
        }

        if(action === "delete"){
            calculator.dataset.previousKeyType = "delete";
            const newString = screenInput.value.slice(0, -1);
            screenInput.value = newString;
        }

        if(action === "reset"){
            calculator.dataset.previousKeyType = "reset";
            screenInput.value = " ";
            calculator.dataset.firstValue = " ";
            calculator.dataset.operator = " ";
        }

        if (action === "equal" && calculator.dataset.firstValue !== " "){
            const operator = calculator.dataset.operator;
            const firstValue = calculator.dataset.firstValue;
            const secondValue = screenInput.value;
            if(previousKeyType !== "operator" && secondValue){
                screenInput.value = calculate(firstValue, operator, secondValue);
            }   
        }
    }
})