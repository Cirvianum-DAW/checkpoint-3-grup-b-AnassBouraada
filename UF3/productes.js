const products = [
  { category: "Electrònica", price: 499.99, name: "Telèfon Intel·ligent" },
  { category: "Electrònica", price: 799.99, name: "Portàtil" },
  { category: "Electrònica", price: 299.99, name: "Auriculars sense fils" },
  { category: "Electrònica", price: 199.99, name: "Televisor Intel·ligent" },
  { category: "Electrònica", price: 149.99, name: "Relotge Intel·ligent" },
  { category: "Llar", price: 249.99, name: "Rentadora" },
  { category: "Llar", price: 149.99, name: "Assecadora" },
  { category: "Llar", price: 99.99, name: "Cafetera" },
  { category: "Llar", price: 79.99, name: "Torradora" },
  { category: "Llar", price: 199.99, name: "Aspiradora" },
];

const selector = document.getElementById("product");

products.forEach((producte) => {
  const option = document.createElement("option");
  console.log(option);
  option.textContent = producte.name;
  selector.appendChild(option);
});

selector.addEventListener("change", () => {
  const producte = document.getElementById("product");
  console.log(producte.value);
  const quantitat = document.getElementById("quantity");
  quantitat.value = 1;
  const preu = document.getElementById("price");
  preu.value = products.find((productee) => {
    if (productee.name === producte.value) {
      return producte.price;
    }
  });
});
