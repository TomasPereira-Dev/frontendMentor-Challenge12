const themeSwitcher = document.querySelector(".theme-switcher");
const body = document.querySelector("body");
const divs = document.querySelectorAll("div");
const buttons = document.querySelectorAll("button");
const calculator = document.querySelector(".calculator");


themeSwitcher.addEventListener("click", (e) => {
    if(e.target.matches("input")){
        const themeValue = e.target.value;

        if(themeValue === "default-theme"){
            body.dataset.theme = themeValue;
        }

        if(themeValue === "theme-2"){
            body.dataset.theme = themeValue;
        }

        if(themeValue === "theme-3"){
            body.dataset.theme = themeValue;
        }
    }
    
})
