
let cartItems;
onload();
function onload(){
    let cartItemsStr = localStorage.getItem('cartItems');
    cartItems = cartItemsStr ? JSON.parse(cartItemsStr) : [];
    displayProductOnHomePage();
    displayBagIcon();
}
function addToCart(productId){
    cartItems.push(productId);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayBagIcon();
}

function displayBagIcon(){
    let cartItemCountElement = document.querySelector('.cart-item-count');
    if(cartItems.length > 0){
        cartItemCountElement.style.visibility="visible";
        cartItemCountElement.innerHTML = cartItems.length;
    }else{
        cartItemCountElement.style.visibility="hidden";
    }
}

function displayProductOnHomePage() {
    let productContainerElement = document.querySelector('.products-container');
    if(!productContainerElement){
        return;
    }
    let innerhtml = '';
    products.some(product => {
        innerhtml+= `
                        <div class="product-container">
                            <img class="product-image" src="${product.product_image}" alt="image">
                            <div class="net-wt">${product.product_wt} gm</div>
                            <div class="product-name">${product.product_name}</div>
                            <div class="price">
                                <span class="current-price">Rs ${product.current_price}</span>
                                <span class="original-price">Rs ${product.original_price}</span>
                                <span class="discount">(${product.discount}% OFF)</span>
                            </div>
                            <button class="btn-add-bag" onclick="addToCart(${product.id})">Buy</button>
                        </div>
                    `
                                  productContainerElement.innerHTML= innerhtml;
    });
}


