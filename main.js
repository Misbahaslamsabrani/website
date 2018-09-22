let logIn = () => {
    location.href = "login.html";
}
let backpage = () => {
    history.back();
}
let contactbox = () => {
    let a = document.getElementById("cBox");
    a.className = "showEmail";
}

 let showButtons = (num) =>{
    let a = document.getElementById("BOX"+num);
    a.className = "side show";
}
let hideButtons = (num) => {
    let a = document.getElementById("BOX"+num);
    a.className = "hide";
}
let changeBG = (num) =>{
    document.getElementById("AddToCart"+num).className = "addtocartbutton";
}