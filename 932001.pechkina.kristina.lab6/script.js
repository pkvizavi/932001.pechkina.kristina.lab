const buttons = document.querySelectorAll("button");

const lImg = document.querySelector("#left-img");
const rImg = document.querySelector("#right-img");

buttons.forEach(btn => {
    btn.onclick = () => {
        switch (btn.id) {
            case 'left-btn':
                lImg.style.width = '95%';
                rImg.style.width = '5%';
                lImg.querySelector("img").style.display = 'block';
                rImg.querySelector("img").style.display = 'none';
                break;
            case 'center-btn':
                lImg.style.width = '50%';
                rImg.style.width = '50%';
                lImg.querySelector("img").style.display = 'block';
                rImg.querySelector("img").style.display = 'block';
                break;
            case 'right-btn':
                lImg.style.width = '5%';
                rImg.style.width = '95%';
                lImg.querySelector("img").style.display = 'none';
                rImg.querySelector("img").style.display = 'block';
                break;
        }
    }
})