import Home from "../Portfolio-Container/Home/Home";

export const totalScreens = [
    {
        screen_name: "Home",
        component: Home
    }
]

export const getScreenIndex = (screen_name) => {
    if(!screen_name) return -1;
    
    for(let i = 0; i < totalScreens.length; i++) {
        if(totalScreens[i].screen_name === screen_name) return i
    }
        return -1;
    }
