const products = {

1:{
    name:"Embossed Brass Bowl",
    sku:"TCL-001",
    image:"brass-bowl.jpeg",
    material:"Solid Brass",
    finish:"Antique Gold",
    dimension:"30 cm",
    description:"Handcrafted embossed brass bowl."
},

2:{
    name:"Brass Candle Holder",
    sku:"TCL-002",
    image:"candle-holder.jpeg",
    material:"Solid Brass",
    finish:"Matte Gold",
    dimension:"25 cm",
    description:"Elegant handcrafted candle holder."
},

3:{
    name:"Decorative Brass Tray",
    sku:"TCL-003",
    image:"brass-tary.jpeg",
    material:"Solid Brass",
    finish:"Antique Gold",
    dimension:"40 cm",
    description:"Beautiful handcrafted brass serving tray."
}

};

// ============================
// ADD THIS BELOW THE OBJECT
// ============================

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const product = products[id];

if(product){

document.getElementById("product-name").textContent = product.name;

document.getElementById("product-image").src = product.image;

document.getElementById("product-description").textContent = product.description;

}