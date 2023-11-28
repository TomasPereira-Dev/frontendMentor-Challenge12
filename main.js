const input = document.querySelector(".screen-input");
const buttonContainer = document.querySelector(".button-container")
const equalBtn = document.querySelector(".equal-btn")

buttonContainer.addEventListener("click", (e) => {
    const key = e.target;
    const action = key.dataset.value;
    if (e.target.matches("button")){
        console.log(action)
    }
    
    if(!action){
        console.log("it's a number key")
    }else if(
        action === "add" ||
        action === "substract" ||
        action === "multiply" ||
        action === "divide"
    ){
        console.log("it's a operand key!")
    }
})