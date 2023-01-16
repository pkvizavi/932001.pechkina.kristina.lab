const bg = document.querySelector(".bg");
const animal = document.querySelector("#animal");
const magic = document.querySelector(".magic");
const lamp = document.querySelector(".lamp");
const action =  document.querySelector(".action");
const trapezoid = document.querySelector(".trapezoid");

bg.addEventListener("click", () => {
    bg.classList.add("disappear");
    console.log(bg.classList);
})

magic.addEventListener("click", () =>{
    animal.style.top = "110px";
    if (animal.classList.contains("bunny")){
        setTimeout(() => {animal.classList = "dove"}, 500);
    } else{
        setTimeout(() => {animal.classList = "bunny"}, 500);
    }
    setTimeout(() => {animal.style.top = "0px";}, 500);
})

lamp.addEventListener("click", () =>{
    if (action.style.visibility == "hidden" || action.style.visibility == ""){
        action.style.visibility = "visible";
        trapezoid.style.visibility = "visible";
    } else {
        action.style.visibility = "hidden";
        trapezoid.style.visibility = "hidden";
    }
})