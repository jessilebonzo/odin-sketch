const container = document.querySelector('.container')
const btnBlack = document.createElement('button')
const btnRgb = document.createElement('button')
const btnGray = document.createElement('button')
const btnSize = document.createElement('button')
const section = document.querySelector('.section');
const buttonsContainer = document.querySelector('.buttons');

window.onload = () => {
    const box = container.querySelectorAll('.box')
    box.forEach(box => box.addEventListener('mouseover', () => {
        box.style.background = 'black'
    }))
}


function createdDev(col , rows) {
    for(let i = 0;i < (col * rows); i++) {
        const div = document.createElement('div') 
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box')
    }
}
createdDev(16,16)

function grayColor() { 
    
    const box = container.querySelectorAll('.box')
    btnGray.textContent = "GRAY"
    btnGray.addEventListener('click', () => {
        box.forEach(box => box.addEventListener('mouseover', ()=> {
            let RNum = Math.floor(Math.random() * 256);
            let GrayScale = `rgb(${RNum},${RNum},${RNum})`
            box.style.background = GrayScale;
        }))
    })
    buttonsContainer.appendChild(btnGray).classList.add('btn')
}
grayColor()


function rgbColors() {
    
    const box = container.querySelectorAll('.box')
    btnRgb.textContent = "RGB"
    btnRgb.addEventListener('click' ,() => {
        box.forEach(box => box.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 256);
            let G = Math.floor(Math.random() * 256);
            let B = Math.floor(Math.random() * 256);
            const RGB = `rgb(${R},${G},${B})`;
            box.style.background = RGB;
        }))
    })
    buttonsContainer.appendChild(btnRgb).classList.add('btn')
}
rgbColors()

function blackColor() {
   
    const box = container.querySelectorAll('.box')
    btnBlack.textContent = 'BLACK';
    btnBlack.addEventListener('click', function () {
        box.forEach(box => box.addEventListener('mouseover', function() {
            this.style.background = 'black'
        }))
    })
    buttonsContainer.appendChild(btnBlack).classList.add('btn')
}
blackColor() 

function reSet() {
    const box = container.querySelectorAll('.box')
    box.forEach(box => {
        box.remove();
    })
}


function reSize() {
   
    btnSize.textContent = 'GRID SIZE'
    btnSize.addEventListener('click', () => {
        let user = prompt('Input grid size?')
        if(user === null || user < 1){
            reSet();
            createdDev(16,16);
            grayColor();
            rgbColors();
            blackColor();
        } else { 
            reSet();
            createdDev(user,user);
            grayColor();
            rgbColors();
            blackColor();
        }
    })
    buttonsContainer.appendChild(btnSize).classList.add('btn')
}
reSize()

function backgroundAnim() {

    colors = ['red','green','blue', 'yellow'];
    const section = document.querySelector('.section');
    const span = document.createElement('span');

    let size = Math.random() * 50;

    span.style.width = 10 + size + 'px';
    span.style.height = 10 + size + 'px';
    span.style.borderRadius = `${size}%`;
    span.style.top = Math.random() * innerHeight + "px";
    span.style.left = Math.random() * innerWidth + "px";

    const bg = colors[Math.floor(Math.random() * colors.length)];
    span.style.background = bg;

    section.appendChild(span);

    setTimeout(() => {span.remove()},5000)
}

setInterval(backgroundAnim, 150);