const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

function getCandy(candyStore, id) {
  for (let i = 0; i < candyStore.candies.length; i++) {
    if (candyStore.candies[i].id === id) {
      return candyStore.candies[i];
    }
  }
  // return candyStore.candies.find((x) => x.id === id) || "cannot find";
}

function getPrice(candyStore, id) {
  return getCandy(candyStore, id).price;
}
console.log(getPrice(candyStore, "as12f"));

function addCandy(candyStore, id, name, price) {
  const candy = getCandy(candyStore, id);
  if (candy) {
    candy.amount++;
  } else {
    candyStore.candies.push({
      name: name,
      id: id,
      price: price,
      amount: 1,
    });
  }
}

function buy(candyStore, id) {
  var candy = getCandy(candyStore, id);
  if (candy.amount > 0) {
    candyStore.cashRegister += candy.price;
    candy.amount--;
  }
}
