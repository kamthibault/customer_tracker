// Coding Challenge 03a

let customers = [
    {name: "Kam", email: "kameronthibault@usf.edu"},
    {name: "Joe", email: "joemoe@usf.edu"},
    {name: "Sam", email: "SamIAm@usf.edu"},

]
    let Purchase = [
    {purchase:"Shoe",price:6.99,},
    {purchase:"Shirt",price:60.99,},
    {purchase:"Shorts",price:36.99,},
    {purchase:"jacket",price:116.99,},
];
console.log ("Customers:")
customers.forEach (obj => console.log(`${obj.name}\t|\t${obj.email}`)),
console.log ("Purchases:")
Purchase.forEach (obj => console.log(`${obj.purchase}\t|\t${obj.price}`))
customers.push (console.log({name:"jesus",email: "jesuschristmas@usf.edu"}))
customers.shift (console.log)
Purchase.push (console.log({name:"sock",price:30.99}))
Purchase.reduce (console.log)

