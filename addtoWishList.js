let addToWL = id => {
    let a = document.getElementById(id);
    a.className = "fa fa-heart";
}
let items = [
    {name:"Light Blue Jeans" , image:"jeans1.jpg", price:600, quantity: 0},
    {name: "Black Jeans", image:"jeans2.jpg",price: 450, quantity: 0},
    {name:"Dark Blue Jeans", image:"jeans3.jpg", price: 500,quantity: 0 },
    {name:"Shirt 1", image:"sh1.jpg", price: 400,quantity: 0 },
    {name:"Shirt 2", image:"sh2.jpg", price:500,quantity: 0 },
    {name:"Shirt 3", image:"sh3.jpg", price:550,quantity: 0 },
    {name:"Denim Jacket 1", image:"d3.jpg", price:550,quantity: 0 },
    {name:"Denim Jacket 2", image:"d2.jpg", price:500,quantity: 0 },
    {name:"Denim Jacket 3", image:"d1.jpg", price:700,quantity: 0 },
    {name: "Wedge 1", image: "wed1.jpg", price: 1500 , quantity: 0},
    {name: "Wedge 2", image: "wed2.jpg", price: 1500, quantity: 0},
    {name: "Wedge 3", image: "wed3.jpg", price: 2000, quantity: 0},
    {name: "Pumps 1", image: "pum1.jpg", price: 1500 , quantity: 0},
    {name: "Pumps 2", image: "pum2.jpg", price: 1200, quantity: 0},
    {name: "Pumps 3", image: "pum3.jpg", price: 1500, quantity: 0},
    {name: "Black Sandals", image: "flat1.jpg", price: 450, quantity: 0},
    {name: "Pink Stylish Sandals", image: "flat2.jpg", price: 700 , quantity: 0},
    {name: "Plain stylish Sandals", image: "flat3.jpg", price: 500, quantity: 0},
    {name: "Hand Bag 1", image: "hb1.jpg", price:1500 , quantity: 0},
    {name: "Hand Bag 2", image: "hb2.jpg", price:1000 , quantity: 0},
    {name: "Hand Bag 3", image: "hb3.jpg", price:1200 , quantity: 0},
    {name: "Stole 1", image: "sto1.jpg", price: 550 , quantity: 0},
    {name: "Stole 2", image: "sto2.jpg", price: 300, quantity: 0},
    {name: "Stole 3", image: "sto3.jpg", price: 350, quantity: 0},
    {name: "Sunglasses 1", image: "sun1.jpg", price: 1000 , quantity: 0},
    {name: "Sunglasses 2", image: "sun2.jpg", price: 1000, quantity: 0},
    {name: "Sunglasses 3", image: "sun3.jpg", price: 1000, quantity: 0},
    {name: "EyeShadow 1", image: "es1.jpg", price: 1000 , quantity: 0},
    {name: "EyeShadow 2", image: "es2.jpg", price: 1000, quantity: 0},
    {name: "EyeShadow 3", image: "es3.jpg", price: 1000, quantity: 0},
    {name: "Lip Gloss 1", image: "lg1.jpg", price: 1000, quantity: 0},
    {name: "Lip Gloss 2", image: "lg2.jpg", price: 1000, quantity: 0},
    {name: "Lip Gloss 3", image: "lg3.jpg", price: 1000, quantity: 0},
    {name: "Nail Polish 1", image: "np1.jpg", price: 700, quantity: 0},
    {name: "Nail Polish 2", image: "np2.jpg", price: 600, quantity: 0},
    {name: "Nail Polish 3", image: "np3.jpg", price: 600, quantity: 0},
]
var itemsAdded = [];
let  incrementItem = (index) => {

    itemsAdded.push(items[index]);
    localStorage.setItem("cartList",JSON.stringify(itemsAdded));

}