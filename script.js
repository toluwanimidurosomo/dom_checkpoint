/**
 * 
 * SELECT ALL TAGS
 * 
 */

// Get All products
let allProducts = document.getElementById("AllProducts");

// Add to cart button
let addToCartTag = document.getElementsByClassName("btn");

// Cart List Tag
let cartListTag = document.getElementById("cartList");

// let Total Price Tag
let totalPriceTag = document.getElementById("total");



/**
 *  ACTIONS / EVENT LISTENERS
 */

// Add to cart Button action
let allbtns  = addToCartTag.length;


// initialze empty cart array
let emptyCartArray = [];

for(let b = 0; b < allbtns; b++){
    addToCartTag[b].addEventListener("click", function(){
        let singleProductCont = addToCartTag[b].parentElement.parentElement;
        
        // product Price
        let price = singleProductCont.querySelector("#prodPrice").getAttribute("data-price");

        // product Name
        let pName = singleProductCont.querySelector("#prodName").textContent;

        // product Image
        let pimg = singleProductCont.querySelector("#prodImg").getAttribute("src");

        singleCart = {
            pName: pName,
            pPrice: price,
            pImage: pimg
        };

        emptyCartArray.push(singleCart);
        showCartList(emptyCartArray)
    })
}


function showCartList(cartListArray){
    let cartCount = cartListArray.length;
    let totalprice = 0;
    let allCart = ''
    for(let c = 0; c < cartCount; c++){
        totalprice = totalprice + parseInt(cartListArray[c].pPrice);
        allCart += `<div class="s-cart" id="s-cart">
                        <div class="c-img">
                            <img src="${cartListArray[c].pImage}" alt="" id="img">
                        </div>
                        <div class="c-details">
                            <h3 id="c-name">${cartListArray[c].pName}</h3>
                            <h4 id="c-price">$${cartListArray[c].pPrice}</h4>
                        </div>
                        <div class="delete-icon">
                            <button id="removeCart" class="c-btn">X</button>
                        </div>
                    </div>`;
    }

    cartListTag.innerHTML = allCart;
    totalPriceTag.textContent = "$"+totalprice;

}

