let cart = [];

fetch("products.json")
.then(response => response.json())
.then(products => {

    const container = document.getElementById("products");

    products.forEach(product => {

        container.innerHTML += `
        <div class="card">
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart('${product.name}')">
                Add To Cart
            </button>
        </div>
        `;
    });
});

function addToCart(product){

    cart.push(product);

    document.getElementById("cartCount").textContent =
        cart.length;

    alert(product + " added to cart!");
}
