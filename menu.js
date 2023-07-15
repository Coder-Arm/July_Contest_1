const menu = document.getElementsByClassName("menu")[0];

function getMenu(data){
    data.forEach(item =>{
        const card = document.createElement("div");
        card.className = "menu-card";
        card.innerHTML = `<img src=${item.imgSrc} alt = "food">
        <div class = "about-item">
        <div>
        <div>${item.name}</div>
        <div>$${item.price}/-</div>
         </div>
        <img src = "./assets/Group 4.png" width="25" height="25" alt="add">
        </div>
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