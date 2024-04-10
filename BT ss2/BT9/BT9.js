function totalPrice1(carts) {
    let total = 0;
    carts.forEach(item => total += item.price * item.quantity);
    return console.log(total);
}

function totalPrice2(carts){
    return console.log(carts.reduce((acc, cur) =>{
        return acc + cur.price * cur.quantity;
    }, 0));
}

const carts = [
    {
      product_name: "Cam",
      price: 20000,
      quantity: 5,
    },
    {
      product_name: "Táo",
      price: 30000,
      quantity: 3,
    },
    {
      product_name: "Xoài",
      price: 40000,
      quantity: 2,
    },
  ];
totalPrice1(carts);
totalPrice2(carts)