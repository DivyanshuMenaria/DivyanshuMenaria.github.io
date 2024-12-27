
let cartItems;
onload();
function onload() {
    let cartItemsStr = localStorage.getItem('cartItems');
    cartItems = cartItemsStr ? JSON.parse(cartItemsStr) : [];
    slidesshow();
    displayProductOnHomePage();
    displayBagIcon();
}
function slidesshow() {
    let slideIndex = 0;
showslides();
function showslides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showslides, 5000); // Change image every 2 seconds
}
}
//     function showSlides(n) {
//       let i;
//       let slides = document.getElementsByClassName("mySlides");
//       let dots = document.getElementsByClassName("dot");
//       if (n > slides.length) {slideIndex = 1}
//       if (n < 1) {slideIndex = slides.length}
//       for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//       }
//       for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//       }
//       slides[slideIndex-1].style.display = "block";
//       dots[slideIndex-1].className += " active";
//     }

function addToCart(productId) {
    cartItems.push(productId);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayBagIcon();
}

function displayBagIcon() {
    let cartItemCountElement = document.querySelector('.cart-item-count');
    if (cartItems.length > 0) {
        cartItemCountElement.style.visibility = "visible";
        cartItemCountElement.innerHTML = cartItems.length;
    } else {
        cartItemCountElement.style.visibility = "hidden";
    }
}

function displayProductOnHomePage() {
    let productContainerElement = document.querySelector('.products-container');
    if (!productContainerElement) {
        return;
    }
    let innerhtml = '';
    products.some(product => {
        innerhtml += `
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
        productContainerElement.innerHTML = innerhtml;
        return productContainerElement.childElementCount === 5;
    });
    let productContainerElementf = document.querySelector('.products-containerf');
    if (!productContainerElementf) {
        return;
    }
    let innerhtmlf = '';
    products.some(product => {
        if(product.category==='fruits'){
        innerhtmlf += `
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
        productContainerElementf.innerHTML = innerhtmlf;
        return productContainerElementf.childElementCount === 5;
        }
    });
    let productContainerElementg = document.querySelector('.products-containerg');
    if (!productContainerElementg) {
        return;
    }
    let innerhtmlg = '';
    products.some(product => {
        if(product.category==='grains'){
        innerhtmlg += `
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
        productContainerElementg.innerHTML = innerhtmlg;
        return productContainerElementg.childElementCount === 5;
        }
    });
    let productContainerElementv = document.querySelector('.products-containerv');
    if (!productContainerElementv) {
        return;
    }
    let innerhtmlv = '';
    products.some(product => {
        if(product.category==='vegetables'){
        innerhtmlv += `
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
        productContainerElementv.innerHTML = innerhtmlv;
        return productContainerElementv.childElementCount === 5;
        }
    });
}


