import { $PrSec } from "./idle.js";


export let dollarCount = 0;




export function addDollar() { 
    
    dollarCount += 1;
    balance.innerHTML = `$${dollarCount}`;
}

export function subtractDollar(x) {

    dollarCount -= x;
    
}

export function buyIdleItem() {
    
    if(dollarCount >= priceInt){
        console.log(+idlePrice.textContent.slice(1));
        count++;
        idleCount.innerHTML = `${count}`;
        subtractDollar(priceInt);
        balance.innerHTML = `$${dollarCount}`
        
}
}


function idleAddDollar() {
    dollarCount += $PrSec
    balance.innerHTML = `$${dollarCount}`;
}
setInterval(idleAddDollar, 1000)


