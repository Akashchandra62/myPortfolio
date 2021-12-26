//EDUCATION BOX
const arrow = document.getElementsByClassName("click-show");
const to_show = document.getElementsByClassName("edu-details");

Array.from(arrow).forEach((element, index) => {

    element.addEventListener("click", () => {
        if (to_show[index].style.display == "block") {
            arrow[index].classList.add("fa-chevron-down");
            arrow[index].classList.remove("fa-chevron-up");
            to_show[index].style.display = "none";
        }
        else {
            arrow[index].classList.remove("fa-chevron-down");
            arrow[index].classList.add("fa-chevron-up");
            to_show[index].style.display = "block";
        }
    })
})

//PROJECT BOX
const projectBox = document.getElementsByClassName("project-box");
const projectName = document.getElementsByClassName("project-name");
const projectDesc = document.getElementsByClassName("project-desc");

Array.from(projectBox).forEach((element, index)=>{

    element.addEventListener("mouseover", () => {
        projectName[index].style.display = "none";
        projectDesc[index].style.display = "block";
    
    })

})

Array.from(projectBox).forEach((element, index)=>{

    element.addEventListener("mouseout", () => {
        projectName[index].style.display = "block";
        projectDesc[index].style.display = "none";
    
    })

})


//HAMBURGER MENU

const hamburger = document.getElementsByClassName("lines")[0];
const main = document.getElementsByClassName("main")[0];
const navigation = document.getElementsByClassName("navigation")[0];
const navigation_btn = document.getElementsByClassName("navigation-btn");


hamburger.addEventListener("click", ()=>{

    if(navigation.style.display == "block"){
        navigation.style.display = "none";
        navigation.style.width = "0px";
        navigation.style.opacity = "0";
        
    }
    else{
        navigation.style.display = "block";
        navigation.style.width = "80%";
        navigation.style.opacity = "0.95";
    }
})

main.addEventListener("click", ()=>{
    if(navigation.style.display == "block"){
        navigation.style.display = "none"
    }
})

Array.from(navigation_btn).forEach(element => {
    element.addEventListener("click", ()=> {
        if(navigation.style.display == "block"){
            navigation.style.display = "none"
        }
    })
})