const buttons = document.querySelectorAll("button");
const input = document.querySelector("#number");
const form = document.querySelector("form");
function submitForm(e) {
    e.preventDefault();
}



buttons.forEach(btn => {
    btn.onclick = () => {
        let number = input.value;
        if (number <= parseInt(input.max)) {
            switch (btn.id) {
                case 'sq-btn':
                    for (let i = 0; i < number; i++) {
                        drawShape("square");
                    }
                    break;
                case 'tr-btn':
                    for (let i = 0; i < number; i++) {
                        drawShape("triangle");
                    }
                    break;
                case 'cl-btn':
                    for (let i = 0; i < number; i++) {
                        drawShape("circle");
                    }
                    break;
            }
        }
    }
})


const drawShape = (shapeName) => {
    let shape = document.createElement("div");
    shape.classList.add(shapeName);
    shape.addEventListener("dblclick", () => {
        shape.style.display = "none";
    })
    setRandParams(shape, shapeName);
    document.querySelector("body").appendChild(shape);
}

const setRandParams = (element, name) => {
    element.style.top = Math.floor(Math.random() * (60 - 8 + 1)) + 8 + "%";
    element.style.left = Math.floor(Math.random() * (60 - 0 + 1)) + 0 + "%";
    let size = Math.floor(Math.random() * (300 - 50 + 1)) + 50 + "px";
    if (name == "triangle") {
        element.style.borderWidth = size;
        element.style.borderBottomWidth = size;
    } else {
        element.style.width = size;
        element.style.height = size;
    }
}