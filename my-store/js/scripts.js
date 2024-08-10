let badge = document.querySelector(".badge");
let count = 0;
let cartItems = [];

// Get Api 
async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products"); 
        const data = await response.json(); 
        let allItem = "";
        data.forEach((element) => {
            allItem += `
                <div class="col mb-5">
                    <div class="card h-100">
                        <img class="card-img-top" src="${element.image}" alt="..." />
                        <div class="card-body p-4">
                            <div class="text-center">
                                <h5 class="fw-bolder">${element.title}</h5>
                                <span class="price">$${element.price}</span>
                            </div>
                        </div>
                        <!-- Product actions-->
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center">
                                <button class="btn btn-outline-dark mt-auto add-to-cart" data-id="${element.id}">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        document.querySelector(".productAll").innerHTML = allItem;
        addToCart(data);

    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function addToCart(products) {
    const buttons = document.querySelectorAll(".add-to-cart");
    buttons.forEach(button => {
        button.onclick = function() {
            let productId = Number(button.getAttribute("data-id"));
            const product = products.find(p => p.id === productId);

            if (product) {
                cartItems.push(product);
                count++;
                badge.textContent = count;
                updateCartUI();
            }
        }; 
    });
}

function updateCartUI() {
    const cartItem = document.querySelector(".cart-items");
    cartItem.innerHTML = "";

    let cartItemHTML = "";
    let totPrice = 0;
    cartItems.forEach((element) => {
        cartItemHTML += `
            <div class="cart-item d-flex justify-content-between align-items-center border-bottom py-2">
                <div class="d-flex gap-2">
                    <img class="card-img-top" src="${element.image}" alt="..." />
                    <div>
                        <p class="fw-bolder m-0">${element.title}</p>
                    </div>
                </div>
                <span class="price">$${element.price}</span>
            </div>
        `;
        totPrice += element.price;
    });

    cartItem.innerHTML = cartItemHTML;
    document.querySelector(".total").textContent = `$${totPrice}`
}


fetchProducts();
