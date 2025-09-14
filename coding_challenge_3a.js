// Coding Challenge 03a

let inventory = [
    {sku:"SKU-027", name:"Shoe",price:6.99, stock: 59},
    {sku:"SKU-029", name:"Shirt",price:60.99, stock: 79},
    {sku:"SKU-017", name:"Shorts",price:36.99, stock: 51},
    {sku:"SKU-002", name:"jacket",price:116.99, stock: 20},
];


//Summary of products
//
inventory.forEach(obj => console.log(`${obj.sku}\t|\t${obj.name}`)), inventory.forEach(obj => console.log(`${obj.price}\t|\t${obj.stock}`))


inventory.push (console.log({sku:"SKU-005", name:"beez",price:116.99, stock: 40}))



