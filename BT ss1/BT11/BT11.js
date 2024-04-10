let carts = [
  {
    id: Math.floor(Math.random() * 1000000000),
    name: "IP5",
    price: 1000000,
    quantity: 5,
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    name: "IP6",
    price: 2000000,
    quantity: 5,
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    name: "IPX",
    price: 1500000,
    quantity: 5,
  },
];
renderCarts(carts);
total(carts);

function renderCarts(carts) {
  const tbody = document.getElementById("tbody");
  let text = ``;
  carts.forEach((element) => {
    text += `<tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.price}</td>
        <td>${element.quantity}</td>
        <td><button onclick="edit(${(element.id, carts)})">Edit</button>
        <button onclick="${(element.id, carts)}">Delete</button></td>
    </tr>`;
  });
  tbody.innerHTML = text;
}

function total(carts) {
  const tfoot = document.getElementById("tfoot");
  let totalPrice = carts.reduce((acc, val) => {
    return acc + val.price * val.quantity;
  }, 0);
  tfoot.innerHTML = `<tr>
    <td colspan="5">Total price: ${totalPrice}</td>
</tr>`;
}

function edit(id, carts) {
  let foundCart = carts.find((i) => {
    if (id === i.id) {
      return carts[i];
    }
  });
  if (foundCart.length === 0) {
    return;
  }
  let carts;
}
