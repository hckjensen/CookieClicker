import { prSec } from "./idle.js";


export let dollarCount = 0;
export let $PrSec = 0;
prSec.innerHTML = `$${$PrSec}/s`


export function addDollar() { 
    
    dollarCount += 10000;
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

}