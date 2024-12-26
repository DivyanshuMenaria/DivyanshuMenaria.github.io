
let cartItems;
onload();
function onload(){
    let cartItemsStr = localStorage.getItem('cartItems');
    cartItems = cartItemsStr ? JSON.parse(cartItemsStr) : [];
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