import { buyIdleItem, dollarCount} from "./global.js";
import { subtractDollar } from "./global.js";

const container = document.getElementById('idle-container');
const prSec = document.getElementById('pr-second')


const idleArray = []; 
let price = 10

//Create elements and push to array
for(let i = 1; i < 11; i++ ) {
    let newElement = document.createElement('div');
    newElement.innerHTML = 
    `<div class="idle-item">
        <div id="idle${i}" class="idle-name">$${2**i}/s</div>
        <div id="idlePrice${i}" class="idle-price">$${price**i}</div>
        <div id="idleCount${i}" class="idle-count">0</div>
    </div>`
    container.appendChild(newElement);
    idleArray.push(newElement);
    
}

export let $PrSec = 0;
prSec.innerHTML = `$${$PrSec}/s`

// Add buy function to each item
idleArray.forEach((item, i) => {
    const idleCount = document.getElementById(`idleCount${i+1}`);
    const idlePrice = document.getElementById(`idlePrice${i+1}`);
    const idleAmount = document.getElementById(`idle${i+1}`);
    const priceInt = parseInt(idlePrice.textContent.slice(1));
    const AmountInt = parseInt(idleAmount.textContent.slice(1, 3));
    let count = 0
    item.addEventListener('click', () =>{
        if(dollarCount >= priceInt){
            console.log(+idlePrice.textContent.slice(1));
            count++;
            idleCount.innerHTML = `${count}`;
            subtractDollar(priceInt);
            balance.innerHTML = `$${dollarCount}`
            $PrSec += AmountInt;
            prSec.innerHTML = `$${$PrSec}/s`
    }
    } )
})




