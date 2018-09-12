let addToWL = id => {
    let a = document.getElementById(id);
    a.className = "fa fa-heart";
}
let items = [
    { name: "Light Blue Jeans", image: "jeans1.jpg", price: 600, quantity: 1 },
    { name: "Black Jeans", image: "jeans2.jpg", price: 450, quantity: 1 },
    { name: "Dark Blue Jeans", image: "jeans3.jpg", price: 500, quantity: 1 },
    { name: "Shirt 1", image: "sh1.jpg", price: 400, quantity: 1 },
    { name: "Shirt 2", image: "sh2.jpg", price: 500, quantity: 1 },
    { name: "Shirt 3", image: "sh3.jpg", price: 550, quantity: 1 },
    { name: "Denim Jacket 1", image: "d3.jpg", price: 550, quantity: 1 },
    { name: "Denim Jacket 2", image: "d2.jpg", price: 500, quantity: 1 },
    { name: "Denim Jacket 3", image: "d1.jpg", price: 700, quantity: 1 },
    { name: "Wedge 1", image: "wed1.jpg", price: 1500, quantity: 1 },
    { name: "Wedge 2", image: "wed2.jpg", price: 1500, quantity: 1 },
    { name: "Wedge 3", image: "wed3.jpg", price: 2000, quantity: 1 },
    { name: "Pumps 1", image: "pum1.jpg", price: 1500, quantity: 1 },
    { name: "Pumps 2", image: "pum2.jpg", price: 1200, quantity: 1 },
    { name: "Pumps 3", image: "pum3.jpg", price: 1500, quantity: 1 },
    { name: "Black Sandals", image: "flat1.jpg", price: 450, quantity: 1 },
    { name: "Pink Stylish Sandals", image: "flat2.jpg", price: 700, quantity: 1 },
    { name: "Plain stylish Sandals", image: "flat3.jpg", price: 500, quantity: 1 },
    { name: "Hand Bag 1", image: "hb1.jpg", price: 1500, quantity: 1 },
    { name: "Hand Bag 2", image: "hb2.jpg", price: 1000, quantity: 1 },
    { name: "Hand Bag 3", image: "hb3.jpg", price: 1200, quantity: 1 },
    { name: "Stole 1", image: "sto1.jpg", price: 550, quantity: 1 },
    { name: "Stole 2", image: "sto2.jpg", price: 300, quantity: 1 },
    { name: "Stole 3", image: "sto3.jpg", price: 350, quantity: 1 },
    { name: "Sunglasses 1", image: "sun1.jpg", price: 1000, quantity: 1 },
    { name: "Sunglasses 2", image: "sun2.jpg", price: 1000, quantity: 1 },
    { name: "Sunglasses 3", image: "sun3.jpg", price: 1000, quantity: 1 },
    { name: "EyeShadow 1", image: "es1.jpg", price: 1000, quantity: 1 },
    { name: "EyeShadow 2", image: "es2.jpg", price: 1000, quantity: 1 },
    { name: "EyeShadow 3", image: "es3.jpg", price: 1000, quantity: 1 },
    { name: "Lip Gloss 1", image: "lg1.jpg", price: 1000, quantity: 1 },
    { name: "Lip Gloss 2", image: "lg2.jpg", price: 1000, quantity: 1 },
    { name: "Lip Gloss 3", image: "lg3.jpg", price: 1000, quantity: 1 },
    { name: "Nail Polish 1", image: "np1.jpg", price: 700, quantity: 1 },
    { name: "Nail Polish 2", image: "np2.jpg", price: 600, quantity: 1 },
    { name: "Nail Polish 3", image: "np3.jpg", price: 600, quantity: 1 },
    { name: "Denim Jacket", image: "sale1.jpg", price: 930,quantity: 1 },
    {name: "Nail Polish", image: "sale2.jpg", price: 300, quantity: 1 },
    {name:"Hand Bag", image:"sale3.jpg",price:300,quantity:1},
]
// let itemsAdded = JSON.parse(localStorage.getItem("cartList")) || [];
let showItemsNum = (totalQuantity) => {
    setTimeout(function(){
        document.getElementById("showItemsNum").innerHTML = totalQuantity

    }, 500)
}
let incrementItem = (index) => {
    let itemsAdded = JSON.parse(localStorage.getItem("cartList")) || [];
    if (itemsAdded) {
        var selectedItem = items[index]
        var itemExists = false;
        var totalQuantity = 0;
        for (var i = 0; i < itemsAdded.length; i++) {
            totalQuantity += itemsAdded[i].quantity;
            if (itemsAdded[i].name == selectedItem.name) {
                itemExists = true;
                itemsAdded[i].quantity++;
                //  break;
            }
        }
        if (!itemExists) {
            totalQuantity++;
            itemsAdded.push(items[index]);
        }
        showItemsNum(totalQuantity);
        localStorage.setItem("cartList", JSON.stringify(itemsAdded));

    }

}
let checkQuantity = () => {
    let itemsAdded = JSON.parse(localStorage.getItem("cartList")) || [];
    var totalQuantity = 0;
    if (itemsAdded) {
        for (var i = 0; i < itemsAdded.length; i++) {
            totalQuantity += itemsAdded[i].quantity;
        }
    }
    showItemsNum(totalQuantity);
}

checkQuantity();