let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name: name, price: price });
    total += price;

    document.getElementById("cart-count").textContent =
        cart.length;

    alert(name + " ice cream added to your cart!");
}

function showCart() {
    if (cart.length === 0) {
        alert("Your cart is empty! 🍦");
        return;
    }

    let message = "Your Ice Cream Cart:\n\n";

    cart.forEach(function(item, index) {
        message += (index + 1) + ". " +
            item.name + " - ₹" + item.price + "\n";
    });

    message += "\nTotal: ₹" + total;

    alert(message);
}