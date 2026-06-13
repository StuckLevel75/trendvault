let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCartCount();

fetch("products.json")
.then(response => response.json())
.then(products => {

    const container = document.getElementById("products");

    if (!container) return;

    products.forEach(product => {

        container.innerHTML += `
        <div class="card">
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>

            <button onclick="addToCart('${product.name}', ${product.price})">
                Add To Cart
            </button>
        </div>
        `;
    });
});

function addToCart(name, price){

    cart.push({
        name,
        price
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();
}

function updateCartCount(){

    const count = document.getElementById("cartCount");

    if(count){
        count.textContent = cart.length;
    }
}
