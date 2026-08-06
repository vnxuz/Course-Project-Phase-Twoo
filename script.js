let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

function loadCart() {
  let cartDiv = document.getElementById("cart-items");
  let total = 0;

  cartDiv.innerHTML = "";

  cart.forEach(item => {
    cartDiv.innerHTML += `<p>${item.name} - $${item.price}</p>`;
    total += item.price;
  });

  document.getElementById("total").innerText = "Total: $" + total.toFixed(2);
}

function checkout() {
  alert("Checkout complete!");
  cart = [];
  localStorage.removeItem("cart");
  location.reload();
}

if (document.getElementById("cart-items")) {
  loadCart();
}

