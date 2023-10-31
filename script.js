const deg = 6;
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const setClock = () => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;

};

setClock();
setInterval(setClock, 1000);

const switchTheme = () => {
    const switchBtn = document.querySelector(".switch-btn");
    if (switchBtn.textContent === "Switch To Dark Mode") {
        switchBtn.textContent = "Switch To Light Mode";
        document.documentElement.setAttribute("data-theme", "switch to dark mode");
    }
    else{   
        switchBtn.textContent = "Switch To Dark Mode";
        document.documentElement.removeAttribute("data-theme", "switch to dark mode");
    }   
};

const switchModeBtn = document.querySelector(".switch-btn");
switchModeBtn.addEventListener("click", switchTheme);