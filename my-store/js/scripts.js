let badge = document.querySelector(".badge");
let count = 0;
let cartItem = [];

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
        addToCart();

    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function addToCart() {
    const buttons = document.querySelectorAll(".add-to-cart");
    buttons.forEach(button => {
      productId = "";
        button.onclick = function() {
            badge.innerHTML = ++count;

            productId = button.getAttribute("data-id");
            console.log(productId)
        };
        
    });
}

fetchProducts();