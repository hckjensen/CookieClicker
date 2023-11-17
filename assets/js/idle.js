const container = document.getElementById('idle-container');
import { dollarCount } from "./global.js";


const idleArray = []; 
let price = 10

//Create elements + array
for(let i = 1; i < 11; i++ ) {
    let newElement = document.createElement('div');
    newElement.innerHTML = 
    `<div class="idle-item">
        <div id="idle${i}" class="idle-name">Item${i}</div>
        <div id="idlePrice${i}" class="idle-price">$${price**i}</div>
        <div id="idleCount${i}" class="idle-count">0</div>
    </div>`
    container.appendChild(newElement);
    idleArray.push(newElement);
    idleArray.forEach((item, i) => {
        const idleCount = document.getElementById(`idleCount${i+1}`)
        const idlePrice = document.getElementById(`idlePrice${i+1}`)
        const priceInt = parseInt(idlePrice.textContent.slice(1))
        let count = 0
        item.addEventListener('click', () =>{
            if(dollarCount >= priceInt){
                console.log(+idlePrice.textContent.slice(1));
                count++;
                idleCount.innerHTML = `${count}`;
        }
        } )
    })
    
}




