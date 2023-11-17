const container = document.getElementById('idle-container');



const idleArray = []; 


//Create elements + array
for(let i = 1; i < 11; i++ ) {
    let newElement = document.createElement('div');
    newElement.innerHTML = 
    `<div class="idle-item">
        <div id="idle${i}" class="idle-name">Item${i}</div>
        <div class="idle-price">$${10**i}</div>
        <div id="idleCount${i}" class="idle-count">0</div>
    </div>`
    container.appendChild(newElement);
    idleArray.push(newElement);
    idleArray.forEach((item, i) => {
        const idleCount = document.getElementById(`idleCount${i+1}`)
        let count = 0
        item.addEventListener('click', () =>{
            count++;
            idleCount.innerHTML = `${count}`;
        } )
    })
    
}
console.log(idleArray);

//buy function




