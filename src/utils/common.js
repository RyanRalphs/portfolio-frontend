import Home from "../Portfolio-Container/Home/Home";
import About from "../Portfolio-Container/About/About";
import CV from "../Portfolio-Container/CV/CV";

export const totalScreens = [
    {
        screen_name: "Home",
        component: Home
    },
    {
        screen_name: "About",
        component: About
    },
    {
        screen_name: "CV",
        component: CV
    }
]

export const getScreenIndex = (screen_name) => {
    if(!screen_name) return -1;
    
    for(let i = 0; i < totalScreens.length; i++) {
        if(totalScreens[i].screen_name === screen_name) return i
    }
        return -1;
    }
