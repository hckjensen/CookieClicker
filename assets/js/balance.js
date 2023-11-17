const circle = document.getElementById('circle')
const dollars = document.getElementById('dollars')
const balance = document.getElementById('balance')






//ADD DOLLAR FUNCTION
let dollarCount = 0
function addDollar() { 
    
    dollarCount++;
    balance.innerHTML = `$${dollarCount}`;
}

//On circle click
circle.addEventListener('click', addDollar) 








