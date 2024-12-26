let CartItemObjects;
let containerElement;
Onload();

function Onload(){
    loadCartItemObjects();
    displayCartItems();
    displayCartSummary();
    displayBagIcon();
}
function displayCartSummary(){
    let cartSummaryElement = document.querySelector('.summary');
    let totalItems = CartItemObjects.length;
    let totalMrp = 0;
    let totalDiscount = 0;
    let convenienceFee = 99;
    
    CartItemObjects.forEach(bagItem => {
        totalMrp += bagItem.original_price;
        totalDiscount += bagItem.original_price-bagItem.current_price;
    })
    
    let totalAmount = totalMrp-totalDiscount+convenienceFee;
    if(cartItems.length > 0){
        cartSummaryElement.innerHTML = ` 
        
        
        <div class="sum-container">
        <div class="total-items" > <span class="total-item-text">Total Items:</span> <span class="total-item-number">${totalItems}</span></div>
        <div class="total-mrp"><span class="total-mrp-text">Total MRP</span> <span class="total-mrp-number">Rs ${totalMrp}</span></div>
        <div class="total-discount"><span class="total-discount-text">Total Discount</span> <span class="total-discount-number">Rs ${totalDiscount}</span>  </div>
        <div class="convenience-fee"><span class="total-fee-text">Convenience Fee</span> <span class="total-fee-number">Rs ${convenienceFee}</span> </div>
        <div class="total-amount"><span class="total-amount-text">Total Amount</span> <span class="total-amount-number">Rs ${totalAmount}</span> </div>
        <button class="place-order">Place Order</button>
        </div>
        ` ;
    }
    else{
        cartSummaryElement.style.visibility="hidden";
        containerElement.style.visibility="hidden";
        let mainContainerElement = document.querySelector('.empty-cart-container');
        mainContainerElement.innerHTML = `
         <div class="empty-container">
            <img src="/Images/cart.png" alt="image" class="empty-cart-image">
            <div class="empty-cart-text" > Cart is Empty</div>
            <div class="go-shop-container" ><a href="/Equitas.html" class="go-shop">Go Shopping</a></div>
        </div>
        `;
    }
        
}
function loadCartItemObjects(){
    CartItemObjects = cartItems.map (Itemid => {
        for(let i = 0; i < products.length; i++)
            {
                if(Itemid == products[i].id)
                    {
                        return products[i];
                    }
                }
            });
            console.log(CartItemObjects);
        }
function displayCartItems(){
    containerElement = document.querySelector('.cart-products-container');
    let innerHtml = '';
    CartItemObjects.forEach(bagItem =>{
        innerHtml += generateItemHtml(bagItem);
    });
    containerElement.innerHTML = innerHtml;
   

       
   
}
// function displayBagIcon(){
//     let cartItemCountElement = document.querySelector('.cart-item-count');
//     if(cartItems.length > 0){
//         cartItemCountElement.style.visibility="visible";
//         cartItemCountElement.innerHTML = cartItems.length;
//     }else{
//         cartItemCountElement.style.visibility="hidden";
//     }
// }
function removeFromCart(Itemid){
    cartItems = cartItems.filter(cartItemid => cartItemid != Itemid);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCartItemObjects();
    displayBagIcon();
    displayCartItems();
    displayCartSummary();
}
function generateItemHtml(product){
    return `
        
            <div class="cart-product-container">
                <img class="cart-product-image" src="${product.product_image}" alt="image">
                <div class="cart-product-name">${product.product_name}</div>
                <div class="cart-price">
                    <span class="cart-current-price">Rs ${product.current_price}</span>
                    <span class="cart-original-price">Rs ${product.original_price}</span>
                    <span class="cart-discount">${product.discount}% OFF</span>
                </div>
                <div class="return-time">${product.return_time} days return time</div>
                <div class="delivery-time">${product.delivery_date}</div>
                <div class="remove-product" onclick='removeFromCart(${product.id})'>X</div>
            </div>
    `;
}