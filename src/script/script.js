const body = document.querySelector("body");
const icon = document.getElementsByClassName("img-button");
const buttonTheme = document.getElementById("button-change-theme")

buttonTheme.addEventListener("click", ()=>{
    const darkThemeOn = body.classList.contains("dark-mode");
    body.classList.toggle("dark-mode");

    if(darkThemeOn){
        icon.setAttribute("src","./src/images/sun.png");
    }else{
        icon.setAttribute("src","./src/images/moon.png")
    }
});