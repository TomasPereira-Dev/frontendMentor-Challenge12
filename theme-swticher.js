const themeSwitcher = document.querySelector(".theme-switcher");
const body = document.querySelector("body");
const divs = document.querySelectorAll("div");
const buttons = document.querySelectorAll("button");




themeSwitcher.addEventListener("click", (e) => {
    if(e.target.matches === "input"){
        const button = e.target;
        const theme = button.dataset.theme;

        secondThemeBtn.addEventListener("click", () => {

            body.setAttribute("class", "theme-2")
        
            for(let i = 0; i < divs.length; i++){
                divs[i].classList.toggle("theme-2")
            }
        
            for(let j = 0; j < buttons.length; j++){
                buttons[j].classList.toggle("theme-2")
            }
        
            button.dataset.theme = "theme-2";
        
        })
        
        defaultThemeBtn.addEventListener("click", () => {
        
        
            body.classList.toggle("defaultTheme");
        
            for(let i = 0; i < divs.length; i++){
                divs[i].classList.toggle("defaultTheme")
            }
        
            for(let j = 0; j < buttons.length; j++){
                buttons[j].classList.toggle("defaultTheme")
            }
        
            button.dataset.theme = "default";
        })
        
        thirdThemeBtn.addEventListener("click", () => {
        
            body.classList.toggle("theme-3");
        
            for(let i = 0; i < divs.length; i++){
                divs[i].classList.toggle("theme-3")
            }
        
            for(let j = 0; j < buttons.length; j++){
                buttons[j].classList.toggle("theme-3")
            }
        
            button.dataset.theme = "theme-3";
        })
    }
})
