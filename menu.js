const menu = document.getElementsByClassName("menu")[0];

function getMenu(data){
    data.forEach(item =>{
        const card = document.createElement("div");
        card.className = "menu-card";
        card.innerHTML = `<img src=${item.imgSrc} alt = "food">
        <span>${item.name}</span>
        <span>$${item.price}/-</span>
        `
        menu.appendChild(card);
    })
}

async function fecthDetails(){
    const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');

    const result = await response.json();
        getMenu(result)
}
fecthDetails();