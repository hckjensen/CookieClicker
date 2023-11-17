const circle = document.getElementById('circle')
const dollars = document.getElementById('dollars')
const balance = document.getElementById('balance')

let count = 0
balance.innerHTML = `$${count}`



//ADD DOLLAR FUNCTION
function addDollar() { 
    count++;
    balance.innerHTML = `$${count}`;
}

//On circle click
circle.addEventListener('click', addDollar) 



//Colorpick
const colorPickItems = document.getElementsByClassName('colorpickItem');
const colorPickArray = Array.from(colorPickItems); // convert NodeList above to array
const newColors = document.getElementById('randomize');

for (const colorPickItem of colorPickItems) {
    colorPickItem.addEventListener('click', () => {
        let newColor = getComputedStyle(colorPickItem).getPropertyValue('background-color');
        circle.style.backgroundColor = newColor
    })
}

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

newColors.addEventListener('click', () => {
    const colorArray = []
    for (const colorPickItem of colorPickItems){
        let newColors = getRandomColor()
        colorArray.push(newColors);
    }
    
    colorPickArray.forEach((colorPickItem, index) => {
        colorPickItem.style.backgroundColor = colorArray[index]
    })
})

