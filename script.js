const menu = document.getElementsByClassName("menu")[0];

async function fetchDetails(){
    const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
    const result = await response.json();
        getMenu(result);
}
fetchDetails();

function getMenu(data){
    
    for(let i = 0; i < 3; i++){
        let item = data[i];
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
    }
   
    takeOrder(data);
}

function takeOrder(data){
    let order = [];
    for(let i = 0; i < 3; i++){
    for(let item of data){
     if(item.name.includes("burger"))order.push(item);
    }
 }
    const prom = new Promise(resolve =>{
        try{
        setTimeout(()=>{
            resolve(order);
        },2500)
    }
    catch(error){
        console.log(error.message);
    }
    })
    prom.then((order)=>{
        orderPrep(order);
    })
}

function orderPrep(order){
    let obj = {...order,order_status : true,paid : false};
    console.log(obj);
    const prom = new Promise(resolve =>{
        try{
            setTimeout(()=>{
                resolve(order);
            },2500)
        }
        catch(error){
            console.log(error.message);
        }
    })
    prom.then((obj)=>{
        payOrder(obj);
    })
}
function payOrder(obj){
    let newObj = {...obj,order_status : true,paid : true};
    console.log(newObj);
    const prom = new Promise(resolve =>{
        try{
            setTimeout(()=>{
                resolve(newObj);
            },2500)
        }
        catch(error){
            console.log(error.message);
        }
    })
    prom.then((newObj)=>{
        thankyouFnc(newObj);
    })
}

function thankyouFnc(obj){
    if(obj.paid === true) alert("Thankyou for eating with us today!");
}