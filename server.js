const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

// app.listen(3000, () => {
//   console.log("Listening on port 3000");
// });

// app.get("/", (req, res) => {
//   res.send("<h1>Hello Express </h1>");
// });

// app.get("/greet/:name", (req, res) => {
//   res.send(`Hello ${req.params.name}`);
// });

// app.get("/hello", (req, res) => {
//   const { name, age } = req.query;

//   res.send(`Hello there, ${name}! I hear you are ${age} years old`);
// });

//1.
app.get("/greetings/:name", (req, res) => {
  res.send(`Hello ${req.params.name}, great to see you again!`);
});

//2.
app.get("/roll/:number", (req, res) => {
  const randomNumber = Math.floor(
    Math.random() * (parseInt(req.params.number) + 1)
  );
  if (isNaN(randomNumber)) {
    return res.send("You must specify a number");
  } else res.send(`You rolled a ${randomNumber}`);
});

//3.

const collectibles = [
  { name: "shiny ball", price: 5.95 },
  { name: "autographed picture of a dog", price: 10 },
  { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
];

app.get("/collectibles/:collectionIndex", (req, res) => {
  if (req.params.collectionIndex < collectibles.length) {
    res.send(
      `So you want the ${collectibles[req.params.collectionIndex].name}? For ${
        collectibles[req.params.collectionIndex].price
      }, it can be yours!`
    );
  } else res.send("This item is not yet in stock. Check back soon!");
});

//4.

const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" },
];

app.get("/shoes", (req, res) => {
  const { minPrice, maxPrice, type } = req.query;

  let shoesFiltered = shoes;
  if (minPrice) {
    shoesFiltered = shoesFiltered.filter(
      (shoe) => shoe.price >= parseInt(minPrice)
    );
  }

  if (maxPrice) {
    shoesFiltered = shoesFiltered.filter(
      (shoe) => shoe.price <= parseInt(maxPrice)
    );
  }

  if (type) {
    shoesFiltered = shoesFiltered.filter((shoe) => shoe.type === type);
  }

  finalData = JSON.stringify(shoesFiltered);
  res.send(`${finalData}`);
});
